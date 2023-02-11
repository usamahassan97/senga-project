import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./Layout/Layout";
import Login from "./Pages/Login/Login"
import Signup from './Pages/SignUp/Signup';
import Detail from './Pages/details/Detail';
import Landing from './Pages/Landing/Landing';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CashDeposite from './Pages/cash/CashDeposite';
import CashInvestment from './Pages/cash/CashInvestment';
import GInvestment from './Pages/Investment/GInvestment';
import Pot from './Pages/Investment/Pot';
import Allocation from './Pages/Investment/Allocation';
import Risk from './Pages/Investment/Risk';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/detail" element={<Detail />}/>
        <Route path="/deposit" element={<CashDeposite/> } />
        <Route path="/investment" element={<CashInvestment/> } />
        <Route path="/Ginvestment" element={<GInvestment/> } />
        <Route path="/pot" element={<Pot/> } />
        <Route path="/allocate" element={<Allocation/> } />
      </Routes> */}
      {/* <Home/> */}
      {/* <CashDeposite/> */}
      {/* <CashInvestment/> */}
      {/* <GInvestment/> */}
      {/* <Pot/> */}
      <Risk/>
      

    </>
  );
}

export default App;
