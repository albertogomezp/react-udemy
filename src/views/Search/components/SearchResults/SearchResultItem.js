export default function SearchResultItem({name, email}) {
    return (
        <div className="result-card">
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}