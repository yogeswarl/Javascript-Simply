import React, { createContext,useState } from 'react';


export const FormDataContext = createContext()

export const FormDataProvider = (props) => {
	const [formData,setFormData] = useState({});
	return (
		<FormDataContext.Provider value={[formData,setFormData]}>
			{props.children}
		</FormDataContext.Provider>
	);
};