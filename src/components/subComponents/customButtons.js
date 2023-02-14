import React from 'react'
import { Button } from 'reactstrap'
import "../custom-style.css"

const CustomButtons = (props) => {
  return (
    <>
        <div>
            <Button className='custom_btns' onClick={props.onClick}>{props.value}</Button>
        </div>
    </>
  )
}

export default CustomButtons