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
    // await axios({
    //   url: 'http://localhost:3001/status', 
    //   method: 'GET',
    //   params : requestData,
    //   responseType: 'blob',
    // })
    //   .then(response => {
    //   const url = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    //   const link = document.createElement('a');
    //   link.href = url;
    //   link.setAttribute('download', 'product_output.xlsx'); 
    //   document.body.appendChild(link);
    //   link.click();
    //   callRender();
    //   })
    //   .catch(error => {
    //     console.error('Error occurred while downloading the file:', error);
    //   });
    await axios.get('http://localhost:3001/status', {params : requestData})
               .then(response => {
                    callRender(response.data);
                    
               })
               .catch(error => {
                    console.log(error);
                    callRender()
               });
    
  }
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
