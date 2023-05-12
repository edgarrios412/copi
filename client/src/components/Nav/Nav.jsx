import style from "./Nav.module.css"

const Nav = () => {
  return(
      <nav className={style.nav}>
        <div className={style.divisor}>
            <p className={style.logo}>COPI</p>
        <ul className={style.ul}>
          <li className={style.li}>Inicio</li>
          <li className={style.li}>Viajar</li>
          <li className={style.li}>Nosotros</li>
          <li className={style.li}>Ingresar</li>
        </ul>
        </div>
      </nav>
  )
};

export default Nav