import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';

function App() {
  const [darkMode, setdarkMode] = useState("light");
  const [enableMode, setenableMode] = useState('Enable');
  const [alert, setalert] = useState(null)
  const showAlert = (message,type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  const toggleMode =()=>{
    if(darkMode==='dark'){
      setenableMode('Enable')
      setdarkMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title = 'TextUtils - LightMode'
    }
    else {
      setenableMode('Disable')
      setdarkMode('dark');
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode has been enabled","success")
      document.title = 'TextUtils - DarkMode'
    }
  }
  return (
    <>
      <Router>
      <Navbar title="Texttils" mode={darkMode} toggleMode={toggleMode} enableMode={enableMode}/>
      <div className="container my-3">
        <Routes>
        <Route path='/' element={<TextForm heading="Enter text to analyse" mode={darkMode}/>}/>
        <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
     </Router>
        <Alert alert={alert} showAlert={showAlert} />
        
        {/* <About/> */}
    </>
  );
}

export default App;
