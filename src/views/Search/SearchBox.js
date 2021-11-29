import { useState } from "react";

export default function SearchBox () {
    const [searchText, setSearchText] = useState("");
    return(
        <div>
            Fain pipol
            <br />
            <label>
                <input value={searchText} onChange={({ target: {value} }) => setSearchText(value)} />
            </label>
            <button> fain</button>
        </div>
    );
}