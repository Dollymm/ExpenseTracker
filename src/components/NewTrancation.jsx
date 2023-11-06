import { Typography, Box, TextField, Button, styled } from '@mui/material';
import React, { useState } from 'react';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5,
  & > div,
  & > button {
    margin: 8px 0;
  }
`

const NewTransaction = ({setTransaction}) => {
  const [text,setText]=useState('')
  const [amount,setAmount]=useState();
  const addTransaction=()=>{
const transaction={
  id:Math.floor(Math.random()*1000000),
  text:text,
  amount:+amount
}
setTransaction(prevState=>[transaction,...prevState])
  }
  return (
    <Container>
      <Typography variant='h5'>New Transaction</Typography>
      <TextField label="Enter Expense" onChange={(e)=>setText(e.target.value)}/>
      <TextField label="Enter Amount"onChange={(e)=>setAmount(e.target.value)} />
      <Button variant='contained'onClick={addTransaction}>Add Transaction</Button>
    </Container>
  );
};

export default NewTransaction;
