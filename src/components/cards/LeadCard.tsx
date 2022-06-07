import React from 'react'
import MsgICO from '../svg/MsgICO'
import PhoneICO from '../svg/PhoneICO'



const LeadCard = ({leadsProps}:any) => {

  return (
    <div className='leads_card'>
      <div className='total_leads' style={{background:leadsProps.color}}>
        <div className='circle_leads'>
          <p style={{backgroundImage:leadsProps.color}}>{leadsProps.calls + leadsProps.msgs}</p>
        </div>
      </div>
      <div className='description_leads'>
        <legend>Leads de<br/>{leadsProps.name}</legend>
        <div className='leads'>
          <div><PhoneICO/></div>
          <div>{leadsProps.calls}</div>
        </div>
        <div className='leads'>
          <div><MsgICO/></div>
          <div>{leadsProps.msgs}</div>
        </div>
      </div>
    </div>
  )
}

export default LeadCard