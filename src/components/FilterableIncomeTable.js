import React from 'react'
import axios from 'axios'
import MainTable from './MainTable'
import * as Incomes from '../util/Income'

const url = 'https://recruitment.hal.skygate.io/companies';

class FilterableIncomeTable extends React.Component {
    constructor(){
        super();
        this.state = {
            data: null,
            isFetching: true,
        }
        this.onSort = this.onSort.bind(this);
    }

    componentDidMount(){
        this.fetchCompanyData();
    }

    onSort(event, sortConfig){
        const data = [...this.state.data];
        data.sort((a,b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
              }
              if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
              }
              return 0;
            });

        this.setState({data})
      }

    fetchCompanyData = async () => {
        const fetchIncomeData = async (id) => {
            const incomeUrl = `https://recruitment.hal.skygate.io/incomes/${id}`;
            const result = await axios(incomeUrl);
            return result.data;
        }
        
        this.setState({isFetching: true})
        try{
            const result = await axios(url);

            const incomeDataPromises = await result.data.map(async item => {
                const incomeData =  await fetchIncomeData(item.id);
                return Object.assign({}, item, incomeData);
            });

            const companiesData = await Promise.all(incomeDataPromises)

            const fullData = companiesData.map((item) => {
                const incomeData = Incomes.processCompaniesIncomeData(item.incomes);
                delete item.incomes;
                return Object.assign({}, item, incomeData)
            })

            this.setState({ data: fullData, isFetching: false });
        }
        catch(error){
            console.log(error);
            this.setState({isFetching: false });
        }
    }

    render(){
        return(
            <div className="table-container">
                { this.state.isFetching ? 
                    <h1>loading...</h1> : 
                    <MainTable 
                        data={this.state.data}
                        onSort={this.onSort}
                    />}
            </div>
        )
    }
}

export default FilterableIncomeTable;