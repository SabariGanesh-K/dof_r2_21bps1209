import {React} from 'react'
import Home from './home';
import { Routes, Route} from "react-router-dom";
import AboutUs from './aboutus';
const Main = () =>{

    return(
        <div>
            <Routes>
                <Route path = "/home" element = {<Home/>}/>
                <Route path = "/aboutus" element = {<AboutUs/>}/>
                <Route path = "*" element = {<Home/>}/>
           
            </Routes>
        </div>
    )
}

export default Main