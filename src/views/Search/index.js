import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css"
import data from "../../data/users.json"
import SearchResults from "./components/SearchResults";

export default function Search() {
    const [isAtTop, setIstAtTop] = useState(false);
    const [userData, setUsersData] = useState(data);
    const [results, setResults] = useState([]);

    const handleSearchClick = (searchText) => {
        setIstAtTop(true);
        if (userData?.length) {
            const searchTextCleaned = searchText.toLowerCase()
            const filteredData = userData.filter((value) => (
                value.name.toLowerCase().includes(searchTextCleaned) || 
                value.phone.toLowerCase().includes(searchTextCleaned) ||
                value.username.toLowerCase().includes(searchTextCleaned) ||
                value.email.toLowerCase().includes(searchTextCleaned)
                )
            );
            setResults(filteredData);
        }
    };
    const handleCloseClick = () => {
        setIstAtTop(false)
        setResults([])
    }
    console.log(results)

    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}> 
            <SearchBox isSearching={isAtTop} onSearch={handleSearchClick} onClose={handleCloseClick} />
            <SearchResults results={results} isSearching={isAtTop} />
        </div>
    );
}