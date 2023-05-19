import style from "./Login.module.css"
import logo from "../../assets/logo.png"
import banner from "../../assets/bannerLogin.jpg"
import banner2 from "../../assets/bannerRegister.jpg"
import banner3 from "../../assets/bannerConfirm.jpg"
import {MdMail} from "react-icons/md"
import { useState } from "react";
import { Link } from "react-router-dom"

const Login = () => {
  const [step, setStep] = useState(1)
  return(
    <div className={style.login}>
      {step == 1 && <><div className={style.banners}>
      <img src={banner} onClick={() => setStep(2)}></img>
      </div>
      <div className={style.loginContainer}>
            <div style={{textAlign:"center", marginTop:"30px"}}><img style={{width:"60px"}}src={logo}/></div>
            <h2 className={style.title}>Ingresar</h2>
            <form className={style.form}>
            <label className={style.labelForm} for="user">Usuario</label>
            <input autoFocus name="user" className={style.input}/>
            <label className={style.labelForm} for="pass">Contraseña</label>
            <input name="pass" type="password" className={style.input}/>
            <div className={style.checkForm}>
            <input className={style.checkbox} type="checkbox"/><b className={style.session}>Mantener sesión iniciada</b>
            </div>
            <button className={style.buttonLogin} onClick={() => setStep(3)}>Ingresar</button>
            <p className={style.forgot}>Olvidé mi contraseña</p>
            <p className={style.registerTotal} onClick={() => setStep(2)}>¿Aún no tienes cuenta?<b className={style.register}> Registrate</b></p>
            </form>
      </div></>}
      {step == 2 && <>
      <div style={{marginTop:"50px"}} className={style.banners}>
      <img src={banner2} onClick={() => setStep(3)}></img>
      </div>
      <div className={style.loginContainer}>
            <div style={{textAlign:"center", marginTop:"30px"}}><img style={{width:"60px"}}src={logo}/></div>
            <h2 className={style.title}>Registro</h2>
            <form className={style.form}>
            <label className={style.labelForm} for="user">Usuario</label>
            <input autoFocus name="user" className={style.input}/>
            <label className={style.labelForm} for="email">Email</label>
            <input name="email" type="text" className={style.input}/>
            <label className={style.labelForm} for="pass">Contraseña</label>
            <input name="pass" type="password" className={style.input}/>
            <label className={style.labelForm} for="pass">Repetir contraseña</label>
            <input name="pass" type="password" className={style.input}/>
            <div className={style.checkForm}>
            {/* <input className={style.checkbox} type="checkbox"/><b className={style.session}>Acepto los términos y condiciones</b> */}
            </div>
            <button className={style.buttonLogin} onClick={() => setStep(3)}>Registrarme</button>
            {/* <p className={style.forgot}>Olvidé mi contraseña</p> */}
            <p className={style.registerTotal} onClick={() => setStep(1)}>¿Ya tienes cuenta?<b className={style.register}> Ingresa</b></p>
            </form>
      </div>
      </>
      }
      {
        step == 3 && <>
          <div className={style.banners}>
      <Link to="/home"><img src={banner3}></img></Link>
      </div>
      <div className={style.loginContainer}>
            <div style={{textAlign:"center", marginTop:"30px"}}><img style={{width:"60px"}}src={logo}/></div>
            <h2 className={style.titleVerified}>Hemos enviado un email de verificación</h2>
            <h4 className={style.descVerified}>En el correo te hemos obsequiado un código para obtener tu primer viaje gratis</h4>
            <div className={style.emailIcon}><MdMail/></div>
            <form className={style.formVerified}>
            <label className={style.labelForm} for="user">Codigo de verificación</label>
            <input autoFocus name="user" className={style.input}/>
            <button className={style.buttonVerified} onClick={() => setStep(3)}>Enviar</button>
            </form>
      </div></>}

    </div>
  )
};

export default Login