import SearchResultItem from "./SearchResultItem"
import "./style.css"
export default function SearchResults({ results, isSearching }) {
    return (
        <div className="result">
            {!results?.length && isSearching && <p>Results goesnt' brr...</p>}
            {results?.map((value) =>  <SearchResultItem className="result-card" {...value} key={value.id} /> )}
        </div>
    )
}