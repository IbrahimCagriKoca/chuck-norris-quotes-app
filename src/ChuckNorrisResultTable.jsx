import React from 'react';

const getRandomElements = (arr, n) => {
    return (
        [...arr].sort(() => 0.5 - Math.random()).slice(0, n)
    )
}

const renderJokeItemTableRow = (jokeItem) => {
    return (
        <tr key={`row-${jokeItem.id}`}>
            <td>{jokeItem.id}</td>
            <td>{<span id="result" dangerouslySetInnerHTML={{ __html: (jokeItem.joke) }} />}</td>
        </tr>
    );
}

const renderJokeTable = ({ jokes }) => {
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
                    {getRandomElements(jokes, 10).map(renderJokeItemTableRow)}
                </tbody>
            </table>
        ) : (
            <h2> No results found </h2>
        )
    );
}

export default renderJokeTable;