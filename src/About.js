
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/productcontex'

const About = () => {
  const {myName} = useProductContext();

  const data= {
    name:"Abhay Ecommerce",
  }
  const data2 = {
    info:"Build websites with a drag-and-drop interface. Content automatically optimises for device. Everything you need to get anything done, now in one place: introducing Google Workspace. Embed Websites as iframes. No Programming Needed. Flexible Payment Plans. Easy Domain Registration. No Design Skills Needed. Create Sites Without Code. Easy-To-Create Websites. Integrated Workspace."
  }
  return(
  <>
  {myName}
   <HeroSection mydata={data} myinfo = {data2} /> 
  </>
  )
}

export default About




// import HeroSection from "./components/HeroSection";
// import { useProductContext } from "./context/productcontex";

// const About = () => {
//   const { myName } = useProductContext();

//   const data = {
//     name: "kholi Ecommerce",
//   };
//   const data2 = {
//     info:"Build websites with a drag-and-drop interface. Content automatically optimises for device. Everything you need to get anything done, now in one place: introducing Google Workspace. Embed Websites as iframes. No Programming Needed. Flexible Payment Plans. Easy Domain Registration. No Design Skills Needed. Create Sites Without Code. Easy-To-Create Websites. Integrated Workspace."
//   }

//   return (
//     <>
//       {myName}
//       <HeroSection myData={data} myinfo = {data2}  />
//     </>
//   );
// };

// export default About;
