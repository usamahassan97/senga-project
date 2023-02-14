import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./card.css"
const Cards = () => {
  return (
    <div className='row row-cols-1 row-cols-md-2 g-4" '>

      <Card className='card me-2'>
        <Card.Body>
          <div className="vcard-body ">
            <strong>Iphone 14</strong>(General Investment)
            <div className="invest-detail mt-3"><h5>$3000</h5>
              <p>+15(2%)</p></div>
            <p>Balanced Risk Level</p>
            <div className="link-card text-end">
              <a href="">View Details</a>
            </div>

          </div>
        </Card.Body>
      </Card>


      <Card className='card2 ms-2'>
        <div className="vcard-body ">
          <strong>Iphone 14</strong>(General Investment)
          <div className="invest-detail mt-3"><h5>$3000</h5>
            <p>+15(2%)</p></div>
          <p>Balanced Risk Level</p>
          <div className="link-card text-end">
            <a href="">View Details</a>
          </div>

        </div>
      </Card>



      {/* <Card body className='card3'>
        <div className="vcard-body ">
             <strong>Iphone 14</strong>(General Investment)
             <div className="invest-detail mt-3"><h5>$3000</h5>
             <p>+15(2%)</p></div>
             <p>Balanced Risk Level</p>
             <div className="link-card text-end">
                <a href="">View Details</a>
             </div>
             
        </div>
    </Card> */}

    </div>
  )
}

export default Cards