import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from './pages/home/Home';

import Register from './pages/register/Register';
import Signin from './pages/signin/Signin';
import Watch from './pages/watch/Watch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Signin/>}/>
        <Route path="/watch" element={<Watch/>}/>
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
    </Router>
  
  )
}

export default App;
