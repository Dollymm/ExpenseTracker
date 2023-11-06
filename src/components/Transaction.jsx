import { Typography, Divider, List, Box } from '@mui/material';
import React from 'react';
import AllTransation from './AllTransation';

const Transaction = ({ transaction }) => {
  return (
    <Box>
      <Typography variant='h5'>Transaction History</Typography>
      <Divider />
      <List>
        {transaction.map((transaction, index) => (
        <AllTransation key={index} transaction={transaction}/>
        ))}
      </List>
    </Box>
  );
};

export default Transaction;
