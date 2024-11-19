import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CVEnglish from "../../utils/CVs/CVEnglish.pdf";
import CVEspañol from "../../utils/CVs/CVEspañol.pdf";

const CVComponent = () => {

    const {type} = useParams();
    console.log(type);

    return (
        <div>
            {type === "espCV" ? 
            
            <iframe 
              src={CVEspañol}
              width="100%" 
              height="700px" 
              title="PDF Viewer"
            />
            :
            <iframe 
              src={CVEnglish}
              width="100%" 
              height="700px" 
              title="PDF Viewer"
            />
        }
      </div>
    )
}

export default CVComponent;