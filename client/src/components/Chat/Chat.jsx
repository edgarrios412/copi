import style from "./Chat.module.css"
import yo from "../../assets/fotoPerfil.png"
import { FiSettings } from "react-icons/fi"
import { useState } from "react";

const Chat = () => {
    const [status,setStatus] = useState(true)
  return(
    <div className={style.chat}>
      <div className={style.chatHeader}>
        <img src={yo} className={style.userProfile}/>
        <div className={style.dataUser}>
            <p className={style.userName}>Edgar Vilchez</p>
            {status ? <p className={style.userStatusOn} onClick={() => setStatus(!status)}>En linea</p> :
            <p className={style.userStatusOff} onClick={() => setStatus(!status)}>Activo hace 5h20m</p>}
        </div>
        <p className={style.iconSettings}><FiSettings/></p>
      </div>
    </div>
  )
};

export default Chat