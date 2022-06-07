import React from 'react'
import { fnPageSelected } from '../../helpers/fnPageSelected'

const NotasICO = () => {
  return (
        <svg  data-name='notassvg' width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={fnPageSelected}>
        <path id='notassvg' d="M1.5 23.5V1H23V22.5H14L12 25L9 22.5" stroke="white" strokeWidth="2"/>
        </svg>
  )
}
 
export default NotasICO