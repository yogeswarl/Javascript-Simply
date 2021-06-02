import moment from "moment"
import React,{useContext,useState} from 'react';
import{FormDataContext} from './contexts/TestContext';


const SharingHeader = () =>  {
  let [formData,setFormData] = useContext(FormDataContext)
  console.log('render dummy another');
  const today = new Date();
  const [newdate, setnewDate] = useState('')
  const [onUpdate, setonUpdate] = useState(false)
  const updateDate = (e) =>{
    setnewDate(e.target.value.toString())
    setFormData({
      ...formData,
      dateOfBirth: e.target.value,
    });
    setonUpdate(true)
  }

return (
  <React.Fragment>
    <h1>{onUpdate ? moment(formData.dateOfBirth).format('D-MM-YYYY') : moment(today).format('D-MM-YYYY') }</h1>
    <input type="date" onChange={updateDate}/>
  </React.Fragment>
  );
}
export default SharingHeader