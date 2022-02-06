import { React } from "react";
import "./home.css";
import intropic from '../assets/intropic.jpg';
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import "animate.css/animate.min.css";
import {Carousel} from 'react-bootstrap'
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import ScrollAnimation from "react-animate-on-scroll";
import privacy from "../assets/privacy.jpg";
import experts from '../assets/experts.png'
import smartcontract from '../assets/smart-contracts.jpg'
import pocketfriendly from '../assets/pocketfriendly.png'
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <div className="home">
  <ScrollToTop smooth />
      <div className = "company_logo">
        <div className = "logo">
    <img src = {logo}/>
        </div>
        <div className = "logoname">
              nameless
        </div>
      </div>
      

      <div className="intro">
        <br />
        <br />
   
        <div className="introwords">
          <span className>EXPLORE<br/> THE <br/>METAVERSE</span>
        </div>


        <div >
          <ScrollAnimation animateIn="animate__flipInY" animateOnce={true}>
          <img src = {intropic} width = "500rem"/>
          </ScrollAnimation>
        </div>
      </div>
<div class = "quotebg">
<div class = "quote">
 &lt; Cuz why shouldn't people be able to Teleport wherever they want ?  /&gt;
</div>
</div>

      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <div className="buttonsContainer">
          <NavLink className="nav-link" to="/products">
            <button className="go" onClick = {()=>document.documentElement.scrollTop = 0} >Go Ahead</button>
          </NavLink>
          <NavLink className="nav-link" to="/aboutus">
            <button className="creator" onClick = {()=>document.documentElement.scrollTop = 0}>
              <span className="text">ABOUT US</span>
            </button>
          </NavLink>
          <a href="#" style={{ textDecoration: "none" }}>
            <button className="creator">
              <span className="text" >OPEN SOURCE</span>
            </button>
          </a>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
      <div class = "privacycontainer">
      <div>
 
</div> 

      <div className="introsubtitle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        “If you're not paying for it, you're not the customer. You're the product.”<br/>
        EXPERIENCE THE RETURN OF PRIVACY WITH WEB 3.0
      </div>
      </div>
      </ScrollAnimation>
      <br />
      <br />
      
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
      <div className="carouselcontainer">
      <Carousel style = {{width:"50rem"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>       
      </div>
      </ScrollAnimation>
      <br/><br/>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
      <div className="stats">
        
        <div className="statsbox">
          <div className="statsbox_content">
            <div><img class = "featureimage" src = {smartcontract} width="300rem" height ="250rem"/></div>
              <div>PROTECTED </div>  
            <div> SMART</div>
            <div>CONTRACTS</div>
          </div>
        </div>
        <div className="statsbox">
          <div className="statsbox_content">
          <div><img class = "featureimage" src = {experts} width="300rem" height ="250rem"/></div>
              <div>DESIGNED</div>  
            <div> BY </div>
            <div>EXPERTS</div>
          </div>
        </div>
        <div className="statsbox">
          <div className="statsbox_content">
          <div><img class = "featureimage" src = {pocketfriendly} width="300rem" height ="250rem"/></div>
              <div>AFFORDABLE</div>  
            <div> PROJECTS</div>
          </div>
        </div>
      </div>
      </ScrollAnimation>
<br/><br/>
      <div class = "footer">
<div class = "footer2">
<br/>
  <div class = "blahcontainer">
  <div className = "counterandlogo">

    <div className = "live">
    <div className = "animate__animated animate__flash animate__infinite	infinite" >
        69<br/> LIVE
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
 
  );
};

export default Home;
