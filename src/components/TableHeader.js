import React from 'react';

function TableHeader(props) {
    
    return(
        <tr>
            <th onClick={e => props.onSort(e, 'id')}>Id</th>
            <th onClick={e => props.onSort(e, 'name')}>Name</th>
            <th onClick={e => props.onSort(e, 'city')}>City</th>
            <th onClick={e => props.onSort(e, 'totalIncome')}>Total income</th>
            <th onClick={e => props.onSort(e, 'averageIncome')}>Average income</th>
            <th onClick={e => props.onSort(e, 'lastMonthIncome')}>Last month income</th>
        </tr>
    )
}

export default TableHeader;

// import React from 'react';

// function TableHeader(props) {
    
//     return(
//         <tr>
//             <th onClick={e => props.onSort(e, 'id')}>Id</th>
//             <th onClick={e => props.onSort(e, 'name')}>Name</th>
//             <th onClick={e => props.onSort(e, 'city')}>City</th>
//             <th onClick={e => props.onSort(e, 'totalIncome')}>Total income</th>
//             <th onClick={e => props.onSort(e, 'averageIncome')}>Average income</th>
//             <th onClick={e => props.onSort(e, 'lastMonthIncome')}>Last month income</th>
//         </tr>
//     )
// }

// export default TableHeader;