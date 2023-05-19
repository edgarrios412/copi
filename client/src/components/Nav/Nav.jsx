import style from "./Nav.module.css"
import logo from "../../assets/logo.png"
import { MdLocationPin } from "react-icons/md"
import { useState } from "react";
import {Link} from "react-router-dom"
import {HiUserCircle} from "react-icons/hi"
import location from "../../assets/location.png"
import yo from "../../assets/fotoPerfil.png"

const Nav = () => {
  const [modal, setModal] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  return(
    <>
      <nav className={style.nav} onClick={() => setIsLogged(!isLogged)}>
        <div className={style.divisor}>
            <img className={style.logo} src={logo}></img>
            <b className={style.city} onClick={() => setModal(true)}><MdLocationPin className={style.icon}/> Bogotá</b>
            <div className={style.login}>
            {isLogged ?<>
            <img src={yo} className={style.userProfileIcon}/>
            <Link to="/login" style={{textDecoration:"none"}}>
            <b className={style.ingresar} style={{marginLeft:"5px"}}>Edgar</b>
            </Link>
          </>:<>
            <HiUserCircle className={style.userIcon}/>
            <Link to="/login" style={{textDecoration:"none"}}>
            <b className={style.ingresar}>Ingresar</b>
            </Link>
          </>}
          </div>
        </div>
      </nav>
      {modal && <div className={style.modalContainer}>
        <div className={style.modal}>
          <button onClick={() => setModal(false)}>Cerrar</button>
          <div className={style.centrar}>
          <img src={location} className={style.imgLocation}/>
          </div>
          <p className={style.question}>¿Donde estás?</p>
          <p className={style.description}>Necesitamos saber donde te encuentras para ofrecerte los mejores resultados</p>
          <div className={style.centrar}>
          <select className={style.select}>
            <option>Zipaquirá</option>
          </select>
          <p className={style.autolocation}>Usar el GPS para localizarme</p>
          </div>
        </div>
      </div>}
      </>
  )
};

export default Nav