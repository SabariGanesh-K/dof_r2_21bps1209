import React, { useState } from "react";
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
import { Control, LocalForm, Errors } from "react-redux-form";
import {Modal,ModalHeader,ModalBody,Row,Col,Label} from 'reactstrap'

const Subscribe = () =>{
const [isModalOpen,changeModalStatus] = useState(false)
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const required = (val) => val && val.length;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const mail = (val) => val && val.match(mailformat);

const togglemodal = () =>{
  changeModalStatus(!isModalOpen)
}
const onsubmit = () =>{
  changeModalStatus()
}
return(
  <React.Fragment>
  <button className = "creator" onClick={togglemodal}>
  <span className = "text" >SUBSCRIBE</span>
</button>

<Modal
  isOpen={isModalOpen}
  toggle={togglemodal}
  fade={false}
>
  <ModalHeader>Subscribe to our Newsletter .. </ModalHeader>
  <ModalBody>
    <LocalForm onSubmit={(values) => onsubmit}>
    

      <Row className="form-group">
        <Label htmlFor="name" md={2}>
          Name:
        </Label>
        <Col md={10}>
          <Control.text
            model=".name"
            id="name"
            name="name"
            className="form-control"
            validators={{
              required,
              minLength: minLength(3),
              maxLength: maxLength(15),
            }}
          />
          <Errors
            className="text-danger"
            model=".name"
            show="touched"
            messages={{
              required: "Required!",
              minLength: "Name must be atleast 3 characters..",
              maxLength: "Name must be less than 15 characters",
            }}
          />
        </Col>
      </Row>

      <Row className="form-group">
        <Label htmlFor="email" md={2}>
          Email
        </Label>
        <Col md={10}>
          <Control.text
            model=".email"
            id="email"
            name="email"
            className="form-control"
            validators={{
              required,
              mail
            }}
          />
          <Errors
            className="text-danger"
            model=".email"
            show="touched"
            messages={{
              required: "Required!",
              mail:"Enter a Valid mail Id"
            }}
          />
        </Col>
      </Row>

      <Row className="form-group">
        <Col md={{ size: 10, offset: 2 }}>
        
          <button className = "sendbutton" onClick= {()=>onsubmit()}  >
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
        </Col>
      </Row>
    </LocalForm>
  </ModalBody>
</Modal>
</React.Fragment>
)

}


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
       
        <div className="introwords">
          <span >EXPLORE<br/> THE <br/>METAVERSE</span>
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
          <div>
            <Subscribe/>
          </div>

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
            <div><img class = "featureimage" src = {smartcontract} width="200rem" height ="150rem"/></div>
              <div>PROTECTED </div>  
            <div> SMART</div>
            <div>CONTRACTS</div>
          </div>
        </div>
        <div className="statsbox">
          <div className="statsbox_content">
          <div><img class = "featureimage" src = {experts} width="200rem" height ="150rem"/></div>
              <div>DESIGNED BY</div>  
           
            <div>EXPERTS</div>
          </div>
        </div>
        <div className="statsbox">
          <div className="statsbox_content">
          <div><img class = "featureimage" src = {pocketfriendly} width="200REM" height ="150REM"/></div>
              <div style = {{textAlign:'center '}}>AFFORDABLE PROJECTS</div>  
         
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
