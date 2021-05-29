import React, { Fragment, useState} from 'react';
import axios from 'axios';
import Message from './Message';
import Progress from './Progress';
const FileUpload = () => {
  const [file , setFile] = useState('')
  const [fileName , setFileName] = useState('Choose File')
  const [uploadedFile , setuploadedFile] = useState({})
  const [message , setMessage] = useState('')
  const [uploadPercentage , setUploadPercentage] = useState(0)
  const onChange = e =>{
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }
  const onSubmit = async e =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('file',file)
    try{
      const res = await axios.post('/upload',formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            ));
        }
      }) 
      setTimeout(() => setUploadPercentage(0),10000);
      const {fileName,filePath} =res.data;
      setuploadedFile({fileName,filePath})
      setMessage('uploaded')
    }
    catch(err){
      if(err.response.status === 500){
        setMessage('There was a problem with the server');
      }else{
        setMessage(err.response.data.msg)
      }
    }
  }
  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit=  { onSubmit }>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">{fileName}</label>
          <input className="form-control" type="file" id="formFileMultiple" multiple onChange= {onChange} />
        </div>

        <Progress percentage={uploadPercentage} />

        <input type="submit" value="upload" className="btn btn-primary d-block mt-4" />
      </form>
      {uploadedFile ? <div className="row mt-5">
    <div className="col-md-6 m-auto">
      <h3 className="text-center">{uploadedFile.fileName}</h3>
      <img style={{ maxWidth:'100%'}} src={uploadedFile.filePath} alt="" />
    </div>
      </div>: null}
    </Fragment>
  )
}
export default FileUpload