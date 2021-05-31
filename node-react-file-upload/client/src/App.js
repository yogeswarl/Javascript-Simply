import React from 'react';
import FileUpload from './components/FileUpload';
import DatePicker from './components/DatePicker'

const App = () => (
<div className='container mt-4'>
    <h4 className="display-4 text-center mb-4">React File Upload</h4>
    <FileUpload />
    <DatePicker />
</div>
);

export default App;
