import React from 'react';
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import useSortableData from './useSortableData'

const MainTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.data);
  
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

    return(
        <table className="styled-table">
            <thead>
              <tr>
                <th onClick={() => requestSort('id')} className={getClassNamesFor('id')}>Id</th>
                <th onClick={() => requestSort('name')} className={getClassNamesFor('name')}>Name</th>
                <th onClick={() => requestSort('city')} className={getClassNamesFor('city')}>City</th>
                <th onClick={() => requestSort('totalIncome')} className={getClassNamesFor('totalIncome')}>Total income</th>
                <th onClick={() => requestSort('averageIncome')} className={getClassNamesFor('averageIncome')}>Average income</th>
                <th onClick={() => requestSort('lastMonthIncome')} className={getClassNamesFor('lastMonthIncome')}>Last month income</th>
              </tr>
            </thead>
            <tbody>
                <TableBody data={items}/>
            </tbody>
        </table>
    )
}

export default MainTable;