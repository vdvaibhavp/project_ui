import React, { useEffect, useState } from 'react';
import './RenderComponent.css';
import axios from 'axios';
import { saveAs } from 'file-saver';

function RenderComponent({requestId, callRender}) {

  const getStatus = async () =>  {
    const sessionToken = localStorage.getItem('sessionToken');
    const requestData = {
      sessionToken: sessionToken,
      requestId: requestId
    };

    await axios.get('/status', {params : requestData})
               .then(response => {
                    callRender(response.data);
                    
               })
               .catch(error => {
                    callRender();
               });
    
  };
  useEffect(() => {
    getStatus();
  }, []);

  return(
  <div className="loading-spinner">
  <div className="spinner"></div>
  <h1>Loading ... </h1>
  </div>
);
}

export default RenderComponent;
