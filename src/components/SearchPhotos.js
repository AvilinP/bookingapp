import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js"; // with Json converter


const unsplash = new Unsplash({
    accessKey: process.env.REACT_APP_API_KEY,
});


export default function SearchPhotos() {

    const [query, setQuery] = useState(""); // stores user input
    const [pics, setPics] = useState([]); // stores pics from API
    console.log(pics)

    const searchPhotos = async (e) => {
        e.preventDefault();

        unsplash.search
            .photos(query, 1, 50) // sets the number of imgs shown
            .then(toJson)
            .then((json) => {
                setPics(json.results);
                console.log(json);
            });

    };

    return (
        <>
                    <form className="flex flex-col justify-center w-full" onSubmit={searchPhotos}>

                        <input
                            type="text"
                            name="query"
                            className="input-border text-xl px-2 py-4 h-12 w-full my-4"
                            placeholder={` Try "shirt" or "skirt"`}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit" className="btn m-0 mb-2">
                            Search
                        </button>
                    </form>

                    <div className="card-list">
                        {pics.map((pic) => <div className="mb-4 flex" key={pic.id}>
                            <img
                                className="flex-1"
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

