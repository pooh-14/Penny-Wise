import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { error } from "console";
import React, { useState } from "react";
// import DatePicker from "react-datepicker";

const AddExpense = () => {
  const [expenseData, setExpenseData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
    payment: "",
  });

  const [dateError, setDateError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [paymentError, setPaymentError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpenseData({ ...expenseData, [event.target.name]: event.target.value });
    // console.log(event.target.name,"event.target.name");
    console.log(event.target.value, "event.target.value");
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
      });
    }
    if (!expenseData.date || !expenseData.date?.length) {
      setDateError(true);
    } else {
      setDateError(false);
    }

    if (!expenseData.description || !expenseData.description.length) {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }

    if (!expenseData.category || !expenseData.category.length) {
      setCategoryError(true);
    } else {
      setCategoryError(false);
    }

    if (!expenseData.amount || !expenseData.amount.length) {
      setAmountError(true);
    } else {
      setAmountError(false);
    }

    if (!expenseData.payment || !expenseData.payment.length) {
      setPaymentError(true);
    } else {
      setPaymentError(false);
    }
  };

  const noDescriptionError = () => {
    if (expenseData.description || expenseData.description.length) {
      setDescriptionError(false);
    } else {
      setDescriptionError(true);
    }
  };

  const noDateError = () => {
    if (expenseData.date || expenseData.date.length) {
      setDateError(false);
    } else {
      setDateError(true);
    }
  };

  const noCategoryError = () => {
    if (expenseData.category || expenseData.category.length) {
      setCategoryError(false);
    } else {
      setCategoryError(true);
    }
  };

  const noAmountError = () => {
    if (expenseData.amount || expenseData.amount.length) {
      setAmountError(false);
    } else {
      setAmountError(true);
    }
  };

  const noPaymentError = () => {
    if (expenseData.payment || expenseData.payment.length) {
      setPaymentError(false);
    } else {
      setPaymentError(true);
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
      <form style={{ width: "90%", margin: "auto" }} onSubmit={handleSubmit}>
        <InputLabel required>Date</InputLabel>
        <TextField
        onInput={noDateError}
          onBlur={noDateError}
          error={dateError}
          helperText={dateError ? "Date is required" : null}
          type="date"
          name="date"
          value={expenseData.date}
          variant="outlined"
          sx={{ marginBottom: "30px", width: "100% " }}
          InputProps={{
            sx: {
              fontSize: { sm: "20px", md: "14px" },
              width: "100%",
              height: { sm: "70px", md: "40px" },
              padding: "0",
            },
          }}
          onChange={handleChange}
        />
        <InputLabel required>Description</InputLabel>
        <TextField
          onInput={noDescriptionError}
          onBlur={noDescriptionError}
          error={descriptionError}
          helperText={descriptionError ? "Description is required" : null}
          type="text"
          name="description"
          value={expenseData.description}
          variant="outlined"
          sx={{ marginBottom: "30px", width: "100% " }}
          InputProps={{
            sx: {
              fontSize: { sm: "20px", md: "14px" },
              width: "100%",
              height: { sm: "70px", md: "40px" },
              padding: "0",

              "& .MuiFormLabel-root": {
                fontSize: "18px",
              },
            },
          }}
          onChange={handleChange}
        />
        <InputLabel required>Category</InputLabel>
        <TextField
          onInput={noCategoryError}
          onBlur={noCategoryError}
          error={categoryError}
          helperText={categoryError ? "Category is required" : null}
          type="text"
          name="category"
          value={expenseData.category}
          variant="outlined"
          sx={{ marginBottom: "30px", width: "100% " }}
          InputProps={{
            sx: {
              fontSize: { sm: "20px", md: "14px" },
              width: "100%",
              height: { sm: "70px", md: "40px" },
              padding: "0",
            },
          }}
          onChange={handleChange}
        />
        <InputLabel required>Amount</InputLabel>
        <TextField
          onInput={noAmountError}
          onBlur={noAmountError}
          error={amountError}
          helperText={amountError ? "Amount is required" : null}
          type="number"
          name="amount"
          value={expenseData.amount}
          variant="outlined"
          sx={{ marginBottom: "30px", width: "100% " }}
          InputProps={{
            sx: {
              fontSize: { sm: "20px", md: "14px" },
              width: "100%",
              height: { sm: "70px", md: "40px" },
              padding: "0",
            },
          }}
          onChange={handleChange}
        />
        <InputLabel required>Payment Mode</InputLabel>
        <TextField
          onInput={noPaymentError}
          onBlur={noPaymentError}
          error={paymentError}
          helperText={paymentError ? "Payment Mode is required" : null}
          type="text"
          name="payment"
          value={expenseData.payment}
          variant="outlined"
          sx={{ marginBottom: "30px", width: "100% " }}
          InputProps={{
            sx: {
              fontSize: { sm: "20px", md: "14px" },
              width: "100%",
              height: { sm: "70px", md: "40px" },
              padding: "0",
            },
          }}
          onChange={handleChange}
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
