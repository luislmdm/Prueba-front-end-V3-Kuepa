import React from 'react'
import { fnPageSelected } from '../../helpers/fnPageSelected'

const TasksICO = () => {
  return (
    <svg data-name='tasksvg' width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={fnPageSelected}>
      <path id='tasksvg' d="M7 26.5H1.5V4.5H10L11.5 2L14.5 4.5H22.5V26.5M5.5 20.5H10M5.5 15.5H17.5M5.5 10H17.5" stroke="white" strokeWidth="2"/>
    </svg>
  )
}

export default TasksICO