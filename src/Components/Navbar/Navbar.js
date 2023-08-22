import React, { useEffect, useState } from "react";
import logoImg from './valuedx_logo.png';
import "bootstrap-icons/font/bootstrap-icons.css";
import react from 'react';
import Cookies from "js-cookie";
import languageoption from "../language_dropdown";
import {useTranslation} from 'react-i18next';


function Navbar({onLogout, showLogoutButton}) {
    const [fname, setFname] = useState(null);
    const [lname, setLname] = useState(null);
    const {t}=useTranslation();
    useEffect(() => {
        const fname_user=Cookies.get('fname')
        const lname_user=Cookies.get('lname')
        if (fname_user || lname_user) {
          setFname(fname_user);
          setLname(lname_user);
        }
      }, []);

    return(


    <div class="fixed-top" style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'black', height: 50, padding: 5 }}>
        <div>
            <img src={logoImg} width="100vh" height="30vh" alt="Logo" />

        </div>
        {/* <div>
            <languageoption/>
        </div> */}
        {showLogoutButton && (
            <div>
                <span style={{ color: 'white', marginRight: '5px' }}>{fname} {lname}</span>
                <button className="btn btn-primary my-2 my-lg-0" type="button" onClick={onLogout}>{t('Log Out')}</button>
            </div>
        )}
    </div>
    );
}

export default Navbar;