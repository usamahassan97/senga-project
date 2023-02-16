import React from 'react'

import { Card, CardBody, Heading} from '@chakra-ui/react'
import "./card.css"
const Cards = () => {
  return (
    <div className='d-flex ms-2 '>

      <Card  className='card mt-2 me-2'>
        <CardBody>
          <div className="vcard-body ">
            <strong>Iphone 14</strong>(General Investment)
            <div className="invest-detail mt-3"><Heading as="h5" size="sm">$3,000</Heading>
            <p className='pt-3'>+15(2%)</p></div>
          <p className='pt-5'>Balanced Risk Level</p>
          <div className="link-card text-end pt-2">
            <a href="">View Details</a>
          </div>

          </div>
        </CardBody>
      </Card>


      <Card className='card2 mt-2 ms-2'>
      <CardBody>
        <div className="vcard-body ">
          <strong>Iphone 14</strong>(General Investment)
          <div className="invest-detail mt-3"><Heading as="h5" size="sm">$3,000</Heading>
            <p className='pt-3'>+15(2%)</p></div>
          <p className='pt-5'>Balanced Risk Level</p>
          <div className="link-card text-end pt-2">
            <a href="">View Details</a>
          </div>

        </div>
        </CardBody>
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