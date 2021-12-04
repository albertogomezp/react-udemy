import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import axios from "axios";
import "./style.css"
import SearchResults from "./components/SearchResults";

export default function Search() {
    const [isAtTop, setIstAtTop] = useState(false);
    // const [userData, setUsersData] = useState("");
    const [data, setData] = useState([])
    const [results, setResults] = useState(data);

    useEffect(() => {
        const getUsers = async () => {
            /*
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json();
            */
            try {
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
                console.log(data)
                setData(data)    
            } catch(error) {
                console.log(error)
            }
            
        };

        getUsers().catch(null);
    }, []);

    const handleSearchClick = (searchText) => {
        setIstAtTop(true);
        if (data?.length) {
            const searchTextCleaned = searchText.toLowerCase()
            const filteredData = data.filter((value) => (
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