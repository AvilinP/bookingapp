import React from "react";
import SearchPhotos from "./SearchPhotos";

export default function SearchList() {

    return (
        <div className="m-0 p-0">
        <div className="min-w-20 p-10 mx-auto my-0 min-h-screen">
          <h1 className="text-center text-4xl">No inspiration? Find it here!</h1>
          <SearchPhotos />
        </div>
      </div>

    )
}
