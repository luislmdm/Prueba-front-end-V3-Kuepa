import SearchSortBar from "../../features/SearchSortBar"

const Header = ({setFilter}:any) => {
  return (
    <div className="header_container">
        <SearchSortBar setFilter={setFilter}/>
        <div className="user_name">
            <h1>Hola, Jorge</h1>
        </div>
    </div>
  )
}

export default Header