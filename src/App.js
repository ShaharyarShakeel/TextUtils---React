import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const removeBodyClass = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
  };
  const toggleMode = (cls) => {
    removeBodyClass();
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutTextUtils="AboutTextUtils" mode={mode} toggleMode={toggleMode} removeBodyClass={removeBodyClass} showAlert={showAlert} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
          <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
            {/* <Route exact path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
