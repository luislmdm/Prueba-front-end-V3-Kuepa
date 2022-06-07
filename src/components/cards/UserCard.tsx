import React from 'react'
import Whatsapp from '../svg/Whatsapp'

const UserCard = ({userName, teamTag}:any) => {
  return (
    <div className='card_user_container'>
        <div className='card_user_socialNetwork'>
          <Whatsapp/>
          <small>Whatsapp</small>
        </div>
        <div className='card_user_name'>
            <p>{userName}</p>
            <p>{teamTag}</p>
            <small>Time ago</small>
        </div>
        
    </div>
  )
}

export default UserCard