import React from 'react';
import TableHeader from './TableHeader'
import TableBody from './TableBody'

function MainTable(props) {
    
    return(
        <table className="styled-table">
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                <TableBody data={props.data}/>
            </tbody>
        </table>
    )
}

export default MainTable;