import style from "./Inbox.module.css"
import Nav from "../Nav/Nav"
import yo from "../../assets/fotoPerfil.png"
import { IoIosArrowForward } from "react-icons/io"
import { useState } from "react";
import Chat from "../Chat/Chat";

const Inbox = () => {
    const [chatId ,setChatId] = useState(null)
  return(
    <div style={{width:"100vw",height:"100vh"}}>
    <Nav/>
    <div className={style.inbox}>
      {!chatId && <h3 className={style.titleSection}>Bandeja de entrada</h3>}
      {chatId == null ? <div className={style.inboxContainer}>
        <div className={style.mensajeContainer} onClick={() => setChatId(1)}>
            <img src={yo} className={style.userProfile}></img>
            <div className={style.msgContent}>
                <p className={style.userName}>
                Edgar Vilchez
                </p>
                <p className={style.msg}>
                Hola vi que ofrecias servicio de transporte queria pregunt..
                </p>
            </div>
            <p className={style.openMsg}><IoIosArrowForward/></p>
        </div>
        <div className={style.mensajeContainer} onClick={() => setChatId(2)}>
            <img src={yo} className={style.userProfile}></img>
            <div className={style.msgContent}>
                <p className={style.userName}>
                Equipo administrativo
                </p>
                <p className={style.msg}>
                Has recibido una advertencia por: Incumplimiento de...
                </p>
            </div>
            <p className={style.openMsg}><IoIosArrowForward/></p>
        </div>
      </div>:
      <Chat/>
      }
    </div>
    </div>
  )
};

export default Inbox