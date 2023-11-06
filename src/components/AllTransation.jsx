import React from 'react'
import {  ListItem, ListItemText } from '@mui/material'
import styled from '@emotion/styled'
const  Detail=styled(ListItem)`
margin-top:10px
`

const AllTransation = ({transaction}) => {
  const color = transaction.amount>0 ?`green`:`red`;
  return (
<Detail style={{background:`${color}`, color:'#fff'}}>
    <ListItemText>{transaction.text}</ListItemText>
    <ListItemText>{transaction.amount}</ListItemText>
</Detail>
  )
}

export default AllTransation