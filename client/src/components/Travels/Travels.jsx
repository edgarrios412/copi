import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Travels.module.css"

const Travels = () => {
  return(
    <>
    <Nav/>
      <SearchBar/>
      <div className={style.view}>
      <Cards/>
      </div>
    </>
  )
};

export default Travels;