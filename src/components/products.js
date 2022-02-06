import React from "react";
import './products.css'
import pic1 from "../assets/pic1.png"
import logo from "../assets/logo.png"
import QRCode from "react-qr-code";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { NavLink } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
const Products = () =>{
return(
    <div>
                <NavLink to = "/home" className = "nav-link">
        <div className = "backbutton">
        <span>Back</span>
  <div className="liquid"></div>
        </div>
        </NavLink>
    <div className = "productspage">
    <ScrollToTop smooth />
        <div className = "logo">
            
        <img src = {logo}/>
        </div>
        

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
    <div className = "productsquote1">
" We make friction because we are Friction , it lived us into being and it lives as Such ! "
    </div>

    <div className = "projectsimage">
        <img src = {pic1} width ="700rem" />
    </div>
</ScrollAnimation>
<ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
    <div className = "productsquote2">
        <span style = {{background:"goldenrod",borderRadius:'20px' }}>
 &nbsp; We have you 360° Covered 🥂 &nbsp;  </span>
    </div>
    </ScrollAnimation>


    <br/><br/>
    <div className = "products">
    <ScrollAnimation animateIn=" animate__fadeInRight" animateOnce={true}>
        <div className = "education">
            <div className = "projecttitle">
                EDUCATION
            </div>
        <div className = "content1">
    <div className = "projectdesc1">
    Do you own a institue ? Need amazing virtual experience for your students ? WORRY NOT ! WE ARE HERE !!
    </div>
    <div className = "projectpreview1">
    <QRCode value = "https://sabz.netlify.app" size = "100" className = "QRCode"/>
    Preview
    </div>
        </div>
        <div className = "apply">
        <button className = "APPLYBUTTON"> APPLY
</button>
        </div>
        
        </div>
</ScrollAnimation>
<ScrollAnimation animateIn=" animate__fadeInLeft" animateOnce={true}>
        <div className = "education">
        <div className = "projecttitle">
                CIVIL
            </div>
        <div className = "content1">
    <div className = "projectdesc1">
    GEt the 3D Experience of future home before even placing your first Brick !! Feel the safety and warmth of your house for the first time virtually with us !
    </div>
    <div className = "projectpreview1">
    <QRCode value = "https://sabz.netlify.app" size = "100" className = "QRCode"/>
    Preview
    </div>
        </div>
        <div className = "apply">
        <button className = "APPLYBUTTON"> APPLY
</button>
        </div>

        </div>
</ScrollAnimation>
<ScrollAnimation animateIn=" animate__fadeInRight" animateOnce={true}>
          <div className = "education">
          <div className = "projecttitle">
                SIMULATION
            </div>
        <div className = "content1">
    <div className = "projectdesc1">
    Visualization of physics is no more Hard !! Whatever your simulation is , from cars to planes , we have the team to design the wonderful stuffs !!
    </div>
    <div className = "projectpreview1">
    <QRCode value = "https://sabz.netlify.app" size = "100" className = "QRCode"/>
    Preview
    </div>
        </div>
        <div className = "apply">
        <button className = "APPLYBUTTON"> APPLY
</button>
        </div>
         </div>
         </ScrollAnimation>
         
         <ScrollAnimation animateIn=" animate__fadeInLeft" animateOnce={true}>
        <div className = "education">
        <div className = "projecttitle">
                MENTAL HEALTH
            </div>
        <div className = "content1">
    <div className = "projectdesc1">
    Hear out Certified Psychiatrists and Psychologists !! You can now avail mental health VR way of fixing addictions , claustrophobia and many more !!  
    </div>
    <div className = "projectpreview1">
    <QRCode value = "https://sabz.netlify.app" size = "100" className = "QRCode"/>
    Preview
    </div>
        </div>
        <div className = "apply">
        <button className = "APPLYBUTTON"> APPLY
</button>
        </div>
         </div>
         </ScrollAnimation>
    </div>
<br/><br/><br/>
    </div>

    <div class = "footer">
<div class = "footer2">
<br/>
  <div class = "blahcontainer">
    <div class = "blah">
    <div class = "company_logo2">
        <div class = "logo">
    <img src = {logo}/>
        </div>
        <div class = "logoname">
              nameless
        </div>
      </div>
    </div>

    <div class = "linkscontainer">
  <a href = "#" style={{textDecoration:'none'}} class = "links" >Blogs</a>
   <div class = "bar">  &nbsp; &nbsp; &nbsp;</div>
   <a href = "#" style={{textDecoration:'none'}} class = "links">Careers</a> 
   <div class = "bar">  &nbsp; &nbsp;&nbsp;  </div>
  <a href = "#" style={{textDecoration:'none'}} class = "links">Legal Stuff</a>
   <div class = "bar">  &nbsp; &nbsp;&nbsp; </div> 
   <a href = "#" style={{textDecoration:'none'}} class = "links">Privacy Policy</a>
   <div class = "bar">  &nbsp; &nbsp;&nbsp; </div> 
   <a href = "#" style={{textDecoration:'none'}} class = "links">FAQ</a>
    </div>

    <div class = "copyrights">
    copyright@2017-2022 NamelessLLC. All Rights reserved
    </div>

  </div>
</div>
      
      </div>


    </div>
)
}
export default Products;