import React from "react";
import styled from "styled-components";
import Product from "./Product";


const GridView = ({ products }) => {

  return (
    <Wrapper className="section">
      <div className="container ">
        {
         products && products.map((curElem) => {

          return <Product key={curElem.id} {...curElem} />;
        })
        }
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

.container{
    height:150%;
    width:50%;
    // border:1px solid black;
    display:grid;
    grid-template-rows: repeat(4, 300px);
    grid-template-columns: repeat(3, 300px);
    gap:20px;
    margin-left:30%;
    text-align:center;
   
}
 img {
    max-width: 100%;
    margin-top: 1.5rem;
    height: 200px;
    transition: all 0.2s linear;
}
.caption {
    position: absolute;
    top: 15%;
    right: 10%;
    text-transform: uppercase;
    background-color: black;
    color: white;
    padding: 0.2rem 1rem;
    font-size: 0.8rem;
    border-radius: 2rem;

}
figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
&:hover::after {
    width: 100%;
  }
  &:hover img {
    transform: scale(1.2);
 }
  .card {
    background-color: #fff;
    border-radius: 1rem;
    
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top:-10px;
    }
    h3 {
      color: blue;
      text-transform: capitalize;
    }
    .card-data--price {
      color: green;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
  
`;

export default GridView;