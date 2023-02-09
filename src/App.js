import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./Layout/Layout";
import Login from "./Pages/Login/Login"
import Signup from './Pages/SignUp/Signup';
import Detail from './Pages/details/Detail';
import Landing from './Pages/Landing/Landing';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/detail" element={<Detail />} />
      </Routes> */}
      <Home/>

    </>
  );
}

export default App;
