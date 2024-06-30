import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
// import About from './components/About';
import Alert from './components/Alert';
import React,{ useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode , setMode] = useState('light');
  const [btn,setBtn] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      setBtn('Enable light Mode');
      document.body.style.backgroundColor = '#2F4F4F';
      showAlert("Dark mode has been Enable","success");
      document.title = 'TextUtils - Dark Mode';
    }else{
      setMode('light')
      setBtn('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been Enable","success");
      document.title = 'TextUtils - Light Mode';

    }
  }

  return (
  <>
   {/* <Router> */}
   <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} btn={btn}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
        {/* <Routes>
          <Route exact path="/" element={<TextForm areaText = "Enter the Data in Text Field" mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes> */}
       <TextForm areaText = "Enter the Data in Text Field" mode={mode} showAlert={showAlert}/>

    </div>
    {/* </Router> */}
  </>
    );
}

export default App;
