import BasicForm from './components/BasicForm';
import SimpleInput from './components/SimpleInput';

import './FormApp.css';

function FormApp() {
  return (
    <div className="app">
      <SimpleInput />
      <BasicForm />
    </div>
  );
}

export default FormApp;