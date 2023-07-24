import React from 'react'
import './UploadForm.css'
function UploadForm({handleFile1Change, handleFile2Change, handleSubmitForm}) {
  return (
    <div class="container text-center">
        <form onSubmit={handleSubmitForm}>
            <div className="form-group fw-medium">
              <label className='border-bottom border-info border-2 mb-2' htmlFor="file1">Cashbook File : </label>              
              <input
                type="file"
                id="file1"
                className="form-control-file"
                onChange={handleFile1Change}
              />
            </div>           
            <div className="form-group fw-medium">
              <label className='border-bottom border-info border-2 mb-2' htmlFor="file2">GST File :</label>              
              <input
                type="file"
                id="file2"
                className="form-control-file"
                onChange={handleFile2Change}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
          )
   
  
}

export default UploadForm