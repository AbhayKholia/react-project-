import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import About from "./About"; 
import Cart from "./Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Products from "./Products";
import SingleProduct from "./SingleProduct";


const App = () => {
  return (
   
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/about" element={<About/>} />
      <Route path ="/products" element={<Products/>} />
      <Route path ="/contact" element={<Contact/>} />
      <Route path ="/singleproduct/:id" element={<SingleProduct/>} />
      <Route path ="/cart" element={<Cart/>} />
       <Route path= "*" element = {<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
  );
}

export default App;




