import React from "react";
import TemplateName from "./TemplateName";
import Side from "./Side";
function Reactflows(){
    return(

        <>
         <div className='container'>
            <div className='row'>
                <div className='col-md-2'>
                    <Side />
                </div>
                <div className='col-md-10 '>
                    <TemplateName />
                </div>
            </div>
        </div>
    
     
        </>   
    )
}
export default Reactflows;