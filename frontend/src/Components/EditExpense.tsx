import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { API } from "../Constant/network";
import { useParams } from "react-router-dom";

interface ExpenseData {
  date: string;
  description: string;
  category: string;
  amount: string;
  payment: string;
}


const EditExpense: React.FC = () => {
  const initialExpenseData: ExpenseData = {
    date: "",
    description: "",
    category: "",
    amount: "",
    payment: "",
  };

  const [expenseData, setExpenseData] =
    useState<ExpenseData>(initialExpenseData);
  const [errors, setErrors] = useState<{ [key in keyof ExpenseData]: boolean }>(
    {
      date: false,
      description: false,
      category: false,
      amount: false,
      payment: false,
    }
  );
  const { id } = useParams();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExpenseData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const validateField = (name: keyof ExpenseData): boolean => {
    if (!expenseData[name] || !expenseData[name].length) {
      // errors[name] = true;
      // console.log(errors);
      // setErrors({ ...errors });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: true }));
      return false;
    }
    return true;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid =
      expenseData.date &&
      expenseData.description &&
      expenseData.category &&
      expenseData.amount &&
      expenseData.payment;

    if (isValid) {
      const url = `http://localhost:8000/api/v1/expense/expense/${id}`;
      // const paramsObj = { id: "65bb6692cb2b271b580cae03" };
      console.log(id, "----id");
      console.log(url, "----url");
      const token: string | null = JSON.parse(
        localStorage.getItem("userToken") || "null"
      );
      const headers = { Authorization: "Bearer " + token };
      API.put(url, expenseData, headers)?.subscribe({
        next(response: any) {
          console.log(response, ": response");
          // console.log(response.data, ": response.data");
        },
        error(error) {
          console.log(error);
        },
        complete() {
          console.log("complete");
        },
      });
      toast.success("Expense added Successfully!");
      setExpenseData(initialExpenseData);
    } else {
      if (!expenseData.date || !expenseData.date.length) {
        errors.date = true;
      } else {
        errors.date = false;
      }
      if (!expenseData.description || !expenseData.description.length) {
        errors.description = true;
      } else {
        errors.description = false;
      }
      if (!expenseData.category || !expenseData.category.length) {
        errors.category = true;
      } else {
        errors.category = false;
      }
      if (!expenseData.amount || !expenseData.amount.length) {
        errors.amount = true;
      } else {
        errors.amount = false;
      }
      if (!expenseData.payment || !expenseData.payment.length) {
        errors.payment = true;
      } else {
        errors.payment = false;
      }
      setErrors({ ...errors });
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
      <Typography sx={{ color: "black" }}>Edit Expense</Typography>
      <form style={{ width: "90%", margin: "auto" }} onSubmit={handleSubmit}>
        {["date", "description", "category", "amount", "payment"].map(
          (field) => (
            <div key={field}>
              <InputLabel required>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </InputLabel>
              <TextField
                onInput={() => validateField(field as keyof ExpenseData)}
                onBlur={() => validateField(field as keyof ExpenseData)}
                error={errors[field as keyof ExpenseData]}
                helperText={
                  errors[field as keyof ExpenseData]
                    ? `${
                        field.charAt(0).toUpperCase() + field.slice(1)
                      } is required`
                    : null
                }
                type={
                  field === "amount"
                    ? "number"
                    : "text" && field === "date"
                    ? "date"
                    : "text"
                }
                name={field}
                value={expenseData[field as keyof ExpenseData]}
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
            </div>
          )
        )}

        <Button
          variant="contained"
          type="submit"
          sx={{
            height: { sm: "50px", md: "35px" },
            fontSize: { sm: "20px", md: "15px" },
          }}
        >
          Edit Expense
        </Button>
      </form>
    </Box>
  );
};

export default EditExpense;
