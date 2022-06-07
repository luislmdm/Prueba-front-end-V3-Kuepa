import React from 'react'
import { fnPageSelected } from '../../helpers/fnPageSelected'

const MenuICO = () => {
  return (
        <svg data-name='menusvg' width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={fnPageSelected}>
            <path id='menusvg' d="M7.5 20H1V11.5H24.5V21M1 7H24.5M1 1.5H24.5" stroke="white" strokeWidth="2"/>
        </svg>  
    )
}

export default MenuICO