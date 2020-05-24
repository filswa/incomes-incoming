import React from 'react'
import axios from 'axios'
import MainTable from './MainTable'
import * as Incomes from '../util/Income'

const url = 'https://recruitment.hal.skygate.io/companies';

class FilterableIncomeTable extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [],
            isFetching: false,
        }
    }

    componentDidMount(){
        this.fetchCompanyData();
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
            <div>
                { this.state.isFetching ? <h1>loading...</h1> : <MainTable data={this.state.data} />}                        
            </div>
        )
    }
}

export default FilterableIncomeTable;