import React, { useState, useEffect  } from 'react';
import axios from 'axios';

import MainTable from './MainTable'

function FilterableIncomeTable() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = 'https://recruitment.hal.skygate.io/companies'
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const result = await axios(url);

            setData(result.data);
            setLoading(false);
            };
            
        fetchData();
      }, []);

    return(
        <div>
            { loading ? <h1>loading...</h1> : <MainTable data={data}/>}                        
        </div>
    )
}

export default FilterableIncomeTable;