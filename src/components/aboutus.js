import React from "react";
import "./aboutus.css"
import logo from "../assets/logo.png"
import musk from "../assets/musk.jpeg"
import zuck from "../assets/zuck.jpg"
import group from "../assets/group.jpg"
import pic2 from "../assets/pic2.png"
import vr from "../assets/pic3.png"
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import CountUp from 'react-countup';
import sabari from "../assets/sabari.jpeg"
import ashneer from "../assets/ashneer.jpg"
import aman from "../assets/aman.jpg"
import { NavLink } from "react-router-dom";
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import ScrollToTop from "react-scroll-to-top";
import twitter from '../assets/twitter.png'
const AboutUs = () =>{
return(
  
    <div className = "aboutus">
          <ScrollToTop smooth />
        <NavLink to = "/home" className = "nav-link">
        <div className = "backbutton">
        <span>Back</span>
  <div className="liquid"></div>
        </div>
        </NavLink>
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <div className = "logomastercontainer">
<div className = "companylogo">
    <div className = "logo">
<img src = {logo} className = "logopic"/>
    </div>
    <div className = "companyname">
       @ Nameless
    </div>
</div>

<div className = "socialicons">

</div>

</div>
</ScrollAnimation>

<div className = "container">
<ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
<div className = "aboutpara1">
<br/><br/>
    We are a team of 300+ amazing members around the globe headed by Elon Zuckerberg and Mark Musk.
</div>
</ScrollAnimation>
</div>
<ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
<div className = "founders">
    
<div className="card">
<img src = {musk} width = "200rem" className = "founderpic" />
<div>Musk</div>
<div>Co-Founder and CEO</div>
</div>

<div className="card">
<img src = {zuck} width = "200rem" className = "founderpic" />
<div>Zuckerberk</div>
<div>Co-Founder and CMO</div>
</div>
</div>
</ScrollAnimation>

<ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
<div className = "container">
<div className = "aboutpara2">
    <br/><br/>
    Started as PROMINENT INVESTORS in CRYPTOCURRENCIES , they co-founded<br/> "Nameless" , a new way for the METAVERSE
</div>

</div>
</ScrollAnimation>
<ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
<div className = "groupphotocontainer">
    <div className = "groupphoto">
<img src = {group} width = "700rem" className = "grpphotoimage"/>
</div>

<div > Meet the Core team of Nameless</div>

</div>
</ScrollAnimation>
<ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
<div className = "investmentsandstats">
    
<div className="awardcard">
<div><CountUp end={20} duration = {1.5} delay = {6}/> + </div>
<div>Countries</div>

</div>

<div className="awardcard">
<div>$ <CountUp end={180} duration = {2.5} delay = {6}/> Mn+ </div>
<div>Funding</div>

</div>

<div className="awardcard">
<div> <CountUp end={30} duration = {2}  delay = {6} />% </div>
<div>Less Price</div>

</div>

</div>
</ScrollAnimation>

<ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
<div className = "investorstitle">Hear it from our investors !!</div>
</ScrollAnimation>
<div className = "investors">

<ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
<div className = "investor">
    <div>
    <img className = "investorpic"  src = {ashneer} />
</div>
<div className = "investorquotescontainer">
  <div className = "quotes">
    "" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim est malesuada nunc sollicitudin aliquam non sit amet libero. YEH SAB DOGLAPAN NAHI HAI faucibus, nulla lacus molestie est, vel tincidunt sem eros in turpis. Donec consectetur, magna ut facilisis rutrum, enim quam ornare felis, non consectetur massa velit id est. Pellentesque tincidunt nunc eu mauris interdum ultrices. Aliquam posuere, tortor quis gravida condimentum, elit arcu malesuada elit, ""
    </div>
    <div className = "investorname">
        Ashneer Grover <br/>Co-Founder, BharatPe
    </div>
</div>
</div>
</ScrollAnimation>
<ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
<div className = "investor">

<div className = "investorquotescontainer">
    <div className= "quotes">
    "" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim est malesuada nunc sollicitudin aliquam non sit amet libero. HAAN MAI DE DUNGA,TU TENSION MAT LE faucibus, nulla lacus molestie est, vel tincidunt sem eros in turpis. Donec consectetur, magna ut facilisis rutrum, enim quam ornare felis, non consectetur massa velit id est. Pellentesque tincidunt nunc eu mauris interdum ultrices. Aliquam posuere, tortor quis gravida condimentum, elit arcu malesuada elit, ""
    </div>
    <div className = "investorname">
    Aman Gupta <br/>Co-Founder and CMO , Boat
    </div>
</div>
<img className = "investorpic"  src = {aman} />
</div>
</ScrollAnimation>
<ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
<div className = "investor">
<img className = "investorpic" src = {sabari} />
<div className = "investorquotescontainer">
    <div className= "quotes">
    "" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim est malesuada nunc sollicitudin aliquam non sit amet libero. VAATHI COMING OTHU faucibus, nulla lacus molestie est, vel tincidunt sem eros in turpis. Donec consectetur, magna ut facilisis rutrum, enim quam ornare felis, non consectetur massa velit id est. Pellentesque tincidunt nunc eu mauris interdum ultrices. Aliquam posuere, tortor quis gravida condimentum, elit arcu malesuada elit, ""
    </div>
    <div className = "investorname">
    Sabari Ganesh <br/> Founder and CEO ,  Invisible Companies
    </div>
</div>
</div>
</ScrollAnimation>
<ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
<div className = "pictures">
    <div>
    <img src = {pic2} />
    </div>
    <div>
    <img src = {vr} />
    </div>
    
</div>

<div className = "pageendwords">
    Build the Future with Us !! Be a part of the WEB 3 !!
</div>
</ScrollAnimation>

<ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>

<div className = "socials">
    <div> <img src = {insta} className = "social"/> </div>
    <div> <img src = {linkedin} className = "social"/> </div>
    <div> <img src = {twitter} className = "social"/> </div>
    <div> <img src = {mail} className = "social"/> </div>
    <div> <img src = {fb} className = "social"/> </div>
</div>

</ScrollAnimation>


</div>
<br/><br/>
<div class = "footer">
<div class = "footer2">
<br/>
  <div class = "blahcontainer">

<div className = "counterandlogo">

    <div className = "live">
    <div className = "animate__animated animate__flash animate__infinite	infinite" >
    <CountUp end={69} duration = {3} delay = {5}/><br/> LIVE
        </div>
    </div>
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

export default AboutUs;