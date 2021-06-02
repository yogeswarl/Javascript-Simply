import React from "react";
import { FormDataProvider} from "./contexts/TestContext";
import DummyComponent from './DummyComponent';
import SharingHeader from './SharingHeader';
function App() {
  console.log('do you render again?')
	return (
    <div className='App'>
      <FormDataProvider>
          <DummyComponent />
          <SharingHeader />
      </FormDataProvider>
    </div>
	);
}

export default App;
