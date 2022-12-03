import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

const Sort = () => {
  const {filter_products, sorting} = useFilterContext
  return ( 
  <Weapper>
   <div className='sort-selection'>
    <form action='#'>

      <label htmlFor='sort'></label>
      <select name = "sort" id="sort" className='sort-selection' onClick={sorting}>
      <option value ="lowest">Price [low to high]</option>
      <option value="#" disabled></option>
      <option value ="highest">Price [high to low]</option>
      <option value="#" disabled></option>
      <option value ="a-z">Price [a-z]</option>
      <option value="#" disabled></option>
      <option value ="">Price [z-a]</option>
      
      </select>
    </form>
     </div>
 </Weapper>
  )
}

 const Weapper = styled.section`

 `
export default Sort
