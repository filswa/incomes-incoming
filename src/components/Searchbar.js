import React, { useState } from 'react'

const Searchbar = (props) => {
    const [ input, setInput ] = useState("");

    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Find in table..."
            value={input}
            onChange={(e) => { 
                setInput(e.target.value);
                props.handleInputChange(e.target.value);
            }}
        >
        </input>
    )
}

export default Searchbar