import style from "./Chat.module.css";
import yo from "../../assets/fotoPerfil.png";
import { FiSettings } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { Element, scroller } from 'react-scroll';
import {Link} from "react-router-dom"


const Chat = () => {
  const [status, setStatus] = useState(true);
  
  useEffect(() => {
    scroller.scrollTo('messages', {
      duration: 0,
      delay: 0,
      smooth: 'linear',
      containerId: 'messages-container' // Reemplaza 'messages-container' con el ID o nombre de tu contenedor
    });
  },[])

  return (
    <div className={style.chat}>
      <div className={style.chatHeader}>
        <Link to="/profile"><img src={yo} className={style.userProfile} /></Link>
        <div className={style.dataUser}>
          <p className={style.userName}>Edgar Vilchez</p>
          {status ? (
            <p
              className={style.userStatusOn}
              onClick={() => setStatus(!status)}
            >
              En linea
            </p>
          ) : (
            <p
              className={style.userStatusOff}
              onClick={() => setStatus(!status)}
            >
              Activo hace 5h20m
            </p>
          )}
        </div>
        <p className={style.iconSettings}>
          <FiSettings />
        </p>
      </div>
      <Element className={style.chatMsg} id="messages-container">
        <div className={style.msgYo}>
          Hola como estás? Estuve viendo tus publicaciones y vi que llevabas
          gente gratis hasta donde quisieran, queria saber mas info
        </div>
        <div className={style.el}>
          <img src={yo} className={style.userProfileChat} />
          <div>
            <div className={style.msgEl}>
              Bien y tú? Si claro ando llevando gente de Bogotá a Zipaquira de
              forma gratis, si te interesa me dices
            </div>
            <div className={style.msgEl}>Que tal todo?</div>
          </div>
        </div>
        <div className={style.msgYo}>Todo bien gracias</div>
        <div className={style.msgYo}>¿Cual es tu ruta?</div>
        <div className={style.msgYo}>¿Cual es tu ruta?</div>
        <div className={style.msgYo}>¿Cual es tu ruta?</div>
        <div className={style.msgYo}>¿Cual es tu ruta?</div>
        <div className={style.msgYo}>Todo bien gracias</div>
        <div className={style.msgYo}>¿Cual es tu ruta?</div>
        <div className={style.msgYo}>¿Cual es tu ruta?</div>
        <div className={style.msgYo}>¿Cual es tu ruta?</div>
        <div className={style.msgYo}>¿Cual es tu ruta?</div>
        <div className={style.msgYo}>Todo bien gracias</div>
        <div className={style.msgYo}>¿Cual es tu ruta?</div>
        <div className={style.msgYo}>¿Cual es tu ruta?</div>
        <div className={style.msgYo}>¿Cual es tu ruta?</div>
        <Element name="messages" className={style.msgYo}>¿Cual es tu ruta?</Element>
      </Element>
    </div>
  );
};

export default Chat;
