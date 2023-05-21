import style from "./Card.module.css"
import {HiStar} from "react-icons/hi"
import {Link} from "react-router-dom"

const Card = () => {
  return(
      <Link to="/detail">
      <div className={style.card}>
        <div className={style.cardTop}>
        <div className={style.cardTopLeft}>
          <li className={style.li}>
            <div className={style.horaContainer}>
            <b className={style.hora}>03:00</b>
            <b className={style.tiempoViaje}>9h00</b>
            </div>
            <b className={style.divisor}>
              <div className={style.bolita}></div>
              <div className={style.rayita}></div>
            </b>
            <b className={style.ciudad}>Zipaquirá</b>
          </li>
          <li className={style.li}>
            <b className={style.hora}>12:00</b>
            <b className={style.divisor}>
              <div className={style.bolita}></div>
              {/* <div className={style.rayita}></div> */}
            </b>
            <b className={style.ciudad}>Bogotá</b>
          </li>
        </div>
        <div className={style.cardTopRight}>
            <b className={style.price}>2.500$</b> 
        </div>
        </div>
        <div className={style.cardBottom}>
          <div className={style.imgUser}></div>
          <div className={style.dataUser}>
            <p className={style.nameUser}>Edgar</p>
            <p className={style.calification}><HiStar className={style.starIcon}/><span>4,8</span></p>
          </div>
        </div>
      </div>
      </Link>
  )
};

export default Card