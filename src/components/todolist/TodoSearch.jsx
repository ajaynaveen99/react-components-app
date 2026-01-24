import { useState } from "react";

export default function TodoSearch({handleSearch}) {
    


    return (<>

        <input type="text" placeholder="search" className="search-input"
            onChange={handleSearch} />

    </>)

}