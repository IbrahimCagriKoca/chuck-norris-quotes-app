import React, { useState } from 'react'

const ChuckNorrisSearchBar = ({ onSearch }) => {
    const [searchText, setSearchedText] = useState('');

    return (
        <div id='search-bar'>
            <input id='search-bar-input' placeholder="Search..." name="search-text" type="text" onChange={(e) => setSearchedText(e.target.value)} />
            <button id="search-button" onClick={() => onSearch(searchText)}> Search</button>
        </div>
    )
}

export default ChuckNorrisSearchBar;