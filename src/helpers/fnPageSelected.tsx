import { MouseEventHandler } from "react";

//Marks the active section
export const fnPageSelected:MouseEventHandler<SVGSVGElement>= (e) =>{
    const container = document.querySelector('.leftsidebar_container')?.getElementsByTagName('path')
    if(container){
      for (let i = 0; i < container.length; i++) {
        const element = container[i];
        if (element.id === e.currentTarget.dataset['name']){
          element.setAttribute('stroke', '#fd531e')
          element.parentElement?.parentElement?.setAttribute('class','x svg_container')          
        }else {
            element.setAttribute('stroke', '#ffffff');
            element.parentElement?.parentElement?.setAttribute('class','svg_container')
        }
      } 
    }
   
}

