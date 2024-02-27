import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const toggleRedMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'red';
      showAlert("Dark mode has been enabled", "success");
      document.title = "codeWithHarry - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "codeWithHarry - Light Mode";
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(()=> {
      setAlert(null);
    }, 1500);
  }

  return (
    // <Router>
    <>
    <Navbar title={`Code of Vaishu`} mode={mode} toggleMode={toggleMode} toggleRedMode={toggleRedMode}/>
    <div className='container my-3'>
      <Alert alert={alert}/>
      {/* <Switch> */}
        {/* <Routes> */}
        <TextForm showAlert={showAlert} heading="Example Form" mode={mode} />
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Example Form" mode={mode} />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}

      {/* </Switch> */}
      {/* <About/> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
