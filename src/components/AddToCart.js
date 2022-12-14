import React, { useState } from 'react'
import styled from 'styled-components'
import {FaCheck} from "react-icons/fa"
import CartAmountToggle from './CartAmountToggle'
import { NavLink } from 'react-router-dom'


const AddToCart = ({product}) => {
    const {id,colors,stock} = product
    const [color , setColor] = useState(colors[0])
   const [amount,setAmount] = useState(1)

    const setDecrease = () => {
     amount > 1 ? setAmount(amount - 1) : setAmount (1)
     }
    const setIncrease = () => {
        amount > stock ? setAmount(amount + 1) : setAmount (stock)
     }

  return <Wrapper>
    <div className='colors'> 
    <p>Colors :
        {
        colors && colors.map((curColor,index)=>{
         return<button key={index} style={{backgroundColor:curColor}}  className={color===curColor ? "btnStyle active " : "btnStyle"} onClick={() => setColor(curColor)}>
         {color === curColor ? <FaCheck/> : null}   
         </button>})
        }
        </p>
    </div>

    {/* Add to cart  */}

    < CartAmountToggle
     amount={amount}
     setDecrease = {setDecrease}  
    setIncrease = {setIncrease}
    />
    <NavLink to="/cart">
      <button className="btn"> Add To Cart </button>
    </NavLink>
  </Wrapper>
}
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
    
    }
  }
  .btn {
    height:60px;
    width:30%;
    border:1px solid black;
    font-size:20px;
    background-color:white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .btn:hover {
    background-color: blue;
  }
`;
export default AddToCart;