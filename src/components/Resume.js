import React, { useState } from "react";
import '../styles/Resume.css';
import {getWorksES, getWorksEN} from "../utils/jobs";
import DropDownMenu from "./partials/DropDownMenu";

export default function Resume(){
    const lenguage = localStorage.getItem("lenguage") || "ESP";

    //States:
    const [showJob, setShowJob] = useState(-1)
    const works = lenguage === 'ESP'? getWorksES() : getWorksEN();
    
  
    return (
      <div className="proyect-body">
        <div className="header">
        {lenguage === 'ESP'?
          <h1 className="proyect-title">Hoja De vidA.</h1>
          :
          <h1 className="proyect-title">ResumE.</h1>
        }
        <DropDownMenu/>
        </div>
        <hr className="top-separator" />
        <div className="works-up">
          { works? works.map((job, index) => {

            return(
            <div
              className={`workCard${
                showJob === index ? job.class + "hovered" : ""
              }`}
              onMouseEnter={() => setShowJob(index)}
              onMouseLeave={() => setShowJob(-1)}
            >
              <img
                className={"workLogo" + job.class}
                alt="companyLogo"
                src={job.logo}
              />
              <div className="workCardContent">
                <h2 className="workTitle">{job.titulo}:</h2>
                <p className="workBody">{job.body}</p>
              </div>
            </div>
            )
          })
          :null
        }
        </div>
        <div className="time-line">
          {works? works.map((job, index) => {
            return(
            <h2
              className={`${job.class}${showJob === index ? "hovered" : ""}`}
              onMouseEnter={() => setShowJob(index)}
              onMouseLeave={() => setShowJob(-1)}
            >
              {job.date}
            </h2>
            )
          })
          :null
        }
        </div>
      </div>
    );
}