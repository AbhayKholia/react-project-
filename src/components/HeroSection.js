import "./HeroSection.css"
import { NavLink } from 'react-router-dom'

import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: rgb(98 84 243);
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);

    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;


const HeroSection = ({mydata,myinfo}) => {

const {name } = mydata
const {info} = myinfo


  return (
  <div>
    <div className='container'> 
       <div className='grid grid-two-coloum'>
         <div className='hero-section-data'>
           <p className='intro-data'>Welcom to </p>
           <h1>{name}</h1>
           <p>{info}</p>
           <NavLink>
            <Button className='button'>Shop Now</Button>
           </NavLink>
          </div>
          {/* {Our Home Page Image} */}

          <div className='hero-section-image '>
            <figure>
                <img src = "images/hero.jpg" alt="hero" className="img-style"/>
            </figure>
          </div>

       </div>
    </div>
  </div>
  )
}

export default HeroSection


// A store is a physical or online place where consumers can purchase merchandise
//             . Stores often target a particular customer need and provide a product to fulfill 
//             that need. Typically, stores do not produce the goods they sell. Instead, they source products
//              from manufacturers or wholesale stores.



