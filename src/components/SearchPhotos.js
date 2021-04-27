import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js"; // with Json converter


const unsplash = new Unsplash({
    accessKey: process.env.REACT_APP_API_KEY,
});


export default function SearchPhotos() {

    const [query, setQuery] = useState(""); // stores user input
    const [pics, setPics] = useState([]);
    console.log(pics)

    const searchPhotos = async (e) => {
        e.preventDefault();

        unsplash.search
            .photos(query, 1, 50)
            .then(toJson)
            .then((json) => {
                setPics(json.results);
                console.log(json);
            });

    };

    return (
        <>
                    <form className="form" onSubmit={searchPhotos}>
                        <label className="label" htmlFor="query">
                            {" "}
                            📷
                        </label>
                        <input
                            type="text"
                            name="query"
                            className="input"
                            placeholder={`Try "nails" or "manicure"`}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit" className="button">
                            Search
                        </button>
                    </form>

                    <div className="card-list">
                        {pics.map((pic) => <div className="cardResult" key={pic.id}>
                            <img
                                className="card--image"
                                alt={pic.alt_description}
                                src={pic.urls.full}
                                width="50%"
                                height="50%"
                            ></img>
                        </div>)}
                    </div>

        </>
    );
}

