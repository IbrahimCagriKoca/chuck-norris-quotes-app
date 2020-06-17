import React, { useEffect } from "react";
import { useState } from "react";
const FetchChuckNorrisQuote = (callback) => {
    fetch('http://api.icndb.com/jokes/random')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data && data.type === "success") {
                callback(data.value.joke);
            }
        });
}
const ChuckNorrisGenerator = () => {
    const [quote, setQuote] = useState("Chuck");
    return (
        <div>
            <button onClick={() => FetchChuckNorrisQuote(setQuote)}>Chuck Jokes</button>
        </div>
    )
}

export default ChuckNorrisGenerator;