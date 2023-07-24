import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js';
import Navbar from '../Navbar/Navbar';
import UploadForm from './UploadForm/UploadForm';
import RenderComponent from './RenderComponent';
import axios from 'axios';
import Footer from '../Footer/Footer';
import './UploadForm/Dashboard.css';



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
    // <div className="dashboard-container bg-grey p-4">
    //   <Navbar showLogoutButton={isAuthenticated} onLogout={onLogout} />

    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-6">
    //         <div className="box border rounded p-3">
    //           <UploadForm
    //             handleFile1Change={handleFile1Change}
    //             handleFile2Change={handleFile2Change}
    //             handleSubmitForm={handleSubmitForm}
    //           />
    //         </div>
    //       </div>

    //       <div className="col-md-6">
    //         <div className="box border rounded p-3">
    //           <h1 className="response-field">RESPONSE TO CHECK</h1>

    //           {load ? (
    //             <RenderComponent requestId={requestId} callRender={callRender} />
    //               ) : (
    //             <div><h5>{msg}</h5></div>
    //             )}
    //         </div>
    //       </div>
    //     </div>
    //     </div>

    //     <div className="container">
    //     <div className="row">
    //       <div className="col-md-6">
    //         <div className="box border rounded p-3">
    //           <div className="empty-component">Recharge Here</div>
    //         </div>
    //       </div>
    //       <div className="col-md-6">
    //         <div className="box border rounded p-3">
    //           <div className="empty-component">Row Count and Available credits</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Footer/>
    // </div>

    // container -1
    <>
      <div className="dashboard-container">
        <Navbar showLogoutButton={isAuthenticated} onLogout={onLogout} />
        <div class="container mt-3 pt-5">
          <div class="row" >
            <div class="col-md-6">
              {/* <div class="card-deck"> */}
              <div class="card bg-card bg-light text-black h-100">
                <div class="card-body shadow border rounded border-2" >
                  <div class="form-group">
                    <div class="border-bottom border-info fs-4 fw-semibold mb-3 text-center">
                      Upload The Files
                    </div>
                    <UploadForm
                      handleFile1Change={handleFile1Change}
                      handleFile2Change={handleFile2Change}
                      handleSubmitForm={handleSubmitForm}
                    />
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>


            <div class="col-md-6">
              <div class="card bg-card bg-light text-black h-100">
                <div class="card-body border rounded border-2 shadow text-center">
                  <h4 className="response-field text-center border-bottom border-info">Check Your Response</h4>
                  <div class="mt-5 p-4"></div>
                  {load ? (
                    <RenderComponent requestId={requestId} callRender={callRender} />
                  ) : (
                    <div><h5>{msg}</h5></div>
                  )}
                  {/* <div class="mt-3 p-3"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* container -2 */}

        <div class="container pt-3">
          <div class="row">
            <div class="col-md-6">
              <div class="box border rounded">
                <div class="card-deck">
                  <div class="card bg-card bg-light text-black h-100">
                    <div class="card-body card-body shadow border rounded border-2">
                      <div class="form-group">
                        <div className="empty-component d-grid gap-2 col-6 mx-auto">
                          <h4 class="text fs-4 fw-semibold text-center">Click to Pay</h4>
                          <a href="" target='_blank' class="btn btn-primary fs-6 fst-italic border">
                            Pay
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6 col-sm-4">
                  <div class="card-deck">
                    <div class="card bg-card bg-light text-black h-100">
                      <div class="card-body text-center card-body shadow border rounded border-2" style={{ fontSize: 25 }}>
                        <p class="card-text  fs-4 fw-semibold">Total Rows Count</p>
                        <div class="border border-2">*Number</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-4">
                  <div class="card-deck">
                    <div class="card bg-card bg-light text-black h-100">
                      <div class="card-body text-center card-body shadow border rounded border-2" style={{ fontSize: 25 }}>
                        <p class="card-text  fs-4 fw-semibold">Total Credit Left</p>
                        <div class="border border-2" >*Number</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <Footer />
        </div>

      </div>
    </>
  );
}
export default Dashboard;
