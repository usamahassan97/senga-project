import React from 'react'
import { Row, Col } from 'reactstrap'
import Header from '../components/Header/Header'
import Sidebar from '../components/sidebar/Sidebar'

const Layout = () => {
  return (
    <div className='layout' style={{ overflow: "hidden" }}>
      <Row>
        <Col md={3}  xs={12}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <Header />
        </Col>
      </Row>
    </div>
  )
}

export default Layout
