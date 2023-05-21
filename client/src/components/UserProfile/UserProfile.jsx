import Nav from "../Nav/Nav";
import style from "./UserProfile.module.css"
import yo from "../../assets/fotoPerfil.png"

const UserProfile = () => {
  return(
    <>
      <Nav/>
      <div className={style.profileContainer}>
      <div className={style.profileUser}>
      <div>
      <p className={style.userName}>Edgar</p>
      <p className={style.userAge}>21 años</p>
      </div>
      <img className={style.iconUser} src={yo}></img>
      </div>
      <h4 className={style.experience}>Nivel de experiencia: Experto</h4>
      <div className={style.reviewsContainer}>
        <img></img>
        <p className={style.reviews}>4,8/5 - 74 Opiniones</p>
        <img></img>
      </div>
      <div className={style.hability}>
        <img></img>
        <p>2.9/3 - Buenas habilidades de conducción</p>
        <img></img>
      </div>
      <div className={style.profileVerification}>
        <h3 className={style.stateAccount}>Edgar tiene un perfil verificado</h3>
        <ul className={style.requisitos}>
          <li className={style.requisito}>Documento de identidad verificado</li>
          <li className={style.requisito}>Correo electronico verificado</li>
          <li className={style.requisito}>Telefono verificado</li>
        </ul>
      </div>
      <div className={style.report}>
        <h3>Alertar sobre este usuario</h3>
      </div>
      </div>
    </>
  )
};

export default UserProfile