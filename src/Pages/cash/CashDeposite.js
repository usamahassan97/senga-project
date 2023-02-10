import React from 'react'
import {
    Container,
    Row,
    Col,
    
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    
  } from "reactstrap";
  import { Link } from "react-router-dom";
import TopRow from '../../components/subComponents/topRow'
import pay from "../../Assets/Icons/pay.png"
import paypal from "../../Assets/Icons/paypal.png"
import credit from "../../Assets/Icons/creditcard.png"
import mastercard from "../../Assets/Icons/mastercard.png"
import CustomButtons from '../../components/subComponents/customButtons';
import Side from '../../components/landingSide/Side';

const CashDeposite = () => {
  return (
    <Container>
        <div className="p-md-5">
            <TopRow value={"Cash Deposite"}/>
        </div>
        <Row>
            <Col>
            <div className="cash-para">
                <p>Deposit Minimum of $50 to create account</p>
            </div>
            <FormGroup className='pb-5'>
            <Label className="label_text mt-4 ">Amount</Label>
                  <Input
                  
                    id="number"
                    name="number"
                    placeholder="$200"
                    className="input_style "
                  />
            </FormGroup>
            <div className="pay-method mt-5 mb-5 pb-5">
                <p>Means of Payment</p>
              <div className="method fs-6 pb-5">
                <Row>
                    <Col>
                    <img className='w-75 pt-1' src={pay} alt="" /></Col>
                    <Col>
                    <img className='w-75' src={credit} alt="" /></Col>
                    <Col>
                    <img className='w-70 pe-3 me-3 ' src={paypal} alt="" /></Col>
                    <Col><img className='w-75 pt-3' src={mastercard} alt="" /></Col>
                </Row>
              </div>
            </div>
            <div className="Continue mt-5 pt-5  ">
            <Link to ="/home"><CustomButtons value={"Continue"}/></Link>
            </div> </Col>
            <Col className='side'><Side/></Col>
        </Row>
    </Container>
  )
}

export default CashDeposite