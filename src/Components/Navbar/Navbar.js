import React, { useEffect, useState } from "react";
import logoImg from './valuedx_logo.png';

function Navbar({onLogout, showLogoutButton}) {
    const [fname, setFname] = useState(null);
    const [lname, setLname] = useState(null);
   
    useEffect(() => {
        const fname_user = localStorage.getItem('fname');
        const lname_user = localStorage.getItem('lname');
        if (fname_user || lname_user) {
          setFname(fname_user);
          setLname(lname_user);
        }
      }, []);

    return(

    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'black', height: 50, padding: 5 }}>
        <div>
            <img src={logoImg} width="100px" height="auto" alt="Logo" />
        </div>
        {showLogoutButton && (
            <div>
                <span style={{ color: 'white', marginRight: '10px' }}>{fname} {lname}</span>
                <button className="btn btn-primary my-2 my-lg-0" type="button" onClick={onLogout}>Log Out</button>
            </div>
        )}
    </div>
    );
}

export default Navbar;