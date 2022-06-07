import GoalCard from "../cards/GoalCard"
import GroupGoalCard from "../cards/GroupGoalCard"
import LeadCard from "../cards/LeadCard"
import SchedulCard from "../cards/SchedulCard"
import { leadsPrimerContacto, leadsConfirmarCita, leadsUltimoIntento } from "../../data/leads"
import arrowIco from './../../img/arrow.svg'
import Header from "./Header"
import useFetch from "../../hooks/useFetch"
import { MouseEventHandler, useState } from "react"
import openChat from "./../../img/openChat.svg"


const Main = ({isModalList, setIsModalList}:any) => {
  const [isFiltering, setIsFiltering] = useState<boolean>(false)
  const [filter, setFilter] = useState<string>('')

  //Get pending users for calling
  const URLAPI = 'https://api.opendota.com/api/heroes'   
  const [data] = useFetch(URLAPI)

  //Activates||disables list of messages in mobile version
  const handleModalLis:MouseEventHandler<HTMLDivElement> = (e) =>{
    setIsModalList(!isModalList);
  }

  return (
    <div className='main_container'>
      <div className="openchatICO" onClick={handleModalLis}>
        <img src={openChat}/>
      </div>
      <div className="header">
        <Header setFilter={setFilter}/>
      </div>
      <div className="rows">
        <GoalCard/>
        <GroupGoalCard/>
      </div>
      <div className="rows">
        <SchedulCard data={data} isFiltering={isFiltering} filter={filter} setIsFiltering={setIsFiltering}/>
        <div className="grid_container">
          <div className="header_container">
            <h2>Tu plan de hoy</h2>
            <small>Ir a la gestion de llamados<img src={arrowIco} alt=''/></small>
          </div>
         <div className="leadCards_grid_container">
           <LeadCard leadsProps= {leadsPrimerContacto}/> 
           <LeadCard leadsProps= {leadsConfirmarCita}/> 
           <LeadCard leadsProps= {leadsUltimoIntento}/> 
         </div>
        </div>
      </div>
    </div>
  )
}

export default Main