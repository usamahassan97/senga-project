import React from 'react'
import { Button } from 'reactstrap'
import arrow from "../../Assets/Icons/angle.png"
import "../custom-style.css"
const SkipButton = (props) => {
  return (
    <div>
            <Button className='skip_btns'>{props.value} <img className='arrow ps-3' src={arrow} alt="" /> <img className='arrow ps-2' src={arrow} alt="" /></Button>
        </div>
  )
}

export default SkipButton