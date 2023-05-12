import { useEffect, useState } from "react";
import style from "./Landing.module.css"
import Nav from "../Nav/Nav"
import Banner from "../../assets/banner.avif"
import {MdLocationPin} from "react-icons/md"
import { RxMagnifyingGlass } from "react-icons/rx"

const Landing = () => {
  const [subtitle, setSubtitle] = useState(0)

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
  return(
    <>
      <Nav/>
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
          <input className={style.input} placeholder="¿A donde vas?"></input>
          <button className={style.buttonFind}><RxMagnifyingGlass className={style.iconLupa}/></button>
          </div>
        </div>
      
      </div>
      <div className={style.view2}>

      </div>
    </>
  )
};

export default Landing