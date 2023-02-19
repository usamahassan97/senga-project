import { Heading } from '@chakra-ui/react';
import React from 'react'
import {  Row, Col, Card, CardBody } from "reactstrap";
import tick from "../../../Assets/Icons/tick.png"

const FirstPage = () => {
  return (
    <div>
      <div className='pt-3'>
        <Heading as="h4" size="sm">Choose Account Type</Heading>
      </div>
      <div className=" d-flex  pb-5 mt-3 ">
        <Card body className="card1  card-cash  w-100 pe-5">
        <CardBody>
              <div className="vcardbody">
                <strong>General Investment</strong>
                <div className=" mt-3 ">
                  <p className="cash-para ">
                    A flexible, taxable investment account. Easy to use for
                    investments not held in ISAs or Pension
                  </p>
                </div>

                <div className="link-card text-end ">
                  <button className="btn-cash p-2 ps-3 pe-3">select</button>
                </div>
              </div>
              </CardBody>
            </Card> <Card body className="card2 card-cash w-100  ms-5 ms-4">
              <CardBody>
              <div className="vcard-body ">
                <strong>General Investment 2</strong>
                <div className=" mt-3">
                  <p className="cash-para">
                    Make the most of your allowance & maximise your tax free
                    returns
                  </p>
                </div>

                <div className="link-card text-end pt-4">
                  <button className="btn2-cash p-2 ps-3 pe-3">select</button>
                </div>
              </div>
              </CardBody>
            </Card>
            
           
          </div>
          
      <div className=" pb-3 pt-3">
            <strong>General Investment</strong>
            <div className="list-content pt-5 pb-5">
              <div className="one d-flex pb-2">
                <img className="pe-3 " src={tick} alt="" />500 USD  minimum investment
              </div>
              <div className="one pt-3 d-flex pb-2">
                <img className="pe-3 " src={tick} alt="" />No maximum investment
              </div>
              <div className="one pt-3 d-flex pb-2">
                <img className="pe-3" src={tick} alt="" />No set up or exit fees
              </div>
              <div className="one pt-3 d-flex pb-2">
                <img className="pe-3" src={tick} alt="" />Designed for investing for a year period
              </div>
              <div className="one pt-3 d-flex pb-2">
                <img className="pe-3" src={tick} alt="" />Withdraw  anytime for maximum flexibility
              </div>
              <div className="one pt-3 d-flex ">
                <img className="pe-3" src={tick} alt="" />Choose from a range of risk levels
              </div>
            </div>
          </div>
    </div>
  )
}

export default FirstPage
