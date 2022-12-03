import React, {useState} from 'react'
import styled from 'styled-components';

const Myimage = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0])

  return <Wrapper>
<div className='grid'>
    <div>
    {
        imgs.map((curElm,index)=>{
            return(
                <figure>
                    <img src={curElm.url} 
                    alt={curElm.filemane}
                     className='box-image--style'
                     key={index}
                     onClick = {()=>setMainImage(curElm)}
                     />
                </figure>
            )
        })
    }
    </div>
</div>

<div className='main-screen'>
   < img src={mainImage.url} alt={mainImage.filemane}/>
</div>
  </Wrapper>

}
const Wrapper = styled.section`
.grid div{
    height:400px;
    width:18%;
    margin-top:-50px;
    cursor-pointer;
}
img{
    height:100px;
    width:40%;
    
}
.main-screen{
    position:absolute;
 margin-left:20%;
 margin-top:-18%;
}
.main-screen img{
    height:180px;
    width:40%;
}

`;

export default Myimage

