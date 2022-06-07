import { useEffect } from "react"
import { linearProgressBarProps } from '../../interfaces/linearProgressBarProps'


const LinearProgressBar = ({progressBar, id}:linearProgressBarProps) => {


    useEffect(() => {
        const progressbarTrack:HTMLDivElement|null = document.querySelector(`#${id}`)
        if(progressbarTrack && progressBar)progressbarTrack.style.width=progressBar+'%'
    }, [progressBar])
    

  return (
    <div className="linear_progressbar_container">
        <div className='linear_progressbar_track' id={id}></div>
    </div>
  )
}

export default LinearProgressBar