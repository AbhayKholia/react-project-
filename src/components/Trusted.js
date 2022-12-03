import React from 'react'
import styled from "styled-components"

const Trusted = () => {
  return <Wrapper> 
    <div className='bigbox'>

      <h3 style={{
        marginTop:"-15%",position:'absolute',
      }}>Trusted By 1000+ Companies</h3>
     <div>
      <img src='https://cdn.dribbble.com/users/2543315/screenshots/16765731/mt-01_4x.png' alt='meta logo'/>
     </div>
     <div>
    <img src='https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578' alt='amazone logo'/>
     </div>
     <div>
     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5Tb9lUwI6Gm5JAFAMZvqb1adZ_BB750iqQ&usqp=CAU' alt='apple logo'/>
     </div>
     <div>
      <img src='https://www.designmantic.com/blog/wp-content/uploads/2016/07/Netflix-Revamps-Logo-1280x720.jpg'  alt='Netflex logo'/>
     </div>
     <div>
      <img src='https://blog.hubspot.com/hubfs/image8-2.jpg'  alt='google logo'/>
     </div>
  
  </div>
    
  </Wrapper>

  
}
const Wrapper=styled.section`
margin-top:50px;

.bigbox{
  height :220px;
  width:93%;
  display:flex;
  justify-content:space-around;
  margin-left:10px;
  align-items:center;
  justify-content:center;
  padding:30px;
  // margir:left;
  background-color:#fff0f0;
}
.bigbox img{
  height:100px;
  width:8%;
  border-radius:50%;
 display : flex;
 margin-top:30px
}
.bigbox div{
 margin-left:20px;
}
`

export default Trusted
