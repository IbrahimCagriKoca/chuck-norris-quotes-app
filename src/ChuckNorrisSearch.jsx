import React, { useEffect, useState } from "react";
import ChuckNorrisSearchBar from './ChuckNorrisSearchBar';
import ChuckNorrisResultTable from './ChuckNorrisResultTable';

const fetchAllChuckNorrisQuote = (callback) => {
    fetch('http://api.icndb.com/jokes')
        .then((response) => response.json())
        .then((data) => {
            if (data && data.type === "success") {
                callback(data.value);
            }
        });
}

const ChuckNorrisSearch = () => {
    const [allJokes, setAllJokes] = useState([]);
    const [searchedJokes, setSearchedJokes] = useState([]);
    const [randomQuote, setRandomQuote] = useState([]);
    const [renderMode, setRenderMode] = useState("");

    useEffect(() => {
        fetchAllChuckNorrisQuote((jokes) => {
            setAllJokes(jokes);
        })
    }, []);

    const filterJokes = (searchedText) => {
        const lowerCaseSearchedText = searchedText.toLowerCase();
        const filtered = allJokes.filter(jokeItem => jokeItem.joke.toLowerCase().indexOf(lowerCaseSearchedText) > 0);
        setSearchedJokes(filtered);
        setRenderMode('searchQuote');
    }

    const showRandomQuote = () => {
        let randomQuoteItem = allJokes[Math.floor(Math.random() * allJokes.length)];
        setRenderMode('randomQuote');
        setRandomQuote(randomQuoteItem);
    }

    return (

        <div id="search-container">
            <h2>Chuck Norris Quotes</h2>
            <ChuckNorrisSearchBar onSearch={filterJokes} />
            <br />
            <button id="random-button" onClick={showRandomQuote}> Random Quote</button>
            <br />
            {renderMode === 'randomQuote' && (
                <span id="result" dangerouslySetInnerHTML={{ __html: (randomQuote.joke) }} />)}
            {renderMode === 'searchQuote' && (
                <ChuckNorrisResultTable jokes={searchedJokes} />)}
        </div>

    )
}

export default ChuckNorrisSearch;