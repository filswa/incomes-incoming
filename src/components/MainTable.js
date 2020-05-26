import React, { useState } from 'react';
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import useSortableData from './useSortableData'
import Pagination from './Pagination'

const MainTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.data);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(30);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const paginatedRows = items.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

    return(
      <div>
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
                <TableBody data={paginatedRows}/>
            </tbody>
        </table>
        <Pagination
          rowsPerPage={rowsPerPage}
          totalRows={items.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    )
}

export default MainTable;