import React from 'react';

function TableBody(props) {
    return(
        props.data.map(item => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>Total income</td>
            <td>Average income</td>
            <td>Last month income</td>
        </tr>
        ))
    )
}

export default TableBody;
