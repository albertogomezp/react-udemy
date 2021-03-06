import { useState } from "react";

import "./style.css";
export default function SearchBox ({ onSearch, onClose, isSearching}) {
    const [searchText, setSearchText] = useState("");
    const handleSearchClick = () => {
        setSearchText("");
        onClose();
    }
    return(
        <div className="search-box">
            <h2 className="search-box-title"> Fain pipol </h2>
            <h3>da bast oan, belif me</h3>
            <div className="search-box-content">
                <br />
                <label>
                    <input className="search-box-input" value={searchText} onChange={({ target: {value} }) => setSearchText(value)} />
                </label>
                <button disabled={!searchText.length} onClick={() => onSearch(searchText) }>fain</button>
                {isSearching &&
                <button disabled={!searchText.length} onClick={handleSearchClick}>clous</button>}
            </div>
            
        </div>
    );
}