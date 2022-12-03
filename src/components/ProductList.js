// import React from 'react'
// import { useFilterContext } from '../context/filter_context'
// import GridView from './GridView'


// const ProductList = () => {

//   const {filter_products , setGridView} = useFilterContext()
  
//   if(setGridView ){
//     return <GridView products = {filter_products}/>
//   }
//   // if(setGridView === false){
//   //   return <ListView products = {filter_products}/>
//   // }
// }

// export default ProductList

import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
// import ListView from "./ListView";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }

  // if (grid_view === false) {
    // return <ListView products={filter_products} />;
  // }
};

export default ProductList