import React, { MouseEventHandler, useState } from 'react'
import HomeIco from '../svg/HomeIco'
import MenuICO from '../svg/MenuICO'
import TasksICO from '../svg/TasksICO'
import NotasICO from '../svg/NotasICO'
import MenuModal from '../../features/MenuModal'
import menuMobile from './../../img/menuMobile.svg'

const LeftSideBar = () => {
  const [isModalMenu, setIsModalMenu] = useState<boolean>(false)

  // Activates menu for mobile version
  const handleModalMenu:MouseEventHandler<HTMLDivElement> = (e) => {
    setIsModalMenu(!isModalMenu)
  }

  return (
    <>
      <div className='leftsidebar_container'>
        <div className='naviagte_ICOS'> 
        <div className='logo'>
          <img src='https://www.kuepa.com/Logo-Kuepa-01-9c3697785e53e9ee964d96fe0c59b8b8.png'/>
        </div>
          <div className='svg_container'>
            <HomeIco/>
          </div>
          <div className='svg_container'>
            <TasksICO/>
          </div>
          <div className='svg_container'>
            <MenuICO/>
          </div>
        </div>
        <div className='userICO_Container'>
        <div className='svg_container'>
          <NotasICO/>
        </div>        
          <div className='userImg'></div>
          <div className='menu_mobile' onClick={handleModalMenu}>
            <img src={menuMobile}/>
          </div>          
        </div>
      </div>
      {isModalMenu && <MenuModal/>}
    </>
  )
}

export default LeftSideBar