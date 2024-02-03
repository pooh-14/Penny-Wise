import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { API } from "../Constant/network";
import CloseIcon from '@mui/icons-material/Close';
import addImg from '../Images/ipad2.png'

interface ExpenseData {
  date: string;
  description: string;
  category: string;
  amount: string;
  payment: string;
}

const AddExpense: React.FC = (addExpense) => {
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

    // const isValid =
    //   validateField("date") &&
    //   validateField("description") &&
    //   validateField("category") &&
    //   validateField("amount") &&
    //   validateField("payment");

    const isValid =
      expenseData.date &&
      expenseData.description &&
      expenseData.category &&
      expenseData.amount &&
      expenseData.payment;

    if (isValid) {
      const url = "http://localhost:8000/api/v1/expense/expense";
      const token: string | null = JSON.parse(localStorage.getItem("userToken") || 'null');
      const headers = {Authorization: "Bearer " + token};
    API.post(url,expenseData,headers)?.subscribe({
      next(response: any) {
        console.log(response, ": response");
        console.log(response.data, ": response.data");
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

  const imgBox={width:"49%",color:"black",
  backgroundImage: 'linear-gradient(135deg, #7b6ceb 0, #d371be 100%)',
  paddingTop:"20px"
}

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50px",
        left: "300px",
        border: "1px solid black",
        backgroundColor: "white",
        marginTop:"20px",
        width: "700px",
        display:"flex",  
        justifyContent:"space-between",
        color:"white"
      }}
    >
      <Box sx={imgBox}>
       <img style={{width:"100%"}} src={addImg}/>
      </Box>
      <Box sx={{width:"51%",padding: "10px", backgroundColor: "#111111", }}>
      <Box sx={{display:"flex",  justifyContent:"space-between"}}>
      <Typography sx={{ marginBottom:"10px",fontSize:"18px", fontWeight:"600", marginLeft:"10px" }}>Add Expense</Typography>
      <CloseIcon />
      </Box>
      <form style={{ width: "95%", margin: "auto",color:"white" }} onSubmit={handleSubmit}>
        {["date", "description", "category", "amount", "payment"].map(
          (field) => (
            <div key={field}>
              <InputLabel required sx={{textAlign:"left", fontSize:"14px",color:"grey"}}>
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
                sx={{ marginBottom: "10px", width: "100% ",color:"white" }}
                InputProps={{
                  sx: {
                    fontSize: { sm: "20px", md: "14px" },
                    width: "100%",
                    height: { sm: "70px", md: "32px" },
                    padding: "0",color:"white",
                    border:"1px solid grey",
                    '&::-webkit-calendar-picker-indicator': {
                      color: 'grey',
                    }
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
          Add Expense
        </Button>
      </form>
      </Box>
    </Box>
  );
};

export default AddExpense;
