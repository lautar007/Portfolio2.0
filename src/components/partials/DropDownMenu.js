import { useState } from "react";
import '../../styles/DropDownMenu.css';

export default function DropDownMenu () {

    const [open, setOpen] = useState(false); 

    const toggleMenu = (e) =>{
        e.preventDefault();
        setOpen(!open);
    }

    return (
      <div className="dropdown">
        <button onClick={toggleMenu} className="dropdown-btn">
          pdf.
        </button>

        {open && (
        <ul className="dropdown-content">
          <li><a href="/resume/engCV">English v.10.24 </a></li>
          <li><a href="/resume/espCV">Español v.10.24</a></li>
        </ul>
      )}
      </div>
    );
}