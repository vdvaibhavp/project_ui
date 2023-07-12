import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../Navbar/Navbar';
import UploadForm from './UploadForm/UploadForm';

function Dashboard({ onLogout, isAuthenticated }) {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  const handleFile1Change = (e) => {
    // Handle changes in file1 input field
  };

  const handleFile2Change = (e) => {
    // Handle changes in file2 input field
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
                handleSubmit={handleSubmitForm}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="box border rounded p-3">
              <h1 className="response-field">Response Field</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="box border rounded p-3">
              <div className="empty-component">Empty Component 1</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box border rounded p-3">
              <div className="empty-component">Empty Component 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Dashboard;
