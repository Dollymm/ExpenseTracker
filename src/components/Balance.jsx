
import React from 'react'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'

const BalceText=styled(Typography)`
font-size:25px;
margin-bottom:20px
`
const Balance = ({transaction}) => {
    const amount=transaction.map(transaction=>transaction.amount);
    const total=amount.reduce((amount,item)=>(amount+=item),0).toFixed(2);
  return (
    <Box>
    <BalceText>Balance:₹{total}</BalceText>
    </Box>
  )
}

export default Balance