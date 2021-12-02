import SearchResultItem from "./SearchResultItem"
import "./style.css"
export default function SearchResults({ results, isSearching }) {
    return (
        <div className="result">
            {!results?.length && isSearching && <p>Results goesnt' brr...</p>}
            {results?.map((value) => {
                return <SearchResultItem className="result-card" item={value} key={value.id} />
            })}
        </div>
    )
}