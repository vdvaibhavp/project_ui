import React from 'react'
import './UploadForm.css'
function UploadForm({handleFile1Change, handleFile2Change, handleSubmitForm}) {
  return (
    <div class="form-container">
        <form onSubmit={handleSubmitForm}>
            <div className="form-group">
              <label htmlFor="file1">File1 To Upload : </label>
              <br/>
              <input
                type="file"
                id="file1"
                className="form-control-file"
                onChange={handleFile1Change}
              />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="file2">File2 To Upload :</label>
              <br/>
              <input
                type="file"
                id="file2"
                className="form-control-file"
                onChange={handleFile2Change}
              />
            </div>
            <br/>
            <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
    </div>
  )
}

export default UploadForm