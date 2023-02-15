import React from 'react'
import { Card, Container } from 'reactstrap'
import Chart from '../../components/chart/Chart'
import TabInvestment from '../../components/tabs/TabInvestment'
import "../page-custom-style.css"

const InvestmentPage = () => {
  return (
    <>
        <Container>
            <div className='tab-invest'>
                <TabInvestment/>
            </div>
        </Container>
    </>
  )
}

export default InvestmentPage