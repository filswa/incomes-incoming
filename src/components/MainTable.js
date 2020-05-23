import React from 'react';

function MainTable(props) {
    
    return(
        <ul>
            {props.data.map(item => (
                <li key={item.id}>
                    {item.name}, {item.city}
                </li>))}
        </ul>
    
    )
}

export default MainTable;