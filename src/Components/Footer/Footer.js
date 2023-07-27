import React from "react";
import './Footer.css';


function Footer() {
    return (

        <div className="footer fixed-bottom">

            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <a className='text-white' href='https://valuedx.com/' target="_blank"> ValueDx Technology Pvt Ltd
                            </a>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <label> ☎ 123456789 </label>
                    </div>

                    <div class="col-md-3">
                        <label> © 2023 :ValueDx, All reserved </label>
                    </div>
                    
                    <div id="languages" class="col-md-3">
                        <p><a className='text-white' href='#'>English </a> <label>|</label> <a className='text-white' href='#'> Marathi </a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;



