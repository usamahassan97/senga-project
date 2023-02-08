import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./Layout/Layout";
import Landing from './Pages/Landing/Landing';
import Login from "./Pages/Login/Login"
import Signup from './Pages/SignUp/Signup';
import {  Routes, Route } from 'react-router-dom';
import Detail from './Pages/details/Detail';

function App() {
  return (
    <>
       <Routes>
    <Route path="/" element={<Landing/>}>
    
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="layout" element={<Layout/>}/>
      
      <Route path="detail" element={<Detail/>}/>
      
      
     </Route> 
    </Routes>
      
    </>
  );
}

export default App;
