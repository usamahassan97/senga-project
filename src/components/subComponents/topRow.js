import React from 'react'
import logo from "../../Assets/Images/logo.png"
import { Col, Row } from 'reactstrap'
import "../custom-style.css"

const TopRow = (props) => {
    return (
        <>
            <Row>
                <Col md={6} sm={12}>
                    <div>
                        <img src={logo} alt="" className='logo_setting lg_screen' />
                    </div>
                    <div className='text-center mt-4'>
                        <p className='headings'>{props.value}</p>
                    </div>

                </Col>

                <Col md={6}>
                    <div className='text-end'>
                        <img src={logo} alt="" className='logo_setting mbl_screen' />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default TopRow