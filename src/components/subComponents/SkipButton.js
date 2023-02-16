import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import arrow from "../../Assets/Icons/angle.png";
import "../custom-style.css"
const SkipButton = (props) => {
  return (
    <div className='text-center'>
            <Button className='skip_btns '><Row><Col className='text-end ' style={{fontSize:"20px"}}>
            {props.value} </Col><Col><div className='d-flex '><img className='arrow ps-3 pt-2' src={arrow} alt="" /> <img className='arrow ps-2 pt-2' src={arrow} alt="" /></div></Col></Row></Button>
       
        </div>
  )
}

export default SkipButton