import { useEffect, useState } from 'react'
import { usersCalls } from '../../interfaces/usersCalls';
import { fnSearch } from '../../helpers/fnSearch';

import icoMsg from "./../../img/icoMsg.svg"
import icoPhone from "./../../img/icoPhone.svg"
import icoDot from "./../../img/icoDot.svg"

const SchedulCard = ({data, isFiltering, setIsFiltering, filter}:any) => { 
  const [usersRender, setUserRender] = useState<usersCalls[]>([])

  useEffect(() => {
    if(data)setUserRender(data)
  }, [data])

  useEffect(() => {
    if(filter.length>0){
      setIsFiltering(true)
    }else setIsFiltering(false);

    if(isFiltering){
      fnSearch(data, setUserRender,filter )
    }

    if(!isFiltering){
      setUserRender(data)
    }
  }, [filter])
  

  return (
  <div className='agenda_container'>
      <h3>Conexiones de agenda para hoy</h3>
      <div className='agenda'>
       <table>
        <tbody>
           {usersRender?.map(user=>
            <tr
            key={user.id}
            >
              <td className={`td-${user.primary_attr}`}></td> 
              <td>{user.localized_name}</td>
              <td>LLamar <br/> <small>Descuento temportada</small> </td>
              <td><img src={icoDot} alt='icoDot'></img></td>
              <td><img src={icoPhone} alt='icoPhone'></img></td>
              <td><img src={icoMsg} alt='icoPhone'></img></td>            
            </tr>  
            )}  
          
        </tbody>
      </table>
    </div>
  </div>
)};

export default SchedulCard