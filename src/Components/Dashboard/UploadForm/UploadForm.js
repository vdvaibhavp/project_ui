import React from 'react'
import './UploadForm.css'
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';


function UploadForm({ handleFile1Change, handleFile2Change, handleSubmitForm, handleMail }) {
  const {t}=useTranslation();

  return (
    <div class="container">
      <form class="Form" onSubmit={handleSubmitForm}>
      <div class="row">
        
        <div class="col-md-6 ">
          
            <label className='border-bottom border-2' htmlFor="file1">{t('Cashbook File')}: </label>

            <input
              type="file"
              id="file1"
              className="form-control-file"
              onChange={handleFile1Change}
            />
            <label className='border-bottom border-2' htmlFor="file2">{t('GST File')}:</label>
            <input
              type="file"
              id="file2"
              className="form-control-file"
              onChange={handleFile2Change}
            />
          
        </div>
        <div class="col-md-6">
          <label className="border-bottom border-2 mb-2" htmlFor="email">
            {t('Email Address')}:
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
            <button type="submit" className="btn btn-primary btn-block fs-6">{t('Submit')}</button>
          </div>
        </div>
        
      </div>
      </form>
    </div >
  )

}

export default UploadForm