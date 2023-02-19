import React, { useState }  from 'react'
import { Row, Col, Button } from "reactstrap";

import { Progress } from '@chakra-ui/react'
import FirstPage from './NewInvest/firstPage';
import SecondPage from './NewInvest/secondPage';
import ThirdPage from './NewInvest/thirdPage';
import FourthPage from './NewInvest/fourthPage';
import { Link } from 'react-router-dom';
const Buttons = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [progress, setProgress] = useState(25);
    let content;
    if (currentPage === 1) {
      content = <FirstPage/>;
    } else if (currentPage === 2) {
      content = <SecondPage/>;
    } else if (currentPage === 3) {
      content = <ThirdPage/>;
    } else {
      content = <FourthPage/>;
    }
    const totalPages = 4;
    const nextPage=() => {
        if (currentPage < 4) {
          setCurrentPage(currentPage + 1);
        } else {
          setCurrentPage(1);
        }

        setProgress(progress + 25);
      }
      const backPage=() => {
        if (currentPage >= 3) {
          setCurrentPage(currentPage - 1);
        } 

        setProgress(progress - 25);
      }
  return (
    <div>
        <div>
        <Progress style={{color:"#5F236E" }} size='sm' value={progress} />
        </div>
        {content}
      
       <div className="btns text-end mt-5 pt-5 mb-5">
       {currentPage === 1 ? (
        <div>
         <Button onClick={nextPage} className="btn3 ps-5 pe-5 p-3">Continue </Button></div>
         ) : currentPage === 2 ? (
          <div>
            
            <Button onClick={backPage} className="btn1 ps-5 pe-5 p-3 me-2" >Back </Button>
          <Button onClick={nextPage} className="btn3 ps-5 pe-5 p-3 ms-2">Continue </Button>
          </div>
          )  : currentPage === 3 ? (
              <div >
                <Button onClick={backPage} className="btn1 ps-5 pe-5 p-3 me-2">Back </Button>
              <Button onClick={nextPage} className="btn3 ps-5 pe-5 p-3 ms-2">Continue </Button>
              </div>
              ) : (
                <div>
              <Button  className="btn1 ps-5 pe-5 p-3 me-2">View Details </Button>    
          <Link to="/startInvestment"><Button  className="btn3 ps-5 pe-5 p-3 ms-2">Start Investing </Button></Link></div> )}
       </div>
     
    </div>

  )
              }

export default Buttons
