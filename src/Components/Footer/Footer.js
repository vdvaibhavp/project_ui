import React from "react";
import './Footer.css';
import Languageoption from "../language_dropdown";
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

function Footer() {
   const handleClick=(e)=>{
    i18next.changeLanguage(e.target.value)
   }
    return (

        <div className="footer fixed-bottom">

            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <a className='text-white' href='https://valuedx.com/' target="_blank"> ValueDx Technologies Pvt Ltd
                            </a>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <label> ☎ 8857861943 </label>
                    </div>

                    <div class="col-md-3">
                        <label> © 2023 :ValueDx, All reserved </label>
                    </div>
                    
                    <div id="languages" class="col-md-3">
                        {/* <p><a className='text-white' href='#'>English </a> <label>|</label> <a className='text-white' href='#'> Marathi </a></p>
                        <button>English</button>&nbsp;<button>Marathi</button> */}
                     <Languageoption onChange={(e)=>handleClick(e)}/>
                    </div>
                
                                  
                </div>
            </div>
        </div>
    );
}

export default Footer;



