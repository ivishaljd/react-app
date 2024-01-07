import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React ,{ useState } from 'react'
import Alert from './components/Alert';
//import About from './components/About';
//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const[mode,setMode]= useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  
  const togglemode =()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ='#0f205a';
      showAlert("Dark mode has enabled","sucess");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has enabled","sucess");
    }
  }
  return (
   <>
<Navbar title="Textutils"  mode={mode} togglemode={togglemode}/>
<Alert Alert={alert} />
<div className="container" >
{/*<Routes>
           {/*<Route exact path="/about" element={<About/>} />
          </Routes>*/}
         {/*<Routes>
            <Route
              exact path="/"
              element={
               
                />
              }
            />
          </Routes>*/}
           <Textform
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}/>
        </div>
     



   </>
  ) 
}

export default App;
