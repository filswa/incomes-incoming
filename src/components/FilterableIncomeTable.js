import React from "react";
import axios from "axios";

import Loader from "./Loader";
import MainTable from "./MainTable";
import Searchbar from "./Searchbar";
import * as Incomes from "../util/Income";

class FilterableIncomeTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      isFetching: true,
      searchValue: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.fetchCompanyData();
  }

  fetchCompanyData = async () => {
    const fetchIncomeData = async (id) => {
      const incomeUrl = `https://recruitment.hal.skygate.io/incomes/${id}`;
      const result = await axios(incomeUrl);
      return result.data;
    };

    this.setState({ isFetching: true });
    try {
      const result = await axios(
        "https://recruitment.hal.skygate.io/companies"
      );

      const incomeDataPromises = await result.data.map(async (item) => {
        const incomeData = await fetchIncomeData(item.id);
        return Object.assign({}, item, incomeData);
      });

      const companiesData = await Promise.all(incomeDataPromises);

      const fullData = companiesData.map((item) => {
        const incomeData = Incomes.processCompaniesIncomeData(item.incomes);
        delete item.incomes;
        return Object.assign({}, item, incomeData);
      });

      this.setState({ data: fullData, isFetching: false });
    } catch (error) {
      console.log(error);
      this.setState({ isFetching: false });
    }
  };

  handleInputChange(searchValue) {
    this.setState({ searchValue });
  }

  getFilteredData(searchValue) {
    const filteredData = this.state.data.filter((item) => {
      const values = Object.values(item);
      let boolVal = false;

      for (const value of values) {
        if (
          value.toString().toLowerCase().includes(searchValue.toLowerCase())
        ) {
          boolVal = true;
          break;
        }
      }
      return boolVal;
    });
    return filteredData;
  }

  render() {
    return this.state.isFetching ? (
      <Loader />
    ) : (
      <React.Fragment>
        <Searchbar handleInputChange={this.handleInputChange}></Searchbar>
        <MainTable data={this.getFilteredData(this.state.searchValue)} />
      </React.Fragment>
    );
  }
}

export default FilterableIncomeTable;
