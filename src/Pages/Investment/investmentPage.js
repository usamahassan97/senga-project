import React from 'react'
import { Container } from '@chakra-ui/react'
import Chart from '../../components/chart/Chart'
import TabInvestment from '../../components/tabs/TabInvestment'
import Detail from '../details/Detail'
import "../page-custom-style.css"

const InvestmentPage = () => {
  return (
    <>
        <Container maxW='1250px'   >
            <div className='tab-invest pt-3'>
                <TabInvestment/>
            </div>
            
        </Container>
    </>
  )
}

export default InvestmentPage