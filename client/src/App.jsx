import Landing from "./components/Landing/Landing"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import {Routes, Route} from "react-router-dom"
import Travels from "./components/Travels/Travels"
import CardDetail from "./components/CardDetail/CardDetail"
import Inbox from "./components/Inbox/Inbox"


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Travels/>}/>
      <Route path="/detail" element={<CardDetail/>}/>
      <Route path="/inbox" element={<Inbox/>}/>
    </Routes>
  )
}

export default App;
