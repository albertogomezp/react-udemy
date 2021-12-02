export default function SearchResultItem({item}) {
    return (
        <div className="result-card">
            <p>{item.name}</p>
            <p>{item.email}</p>
        </div>
    )
}