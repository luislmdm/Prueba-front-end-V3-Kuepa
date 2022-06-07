import React, { useState } from 'react'
import CircularProgressBar from './CircularProgressBar'

const GoalCard = () => {

  const [progressValue, setProgressValue] = useState<number>(50)
  const [progressEndValue, setProgressEndValue] = useState<number>(100)

  return (
    <div className='goal_card'>
      <div className='goal_progress'>
        <CircularProgressBar
          progressValue={progressValue}
          progressEndValue={progressEndValue}
        />
      </div>
      <div className='goals_description'>
        <div className='goal'>
          <div>Leades<br/>obtenidos</div>
          <div>50/100</div>
        </div>
        <div className='goal'>
          <div>Cola de<br/>llamados</div>
          <div>50/100</div>
        </div>
        <div className='goal'>
          <div>Matriculas<br/>finalizadas</div>
          <div>10/20</div>
        </div>
      </div>
    </div>
  )
}

export default GoalCard