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
   document.body.style.backgroundColor="darkslategray";
  showAlert("success","Dark mode enabled")}
  else{
    setMode('light');
    document.body.style.backgroundColor="#61dafb";
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
