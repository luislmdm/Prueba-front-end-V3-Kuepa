import { useEffect, useState } from "react";

const CircularProgressBar = ({progressValue, progressEndValue}:any) => {

    useEffect(() => {
        const progressBar:HTMLDivElement|null = document.querySelector(".circular-progress");
        if(progressBar!==null)progressBar.style.background = `conic-gradient(
            transparent ${progressValue * 3.6}deg,
            #e1e1e1e1 ${progressValue * 3.6}deg
        )`;
    }, [progressValue, progressEndValue])
    

  return (
    <div className="container_circualr_progressbar">
            <div className="circular-progress">
                <div className="value-container">{progressValue}%</div>
            </div>
    </div>
  )
}

export default CircularProgressBar