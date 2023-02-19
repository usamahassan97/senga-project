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
import Content from './Layout/Content';
import Chart from './components/chart/Chart';
import InvestmentPage from './Pages/Investment/investmentPage';
import Wallet from './Pages/Wallet/wallet';
import Notification from './Pages/Notification/Notification';
import Messages from './Pages/Messages/Messages';
import Newmessage from './Pages/Messages/Newmessage';
import Invest from './Pages/Invest/Invest';
import StartInvestment from './Pages/Invest/StartInvestment';
import Profile from './Pages/Profile/Profile';
import ProfileSetting from './Pages/Profile/ProfileSetting';
import NotificationSetting from './Pages/Profile/NotificationSetting';
import PasswordSetting from './Pages/Profile/PasswordSetting';
import BankSetting from './Pages/Profile/BankSetting';

function App() {
  return (
    <>
       {/* <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/detail" element={<Layout><Detail /></Layout>}/>
        <Route path="/deposit" element={<CashDeposite/> } />
        <Route path="/investment" element={<CashInvestment/> } />
        <Route path="/Ginvestment" element={<GInvestment/> } />
        <Route path="/pot" element={<Pot/> } />
        <Route path="/allocate" element={<Allocation/> } 
        
        
        <Route path="/wallet" element={<Wallet/> }/>
        <Route path="/notification" element={<Notification/> }/>
      </Routes>  */}
      
        
      {/* <CashDeposite/> */}
      {/* <CashInvestment/> */}
      {/* <Allocation/> */}
      {/* <Pot/> */}
      {/* <Risk/> */}
       <Routes>
        <Route 
          path='/' 
          element={
          <Content>
            <Home/>
           
           </Content>
          } />

          <Route 
            path='/wallet'
            element={
              <Content>
                <Wallet />
              </Content>
            }
          />
          <Route 
            path='/startInvestment'
            element={
              <Content>
                <StartInvestment />
              </Content>
            }/>
            <Route 
            path='/message'
            element={
              <Content>
                <Messages/> 
              </Content>
            }/>
            <Route 
            path='/notification'
            element={
              <Content>
               <Notification/> 
              </Content>
            }/>
             <Route 
            path='/profileSetting'
            element={
              <Content>
               <ProfileSetting/>
              </Content>
            }/>
             <Route 
            path='/notificationSetting'
            element={
              <Content>
               <NotificationSetting/>
              </Content>
            }/>
             <Route 
            path='/passwordSetting'
            element={
              <Content>
               <PasswordSetting/>
              </Content>
            }/>
            <Route 
            path='/bankSetting'
            element={
              <Content>
               <BankSetting/>
              </Content>
            }/>
             <Route 
            path='/home-Investment'
            element={
              <Content>
               <Invest/> 
              </Content>
            }/>
             <Route 
            path='/profile'
            element={
              <Content>
               <Profile/> 
              </Content>
            }/>
      </Routes> 

    </>
  );
}

export default App;
