import icowhatsapp from './../../img/icowhatsapp.png'

const UserCard = ({userName, teamTag}:any) => {
  return (
    <div className='card_user_container'>
        <div className='card_user_socialNetwork'>
          <div><img src={icowhatsapp}/></div>
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