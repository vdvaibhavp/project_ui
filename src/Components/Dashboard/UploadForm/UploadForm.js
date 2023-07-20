import React from 'react'
import './UploadForm.css'
function UploadForm({handleFile1Change, handleFile2Change, handleSubmitForm}) {
  return (
    // <div class="form-container">
        <form onSubmit={handleSubmitForm}>
            <div className="form-group">
              <label htmlFor="file1">Upload First File : </label>              
              <input
                type="file"
                id="file1"
                className="form-control-file"
                onChange={handleFile1Change}
              />
            </div>           
            <div className="form-group">
              <label htmlFor="file2">Upload Second File :</label>              
              <input
                type="file"
                id="file2"
                className="form-control-file"
                onChange={handleFile2Change}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-md">Submit</button>
          </form>
          )
    {/* </div> */}
  
}

export default UploadForm