import { useState, useEffect, MouseEventHandler } from "react"
import useFetch from "../../hooks/useFetch"
import UserCard from "../cards/UserCard"
import { usersMsg } from "../../interfaces/usersMsg"
import closesvg from './../../img/close.svg'

const RightSideBar = ({isModalList, setIsModalList}:any) => {

  const [usersRender, setUsersRender] = useState<usersMsg[]>([])

  //Get list of pending messages
  const URLAPI = 'https://api.opendota.com/api/proPlayers'
  const [data] = useFetch(URLAPI)

  //Activates||disables list of messages in mobile version
  const handleModalLis:MouseEventHandler<HTMLDivElement> = (e) =>{
    setIsModalList(false);
  }

  //Set list of pending messages for rendering
  useEffect(() => {
    if(data)setUsersRender(data)
  }, [data]) 
  
  useEffect(() => {
    const target = document.querySelector('.rightsidebar_container');

  //Uptadate visibility of list of messages in mobile version
    if(isModalList){
      target?.setAttribute('class','rightsidebar_container visible')
    }else{
      target?.setAttribute('class','rightsidebar_container')
    }
  }, [isModalList])
  

  return (
    <div className='rightsidebar_container'>
      {isModalList?
       <div className="closeICO" onClick={handleModalLis}>
        <img src={closesvg} alt="close"/>
      </div>:null}
      <div className="rightsidebar_overflow">
          <ul>
              {usersRender?.map(user=>(
                  <UserCard 
                  key={user.account_id}
                  userName={user.personaname}
                  teamTag={user.team_tag}
                  />
              ))}
          </ul>
      </div>
    </div>
  )
}

export default RightSideBar