import React, {  useState } from "react";
import "./App.css";
import Balance from "./components/Balance";
import Expense from "./components/Expense";
import NewTrancation from "./components/NewTrancation";
import Transaction from "./components/Transaction";
import { Typography, Box } from "@mui/material";
import styled from "@emotion/styled";

const Header = styled(Typography)`
  ${'' /* margin: 10px 0; */}
  font-size: 36px;
  color: blue;
  text-transform: uppercase;
`
const Component=styled(Box)`
display:flex;
justify-content: center;
background:#fff;
width:800px;
padding:10px;
border-radius:20px;
margin:auto;
&>div{
  height:70vh;
  width:50%;
  padding:10px ;
}
`

function App() {
  const [transaction, setTransaction] = useState([
    {
      id: 1,
      text: "momes",
      amount: -20,
    },
    {
      id: 2,
      text: "salary",
      amount: 5000,
    },
    {
      id: 3,
      text: "Book",
      amount: -100,
    },
    {
      id: 4,
      text: "Bounus",
      amount: 1500,
    },
  ]);

  return (
    <>
      <Box className="App">
        <Header variant="h1">Expense Tracker</Header>
        <Component>
          <Box>
            <Balance transaction={transaction} />
            <Expense transaction={transaction} />
            <NewTrancation setTransaction={setTransaction} />
          </Box>
          <Box>
            <Transaction transaction={transaction} />
          </Box>
        </Component>
      </Box>
    </>
  );
}

export default App;
