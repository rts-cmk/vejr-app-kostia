import "./SearchBar.css"

export default function SearchBar({city, setCity, onSearch}) {
    return(
        <form onSubmit={onSearch}>
            <input type="search" value={city} onChange={(e) => setCity(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}