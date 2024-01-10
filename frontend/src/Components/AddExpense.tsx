import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddExpense = () => {
  const [expenseData, setExpenseData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
    payment: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpenseData({ ...expenseData, [event.target.name]: event.target.value });
    // console.log(event.target.name,"event.target.name");
    console.log(event.target.value,"event.target.value");
    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      expenseData.date &&
      expenseData.description &&
      expenseData.category &&
      expenseData.amount &&
      expenseData.payment
    ) {
      alert("Expense added Successfully!");
      setExpenseData({
        date: "",
        description: "",
        category: "",
        amount: "",
        payment: "",
      })
      
    } else {
      alert("Please fill all the details!");
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50px",
        left: "300px",
        border: "1px solid white",
        backgroundColor: "white",
        padding: "15px",
        width: "400px",
      }}
    >
      <Typography sx={{ color: "black" }}>Add Expense</Typography>
      <form style={{ width: "90%",  margin:"auto" }}
          onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="date"
          value={expenseData.date}
          label="Date"
          variant="outlined"
          sx={{ marginBottom: "30px",width:"100% " }}
          InputProps={{
            sx: {
              fontSize: { sm: "20px", md: "14px" },
              width: "100%",
              height: { sm: "70px", md: "40px" },
              padding: "0",
            },
          }}
          onChange={handleChange}
          required
        />
        <TextField
          type="text"
          name="description"
          value={expenseData.description}
          label="Description"
          variant="outlined"
          error
          sx={{ marginBottom: "30px",width:"100% " }}
          InputProps={{
            sx: {
              fontSize: { sm: "20px", md: "14px" },
              width: "100%",
              height: { sm: "70px", md: "40px" },
              padding: "0",

              "& .MuiFormLabel-root":{
                fontSize:"18px"
              }
            },
          }}
          onChange={handleChange}
          required
        />
        <TextField
          type="text"
          name="category"
          value={expenseData.category}
          label="Category"
          variant="outlined"
          sx={{ marginBottom: "30px",width:"100% ", }}
          InputProps={{
            sx: {
              fontSize: { sm: "20px", md: "14px" },
              width: "100%",
              height: { sm: "70px", md: "40px" },
              padding: "0",
            },
          }}
          onChange={handleChange}
          required
        />
        <TextField
          type="number"
          name="amount"
          value={expenseData.amount}
          label="Amount"
          variant="outlined"
          sx={{ marginBottom: "30px",width:"100% " }}
          InputProps={{
            sx: {
              fontSize: { sm: "20px", md: "14px" },
              width: "100%",
              height: { sm: "70px", md: "40px" },
              padding: "0",
            },
          }}
          onChange={handleChange}
          required
        />
        <TextField
          type="text"
          name="payment"
          value={expenseData.payment}
          label="Payment Mode"
          variant="outlined"
          sx={{ marginBottom: "30px",width:"100% " }}
          InputProps={{
            sx: {
              fontSize: { sm: "20px", md: "14px" },
              width: "100%",
              height: { sm: "70px", md: "40px" },
              padding: "0",
            },
          }}
          onChange={handleChange}
          required
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            height: { sm: "50px", md: "35px" },
            fontSize: { sm: "20px", md: "15px" },
          }}
        >
          Add Expense
        </Button>
      </form>
    </Box>
  );
};

export default AddExpense;
