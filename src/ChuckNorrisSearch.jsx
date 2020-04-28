import React, { useEffect, useState } from "react";

const fetchAllChuckNorrisQuote = (callback) => {
    fetch('http://api.icndb.com/jokes')
        .then((response) => response.json())
        .then((data) => {
            if (data && data.type === "success") {
                callback(data.value);
            }
        });
}


const renderJokeItemTableRow = (jokeItem) => {
    return (
        <tr key={`row-${jokeItem.id}`}>
            <td>{jokeItem.id}</td>
            <td>{<span dangerouslySetInnerHTML={{ __html: (jokeItem.joke) }} />}</td>
        </tr>
    );
}

const renderJokeTable = (jokes) => {
    return (jokes.length > 0
        ? (
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Joke</th>
                    </tr>
                </thead>
                <tbody>
                    {jokes.map(renderJokeItemTableRow)}
                </tbody>
            </table>
        ) : (
            <h2> No results found </h2>
        )
    );
}


const ChuckNorrisSearch = () => {
    const [allJokes, setAllJokes] = useState([]);
    const [searchedJokes, setSearchedJokes] = useState([]);
    const [searchedText, setSearchedText] = useState("");
    useEffect(() => {
        fetchAllChuckNorrisQuote((jokes) => {
            setAllJokes(jokes);
            setSearchedJokes(jokes);
        })
    }, []);
    useEffect(() => {
        if (searchedText.length > 3) {
            const lowerCaseSearchedText = searchedText.toLowerCase();
            const filtered = allJokes.filter(jokeItem => jokeItem.joke.toLowerCase().indexOf(lowerCaseSearchedText) > 0);
            setSearchedJokes(filtered);
        } else {
            setSearchedJokes(allJokes);
        }
    }, [searchedText]);

    return (
        <div style={{ fontSize: '9px' }}>
            <input placeholder="Search" name="search-text" type="text" onChange={(e) => setSearchedText(e.target.value)} />
            <br />
            <span>Searched Text: <strong>{searchedText}</strong></span><br />
            {renderJokeTable(searchedJokes)}
        </div >
    )
}

export default ChuckNorrisSearch;