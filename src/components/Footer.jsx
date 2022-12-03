
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {FaDiscord,FaInstagram,FaYoutube} from "react-icons/fa"


const Footer = () => {
  return <Wrapper>
     <div className= "contact-short">
        <div className='grid '>
          <div>
            <h4>Ready to get started?</h4>
            <h4>Talk to us today</h4>
          </div>
          <button className='btn1'>
            <NavLink to="/contact" style={{color:"white"}}>
              Get Started
            </NavLink>
          </button>
        
        </div>
        <div className='box2'>
            <div>
              <h5 style={{position:"absolute",marginTop:"10px"}}>Kholi web</h5>
              <br/>
              <h5>A general merchant store is a rural or small-town store that carries a general line of merchandise.</h5>
              </div>


              <div >
               <h5> Subscribe to get important updates</h5>
                <input placeholder='Email'/>
                <br/>
                <button style={{backgroundColor:"#5862EA" , color:"white",marginTop:"10px",border:"none",height:"20px"}}>SUBSCRIBE</button>
              </div>

              <div >
                <h5>Follow Us</h5>
                  <FaDiscord className="icons"/>
                  <FaInstagram className="icons"/>
                  <FaYoutube className="icons"/>
              </div>

              <div>
               <h5> Call Us</h5>
               < a href='tel:9098756235'> 9098756235</a>
              </div>
         </div>
        </div>
    </Wrapper>
  
} 

const Wrapper = styled.section`
.contact-short{
  margin-top:50px;
}
  .grid{
    heigth:40px;
    width:50%;
    background-color:#DEDFE8;
    margin-top:60px;
    display:flex;
    justify-content:space-between;
    margin:auto;
    align-items:center;
    padding-left:60px;
    padding-right:60px;
    border-radius:20px;
    position:relative;
   
    }
  .btn1{
    height:30px;
    width:100px;
  background-color:#4A89DC;
  border:none;
  color:white;
  border-radius:20px;

  }
.box2{
  height:300px;
  width:100%;
  background-color:#171D73;
  margin-top:-30px;
  display:flex;
  color:white;
  font-family:Gill Sans;
}
.box2 div{
  justify-content:space-around;
  width:20%;
  margin:auto;
  justify-content:center;
  align-item:center;
  align-text: center;
  margin-left:10%
}
.icons{
  justify-content:space-around;
  padding:10px;
}
`;

export default Footer
