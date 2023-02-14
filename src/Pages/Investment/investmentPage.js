import React from 'react'
import { Card, Container } from 'reactstrap'
import Chart from '../../components/chart/Chart'
import "../page-custom-style.css"

const InvestmentPage = () => {
  return (
    <>
        <Container>
            <div className='p-5'>
                <Card className='w-100 card_body'>
                    <Chart />
                </Card>

                <Card className='w-100 card_body'>
                    <Chart />
                </Card>

                <Card className='w-100 card_body'>
                    <Chart />
                </Card>
            </div>
        </Container>
    </>
  )
}

export default InvestmentPage