import React from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import './App.css';
import {useState} from 'react';
import Diction from './components/Diction';

const App=()=> {
const [mode, setMode]=useState('light')
const toggleMode = () => {
  if (mode==='light')
  {setMode('dark');
   document.body.style.backgroundImage="linear-gradient(to right, #959595 0%, #0D0D0D 46%, #010101 50%, #0A0A0A 53%, #4E4E4E 76%, #383838 87%, #1B1B1B 100%)";
  showAlert("success","Dark mode enabled")}
  else{
    setMode('light');
    document.body.style.backgroundImage="radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
    showAlert("success","Dark mode disabled")
  }
}

const [alert,setAlert]= useState("null")
 const showAlert= (type,message) =>{ setAlert({
    msg : message,
     type : type,
  } )
    setTimeout(() => {
    setAlert('null')
  }, 1500);
}
  return (
    <div>
    <Navbar mode={mode}  toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <Textform mode={mode}  toggleMode={toggleMode} showAlert={showAlert}/>
    <Diction mode={mode}  toggleMode={toggleMode}/>
    </div>
  )
}

export default App;
