import { useEffect, useState } from "react";
import "./Landing.css"
import Home from "../Home/Home"

const Landing = () => {
  const [step, setStep] = useState(1)
  const [input, setInput] = useState()

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

  return(
    <>
      {step == 1 && 
      <div className="aparecer">
        <h2 className="title">¿Donde te encuentras?</h2>
        <div className="input-container">
        <input className="input" name="start" onChange={handleInput} placeholder="Ciudad"/>
        </div>
        <h5 className="no-option" onClick={() => setStep(step+1)}>Prefiero no decirlo</h5>
      </div>}
      {step == 2 && 
      <div className="aparecer">
        <h2 className="title">¿A donde vas?</h2>
        <div className="input-container">
            <input className="input" name="destiny" onChange={handleInput} placeholder="Destino"/>
        </div>
        <h5 className="no-option" onClick={() => setStep(step+1)}>Prefiero no decirlo</h5>
      </div>}
      {step == 3 && 
      <div className="aparecer">
        <Home/>
      </div>}
    </>
  )
};

export default Landing