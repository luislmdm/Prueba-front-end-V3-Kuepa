import React, { MouseEventHandler } from 'react'
import { fnPageSelected } from '../../helpers/fnPageSelected'

const HomeIco = () => {
  return (

        <svg data-name='homesvg' width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={fnPageSelected}>
            <path id='homesvg' d="M9 24H2V11L12 3L22.5 11V26" stroke="white" strokeWidth="4"/>
        </svg>

  )
}

export default HomeIco