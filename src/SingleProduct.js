import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontex";
import Myimage from "./components/Myimage";
import {TbTruckDelivery,TbReplace} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  return(<Wrapper>
     <div className="container">
       
        {/* product Images */}
        <div className="product_images">
        <Myimage imgs={image}/>
        </div>
        {/* {product_data} */}
        <div className="product_data">
        <h2>{name}</h2>
        <Star stars={stars} Reviews={reviews}/>
         <h4>Rs:{price}</h4>
         <p>{description}</p>
         
         <div className="ico">
          <div>
          <TbTruckDelivery className="warranty-icon"/>
          <p>Free Delivery</p>
          </div>
          <div>
          <TbReplace className="warranty-icon"/>
          <p>30 Days Replacement</p>
          </div>
          <div>
          <TbTruckDelivery className="warranty-icon"/>
          <p>Kholi Delivery</p>
          </div>
          <div>
          <MdSecurity className="warranty-icon"/>
          <p>2 Year Warranty</p>
          </div>
          
         </div>
        
         <p>Available: {stock}</p>
         <p>ID: {id}</p>
          <p>Brand: {category}</p>
          
         <hr style={{maxWidth:"100%",width:"80%",border:"1px solid black",}}/>
         {stock > 0 && <AddToCart product= {singleProduct}/>}
         </div>
     </div>
  </Wrapper>
  )
};

const Wrapper = styled.section`

 .container{
  width:90%;
  height:auto;
  // border:1px solid black;
  margin:auto;
  justify-content:center;
  align-items:center;
  margin-top:20px;
  display:flex;
 
 }
.container div{
  width:50%;
}
 .product_data{
  width:50%;
  // border:1px solid gray;
//  text-align:center;
padding-left: 50px;
  padding-right:30px

 }
 .product_data p{
  width:70%;
 }
.warranty-icon{
  background-color:rgba(220,220,220,0.5);
  border-radius:50%;
  width:30px;
  height:30px;
  padding:0.6rem;

}
.ico{
  display:flex;
  gap:70px;
  // border:1px solid gray;
}
// .ico p{
//  width:100%;
//  display:flex;
}
`;

export default SingleProduct;

