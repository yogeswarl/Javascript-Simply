import React,{useContext, useState, useMemo} from 'react';
import{FormDataContext} from './contexts/TestContext';


const DummyComponent = () =>  {
  const [formData,setFormData] = useContext(FormDataContext);
  const [name, setName] = useState('')
  const [onUpdate, setonUpdate] = useState(false)
  const updateName = (e) =>{
      setName(e.target.value);  
  } 
  const updateContext = (e) =>{
    e.preventDefault();
    setFormData({
      ...formData,
      userName:name
    });
    setonUpdate(true)
  }
  useMemo(() => formData, [formData])
return (
  <React.Fragment>
    <form onSubmit = {updateContext}>
      <input type='text' value={name}  onChange = {updateName}/>
      <button>submit</button>
    </form>
    <h1>{onUpdate ? formData.userName : null }</h1>
  </React.Fragment>
  );
}
export default DummyComponent