import React from 'react'
import './UploadForm.css'


function UploadForm({ handleFile1Change, handleFile2Change, handleSubmitForm, handleMail }) {


  return (
    <div class="container">
      <form class="Form" onSubmit={handleSubmitForm}>
      <div class="row">
        
        <div class="col-md-6 ">
          
            <label className='border-bottom border-2' htmlFor="file1">Cashbook File: </label>
            <input
              type="file"
              id="file1"
              className="form-control-file"
              onChange={handleFile1Change}
            />
            <label className='border-bottom border-2' htmlFor="file2">GST File:</label>
            <input
              type="file"
              id="file2"
              className="form-control-file"
              onChange={handleFile2Change}
            />
          
        </div>
        <div class="col-md-6">
          <label className="border-bottom border-2 mb-2" htmlFor="email">
            Email Address:
          </label>
          <input
            type="text"
            id="email"
            className="form-control border"
            onChange={handleMail}
          />
        </div>
        <div class="row">
          <div class="col text-center">
            <button type="submit" className="btn btn-primary btn-block fs-6">Submit</button>
          </div>
        </div>
        
      </div>
      </form>
    </div >
  )

}

export default UploadForm