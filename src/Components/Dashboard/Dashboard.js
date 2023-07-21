import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../Navbar/Navbar';
import UploadForm from './UploadForm/UploadForm';
import RenderComponent from './RenderComponent';
import axios from 'axios';
import '../Footer/Footer';
import Footer from '../Footer/Footer';

function Dashboard({ onLogout, isAuthenticated }) {
  const [msg, setMsg] = useState("Click On Submit To get Response");
  const [load, setLoad] = useState(false);
  const [requestId, setRequestId] = useState(null);

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const validateFileExtension = (file, allowedExtensions) => {
    const fileName = file.name;
    const fileExtension = fileName.split('.').pop();
    return allowedExtensions.includes(fileExtension);
  };

  // Handling file1 extension and file name
  const handleFile1Change = (event) => {
    setFile1(event.target.files[0]);
  };


  // Handling File2 extension and file name
  const handleFile2Change = (event) => {
    setFile2(event.target.files[0]);
  };

  const callRender = () => {
    setLoad(false);
    setMsg("Completed Successfully! Please check your mail.");
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const allowedExtensions = ['xlsx', 'xls'];

    if (!file1 || !file2) {
      alert('Files Not selected!! Please select the files.')
      return;
    };

    if (!validateFileExtension(file1, allowedExtensions)) {
      alert('File1 has an invalid extension!');
      return;
    };

    if (!validateFileExtension(file2, allowedExtensions)) {
      alert('File2 has an invalid extension!');
      return;
    };

    const formData = new FormData();
    formData.append('files', file1);
    formData.append('files', file2);
    const sessionToken = localStorage.getItem('sessionToken');
    formData.append('sessionToken', sessionToken);

    //call to upload api - express
    const response = await axios.post('http://localhost:3001/upload', formData)
      .then(response => {
        setRequestId(response.data);
        setLoad(true);
      })
      .catch(error => {
        console.error(error);
        alert("Upload unsuccessfull - do it once again");
      });

  };

  return (
    <div className="dashboard-container bg-grey p-4">
      <Navbar showLogoutButton={isAuthenticated} onLogout={onLogout} />

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="box border rounded p-3">
              <UploadForm
                handleFile1Change={handleFile1Change}
                handleFile2Change={handleFile2Change}
                handleSubmitForm={handleSubmitForm}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="box border rounded p-3">
              <h1 className="response-field">RESPONSE TO CHECK</h1>

              {load ? (
                <RenderComponent requestId={requestId} callRender={callRender} />
              ) : (
                <div><h5>{msg}</h5></div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="box border rounded p-3">
              <div className="empty-component">Recharge Here</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box border rounded p-3">
              <div className="empty-component">Row Count and Available credits</div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>

  );
}

export default Dashboard;
