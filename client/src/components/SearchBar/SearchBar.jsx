import style from "./SearchBar.module.css"
import {TbPoint} from "react-icons/tb"
import {RiUser5Line} from "react-icons/ri"

const SearchBar = () => {
  return(
    <div className={style.searchBar}>
      {/* <label className={style.icons} for="origen"><TbPoint/></label> */}
      <input name="origen" className={style.input} placeholder="Origen"/>
      {/* <label className={style.icons} for="destino"><TbPoint/></label> */}
      <input name="destino" className={style.input} placeholder="Destino"/>
      <input type="date" className={style.input} placeholder="Fecha"/>
      {/* <label for="user" className={style.iconPersona}><RiUser5Line/></label> */}
      <input name="user" type="number" className={style.input} placeholder="Personas"/>
      <button className={style.buttonFind}>Buscar</button>
    </div>
  )
};

export default SearchBar