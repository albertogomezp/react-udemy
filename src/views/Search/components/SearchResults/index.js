import "./style.css"
export default function SearchResults({ results }) {
    return (
        <div className="result">
            {results?.map((value) => {
                return (
                    <div key={value.id} className="result-card">
                        <p>{value.name}</p>
                        <p>{value.email}</p>
                    </div>
                )
            })}
        </div>
    )
}