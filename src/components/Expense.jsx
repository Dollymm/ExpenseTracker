import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import styled from '@emotion/styled';

const Container = styled(Box)`
  display: flex;
  & > div {
    flex: 1;
    padding: 10px;
  }
`;

const Expense = ({transaction}) => {
  const amount=transaction.map(transaction=>transaction.amount);
    const income=amount.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const expense=(amount.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1).toFixed(2);
  return (
    <Container>
      <div>
        <Card>
          <CardContent>
            <Typography variant="h6">Income</Typography>
            <Typography style={{ color: 'green' }}>₹{income}</Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardContent>
            <Typography variant="h6">Expense</Typography>
            <Typography style={{ color: 'red' }}>₹{expense}</Typography>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Expense;
