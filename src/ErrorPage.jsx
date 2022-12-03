import React from 'react'
import styled from 'styled-components'
import { Button } from './components/HeroSection'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return <Wrapper>
   <div className='container'>
    <div>
      <h2>404</h2>
      <h3>UH OH ! You're lost.</h3>
      <p>
      The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot. A 404 status code only indicates that the resource is missing: not whether the absence is temporary or permanent.
      </p>
      <NavLink to ="/">
      <Button> 
        Go Back Home
        </Button>
      </NavLink>
      
    </div>
   </div>
  </Wrapper>
}
 const Wrapper = styled.section`
 .container{
  padding:4rem 0 ;
  text-align:center;
 margin-top:-30px;
 h2{
  font-size:3rem;
 }
 p{
  margin:2 rem 0;
  width:60%;
 margin:auto;
 padding: 0px 0px 20px 0px ;
 }
 Button{
  font-size:20px;
 }
}
 `
export default ErrorPage
