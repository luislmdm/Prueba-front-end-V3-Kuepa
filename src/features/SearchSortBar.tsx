import React, { ChangeEventHandler, useEffect, useState } from 'react'
import filterICO from './../img/filter.svg'
import { getCurrentDate } from '../helpers/getDate'

const SearchSortBar = ({setFilter}:any) => {

  const [date, setDate] = useState<string>('')

  //Get Default value for input_date
  useEffect(() => {
    setDate(getCurrentDate())
  }, [])
  
  //Set value of the filter to be passed to the funtion that filters users peding for calling by name
  const handleOnChangeFilter:ChangeEventHandler<HTMLInputElement> = (e) => {    
    setFilter(e.target.value)
  }

  return (
    <div className='searhBar_container'>
    <div className='input_container'>
       <input id='search'
         placeholder="Search..."
         onChange={handleOnChangeFilter}                                            
       />
       <img src={filterICO} alt="filter"/>
     </div>
     <div className='input_container_date'>
       <input type="date" defaultValue={date}/>  
     </div>              
  </div>
  ) 
}

export default SearchSortBar