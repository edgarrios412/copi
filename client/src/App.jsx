import Landing from "./components/Landing/Landing"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import {Routes, Route} from "react-router-dom"


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  )
}

export default App;
