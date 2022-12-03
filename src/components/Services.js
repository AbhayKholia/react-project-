import styled from "styled-components"
import {TbTruckDelivery} from "react-icons/tb"
import {MdSecurity} from "react-icons/md"
import{GiReceiveMoney} from "react-icons/gi"


const Services = () => {
  return<Wrapper>
     <div className="container">
      
      <div  className="box1">
         <TbTruckDelivery className="icon" />
        <h3>Super Fast and Free Delivery</h3>
        </div>
      <div className="box2">
        <div> 
             <MdSecurity className="icon"/>
             <h4>Non-Contact Shipping</h4>
            </div>
        <div>
             <GiReceiveMoney className="icon"/>
             <h4>Money-Back Guaranteed</h4>
        </div>
      </div>
      <div className="box3">

           <GiReceiveMoney className="icon"/>
             <h4>Super Secure Payment System</h4>

      </div>

     </div>
    </Wrapper>
  
}
const Wrapper=styled.section`


.container{
    display:flex;
    height:300px;
    width:90%;
    margin: auto;
    margin-top:20px; 
    background-color:gray;
    // border-radius:30px;
}
.container div{
    width:28%;
    height:250px;
    background-color:#ffe0b8;
    border-radius:30px;
 
margin:auto;
text-align:center;
padding-top:25px;

}
.box2 div{
    height:100px;
    width:100%  ;
   
}
. box1{
   margin-top:30px;
}
.icon{
    width:30px;
    height:30px;
    // padding:2rem;
    border-radius:50%;
    background-color:#fff;
    color:#5138ee;
    marrin-top:30px;
    
}


`;


export default Services
