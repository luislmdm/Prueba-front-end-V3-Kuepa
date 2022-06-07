import { useState } from 'react'
import LinearProgressBar from './LinearProgressBar'

const GroupGoalCard = () => {

  const [progressMatriculas, setProgressMatriculas] = useState(50)
  const [progressLeads, setProgressLeads] = useState(50)


  return (
    <div className='group_goals_card'>
      <legend>Meta grupal</legend>
      <div className='progressbar_container'>
        <div>Leads obtenidos</div>
        <div>200/400</div>
      </div>
      <LinearProgressBar
        progressBar={progressLeads}
        id={'Leads'}
      />
      <div className='progressbar_container'>
        <div>Matrículas realizadas</div>
        <div>50/100</div>
      </div>
      <LinearProgressBar
        progressBar={progressMatriculas}
        id={'Matrículas'}
      />
    </div>
  )
}

export default GroupGoalCard