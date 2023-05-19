import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import Home from "../Home/Home";
import style from "./Travels.module.css"

const Travels = () => {
  return(
    <>
    <Nav/>
      <SearchBar/>
      <div className={style.view}>
      <Cards/>
      <Home/>
      </div>
    </>
  )
};

export default Travels;