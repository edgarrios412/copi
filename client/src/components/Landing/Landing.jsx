import { useEffect, useState } from "react";
import style from "./Landing.module.css"
import Nav from "../Nav/Nav"
import Banner from "../../assets/img.png"
import {MdLocationPin , MdOutlineTextsms , MdStayCurrentLandscape, MdSupportAgent} from "react-icons/md"
import { RxMagnifyingGlass } from "react-icons/rx"
import {GrMapLocation} from "react-icons/gr"
import { AiOutlineCar } from "react-icons/ai"


const Landing = () => {
  const [subtitle, setSubtitle] = useState(0)
  const [input, setInput] = useState("")
  const ciudades = ["Barranquilla", "Bogota","Zipaquira", "Bogotabio", "Zipacon", "Barrancabermeja"]
  const [ciudad, setCiudad] = useState([])


  useEffect(() => {
      setSubtitle(1)
  },[])

  useEffect(() => {
    if(subtitle == 3){
      setTimeout(() => {
        setSubtitle(1)
      },6000)
    }else{
    setTimeout(() => {
      setSubtitle(subtitle+1)
    },6000)
    }
  },[subtitle])

  const onChangeInput = (e) => {
    setInput(e.target.value)
    if(e.target.value.length > 1){
    return setCiudad(ciudades.filter(c => c.toLowerCase().includes(e.target.value.toLowerCase())))
    }else{
      setCiudad([])
    }
  }
  
  const selectCity = (city) => {
    setCiudad([])
    setInput(city)
  }

  return(
    <>
      <Nav/>
      <button className={style.support}><MdSupportAgent className={style.iconSupport}/></button>
      <div className={style.view1} style={{display:"flex"}}>
      <img className={style.banner} src={Banner}/>
        <div className={style.titleBannerContainer}>
          {subtitle == 1 && <div className={style.subtitle}>
            <h2 className={style.titleBanner}>Ahorra dinero</h2>
            <p className={style.subtitleBanner}>Al compartir un coche, los gastos de combustible y mantenimiento se dividen entre los pasajeros</p>
          </div>}
          {subtitle == 2 && <div className={style.subtitle}>
            <h2 className={style.titleBanner}>Conoce gente</h2>
            <p className={style.subtitleBanner}>Carpooling es una oportunidad para conocer gente nueva y hacer amigos, lo que puede enriquecer tu vida social y ampliar tus horizontes.</p>
          </div>}
          {subtitle == 3 && <div className={style.subtitle}>
            <h2 className={style.titleBanner}>Cuida el planeta</h2>
            <p className={style.subtitleBanner}>Al reducir el número de coches en la carretera, el carpooling ayuda a disminuir la huella de carbono y contribuye a la conservación del medio ambiente.</p>
          </div>}
          <div style={{display:"flex"}}>
          <MdLocationPin className={style.icon}/>
          <input onChange={onChangeInput} value={input} className={style.input} placeholder="¿A donde vas?"></input>
          <button className={style.buttonFind}><RxMagnifyingGlass className={style.iconLupa}/></button>
          </div>
          <div className={style.select}>
            {ciudad.map((c) => {
                return(
                  <p className={style.city} onClick={() => selectCity(c)}>{c}</p>
                )
            })}
          </div>
        </div>
      
      </div>
      <div className={style.view2}>
        <div className={style.why}>
          <div className={style.steps}>
            <div className={style.step}>
              {/* <p style={{textAlign:"center", color:"white"}}><GrMapLocation className={style.iconStep}/></p> */}
            </div>
            <div className={style.step}>
            {/* <p style={{textAlign:"center"}}><RxMagnifyingGlass className={style.iconStep}/></p> */}
            </div>
            <div className={style.step}>
            {/* <p style={{textAlign:"center"}}><MdOutlineTextsms className={style.iconStep}/></p> */}
            {/* <p className={style.descriptionStep}>Contacta con tu match y llega a un acuerdo para acordar el lugar de encuentro</p> */}
            </div>
            <div className={style.step}>
              {/* <p style={{textAlign:"center"}}><AiOutlineCar className={style.iconStep}/></p> */}
            </div>
          </div>
        </div>
        <div className={style.bannerView2}>
        <img style={{width:"500px"}} src="./src/assets/bannerUser.png"></img>
        <div>
        <h2 className={style.titleView2}>Busca el viaje que necesites</h2>
        <h4 className={style.subtitleView2}>Estas a un click de ir a lugar que necesites</h4>
        </div>
        </div>
        <div className={style.bannerView2}>
        <div>
        <h2 className={style.titleView2}>Trabaja con nosotros</h2>
        <h4 className={style.subtitleView2}>Inscribe tu vehiculo y sé parte de nosotros</h4>
        <button className={style.soyConductor}>Inscribirme</button>
        </div>
        <img style={{width:"500px"}} src="./src/assets/bannerConductor.png"></img>
        </div>
      <footer className={style.footer}>

      </footer>
      </div>
    </>
  )
};

export default Landing