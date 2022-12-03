import { useProductContext } from "../context/productcontex"
import styled from "styled-components"
import Product from "./Product"


const FeatureProduct = () => {
    const { isLoading, featureProducts } = useProductContext();
    console.log(featureProducts)
  
    if (isLoading) {
      return <div className="page_loading"> ...Loading </div>;
    }
  
    return (
      <Wrapper className="section">
        <div className="container">
          <div className="intro-data" style={{fontWeight:"bold", fontSize:"30px"}}>Check Now!</div>
          <div className="common-heading" style={{fontSize:"25px"}}>Our Feature Services</div>
           <div className="grid">
            {
            featureProducts && featureProducts.map((curElem) => {
              return(<div><Product key={curElem.id} {...curElem} /></div>
              )
            })
            }
            </div>
         
        </div>
      </Wrapper>
    );
  };

const Wrapper = styled.section`
*{
  backgroung-color:;
}

  padding: 9rem 0;
  background-color:#E3E3E3;
  .container {
    max-width: 120rem;
    height:300px;
    margin-top:60px;
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
    img {
      max-width: 100%;
      margin-top: 1.5rem;
      height: 12rem;
      transition: all 0.2s linear;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 5%;
      text-transform: uppercase;
      background-color: white;
      color: blue;
      padding: 0.3rem 2rem;
      font-size: 0.8rem;
      border-radius: 2rem;
      margin-top:10px;

    }
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
    }
    h3 {
      color: black;
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
  .intro-data {
     margin-top:-10%;
     margin-left:20%;
  }
  .common-heading{
    margin-top:10px;
    margin-left:20%;
    font-size:20px;
  }
  .grid{
    display:flex;
    margin:auto;
    align-items:center;
    justify-content:center;
  }
  .card-data{
    margin-top:-20px;
  }
`;
export default FeatureProduct
