import React from 'react'
import { Row, Col } from 'reactstrap'
import profile from "../../Assets/Icons/profile.png"

const TopBar = (props) => {
    return (
        <>
            <Row>
                <Col md={6} sm={12}>
                    <div className='text-center mt-4'>
                        <p className='headings'>{props.value}</p>
                    </div>

                </Col>

                <Col md={6}>
                    <div className='text-end'>
                        <img src={profile} alt="" className='logo_setting mbl_screen' />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default TopBar