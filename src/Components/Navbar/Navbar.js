import React from "react";
import logoImg from './valuedx_logo.png';
import "bootstrap-icons/font/bootstrap-icons.css";


function Navbar({onLogout, showLogoutButton}) {
    return(

 <div class="fixed-top" style={{display:"flex", alignItems: 'center',justifyContent:'space-between',backgroundColor:'black', height:50,padding:5}}>
    <div>
    <img src={logoImg} width="70%" height="50%"/>
    </div>
    {showLogoutButton && (
    <div >
    <i class="bi bi-box-arrow-left"></i><button className="btn btn-primary my-2 my-lg-0" type="button" onClick={onLogout}>Log Out</button>
    </div>
    )}
</div> 

    );
}

export default Navbar;