import styled from "styled-components";
import Footer from "./components/Footer";
const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
   
    .btn{
      height:40px;
      width:100px;
      background-color: #008CBA;
      text-align :center;
      font-size:20px;
      color:white;
    }
    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;
        margin-top:-10px;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width:50%;
          text-align:center;
          margin auto;
          justify-content: center;
         
       

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              transform: scale(0.9);
            }
          }
        }
      }
    }
 
  `;

  return <Wrapper>
    <h2 style={{ marginTop:"-10%"}}>Contact Page</h2>
    <br/>
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2612044912726!2d73.91450561386885!3d18.5622590727449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1416b608a23%3A0x463d0c82828e78b7!2sPhoenix%20Marketcity%2C%20207%2C%20Viman%20Nagar%20Rd%2C%20Clover%20Park%2C%20Viman%20Nagar%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1668833642939!5m2!1sen!2sin"
     width="100%" height="300" style={{border:"0",marginTop:"-20px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mpznnqaa" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name = "username" required autoComplete="off" />
          <input type="email" placeholder="Email" name = "Email" required autoComplete="off"/>
          <textarea name="Message" cols="30" rows="10" required autoComplete="off" placeholder="Enter your message"></textarea>
          <input type = "submit" value="send" className="btn" />
        </form>
      </div>
    </div>

   
  </Wrapper>;
};

export default Contact;