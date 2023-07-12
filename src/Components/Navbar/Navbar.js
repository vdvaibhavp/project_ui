import React from "react";
import logoImg from './valuedx_logo.png';

function Navbar({onLogout, showLogoutButton}) {
    return(

 <div style={{display:"flex", alignItems: 'center',justifyContent:'space-between',backgroundColor:'black', height:50,padding:5}}>
    <div>
    <img src={logoImg} width="100px" height="auto"/>
    </div>
    {showLogoutButton && (
    <div >
    <button className="btn btn-primary my-2 my-lg-0" type="button" onClick={onLogout}>Log Out</button>
    </div>
    )}
</div> 

    );
}

export default Navbar;