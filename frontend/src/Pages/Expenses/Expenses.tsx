import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import AddExpense from "../../Components/AddExpense";
import { API } from "../../Constant/network";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import EditExpense from "../../Components/EditExpense";

interface Exptab {
  date: String;
  description: String;
  category: String;
  amount: String;
  payment: String;
  _id: String;
}

const Expenses: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const router = useNavigate();
  const [expenseData, setExpenseData] = useState<Exptab[]>([]);
  // console.log(expenseData);

  const addExpense = (newExpense:Exptab) => {
    setExpenseData([newExpense, ...expenseData]);
  };

  const popup = () => {
    setOpen(!open);
  };


  // ----------------------------**Edit Expense**--------------------------------------------

  const popEdit = (id: any) => {
    setEdit(!open);
    const url = `http://localhost:8000/api/v1/expense/expense/${id}`;
    const token: string | null = JSON.parse(
      localStorage.getItem("userToken") || "null"
    );
    const headers = { Authorization: "Bearer " + token };
    API.get(url, expenseData, headers)?.subscribe({
      next(response: any) {
        console.log(response, ": response");
        setExpenseData(response.singleExpense);
        // console.log(response.singleExpense, ": response.singleExpense");
      },
      error(error) {
        console.log(error);
      },
      complete() {
        console.log("complete");
      },
    });
    router(`/expense/${id}`);
  };

    // ----------------------------**Delete Expense**--------------------------------------------


  const deleteExpense = (id: any) => {
    const url = `http://localhost:8000/api/v1/expense/expense/${id}`;
    const token: string | null = JSON.parse(
      localStorage.getItem("userToken") || "null"
    );
    const headers = { Authorization: "Bearer " + token };
    API.deleteApi(url, expenseData, headers)?.subscribe({
      next(response: any) {
        setExpenseData(response.deletedExpense);
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
  };

    // ----------------------------**Get Expense**--------------------------------------------


  const url = " http://localhost:8000/api/v1/expense/expense";
  const token: string | null = JSON.parse(
    localStorage.getItem("userToken") || "null"
  );
  const headers = { Authorization: "Bearer " + token };
  const paramsObj = { skipNo: 0, takeNo: 0 };
  const getExpData = () => {
    API.get(url, paramsObj, headers)?.subscribe({
      next(response: any) {
        // console.log(response,": response");
        // console.log(response.data,": response.data");
        // console.log(response.data.allExpense,": response.data.allExpense");
        setExpenseData(response.allExpense);
      },
      error(error) {
        console.log(error);
      },
      complete() {
        // console.log("complete")
      },
    });
  };

  useEffect(() => {
    getExpData();
  }, []);
  // console.log(expenseData, " - expenseDAta");

  const secdiv = {
    width: "95%",
    margin: "auto",
    borderRadius: "12px",
    backgroundColor: "#272727",
    marginTop: "22px",
    border: "1px solid #3d3d3d",
    padding: "15px",
    fontFamily: "Poppins",
    marginBottom: "30px",
    position: "relative",
    zIndex: "0",
  };

  const bttn = {
    textTransform: "none",
    padding: "7px 9px",
    fontSize: "13px",
    fontWeight: "600",
    display: { xs: "none", sm: "block", md: "block" },
    backgroundColor: "rgba(86, 11, 173)",
  };

  const bttntwo = {
    border: "1px solid #1976d2",
    backgroundColor: "#1976d2",
    color: "e9f5db",
    width: "40px",
    padding: "6px 0px",
    fontSize: "13px",
    fontWeight: "600",
    display: { xs: "block", sm: "none", md: "none" },
  };

  const chevron = {
    border: "1px solid #2196f3",
    width: "21px",
    height: "21px",
    borderRadius: "3px",
    backgroundColor: "#2196f3",
    color: "e9f5db",
  };

  const one = {
    border: "1px solid #3f37c9",
    margin: "auto",
    width: "25px",
    height: "24px",
    borderRadius: "5px",
    fontSize: "15px",
    backgroundColor: "#3f37c9",
  };

  const page = {
    display: "flex",
    justifyContent: "space-between",
    // border: "1px solid red",
    width: "77px",
    alignItems: "center",
    textAlign: "center",
  };

  const show = {
    display: "flex",
    justifyContent: "space-between",
    padding: " 0 27px 0 20px",
    margin: "22px 0",
  };

  const celltwo = {
    // padding: "5px",
    paddingLeft: "0px",
    color: "#f8edeb",
    width: "187px",
    padding: { xs: "0px 7px", sm: "30px 20px 30px 10px", md: "0px 0px" },
    textWrap: "nowrap",
    fontSize: { sm: "20px", md: "14px" },
  };

  const contentname = {
    display: "flex",
    alignItems: "center",
    // padding: "0px",
    width: "187px",
    padding: { xs: "0px 7px", sm: "2px 0px 0 10px" },
    textWrap: "nowrap",
    fontSize: { sm: "20px", md: "14px" },
    margin: "0",
    paddingLeft: "10px",
    color: "#f8edeb",
    marginRight: { sm: "20px", md: "0" },
  };

  const tablecss = {
    // border: "1px solid #e4e4e5",
    marginTop: "15px",
    borderRadius: "5px",
    "& .MuiTableRow-root": {
      border: "2px solid #3d3d3d",
    },
  };

  const tableCell = {
    paddingLeft: "0px",
    color: "#f8edeb",
    width: "187px",
    padding: {
      xs: "0px 7px",
      sm: "30px 20px 30px 10px",
      md: "0px 0px",
    },
    textWrap: "nowrap",
    fontSize: { sm: "20px", md: "14px" },
  };

  const dateCell = {
    paddingLeft: "10px",
    width: "187px",
    padding: {
      xs: "0px 7px",
      sm: "30px 20px 30px 10px",
      md: "0px 10px",
    },
    textWrap: "nowrap",
    fontSize: { sm: "20px", md: "14px" },
    color: "#f8edeb",
  };

  const desCell = {
    paddingLeft: "0px",
    color: "#f8edeb",
    width: "187px",
    textWrap: "nowrap",
    fontSize: { sm: "20px", md: "14px" },
  };

  return (
    <>
      <Box sx={secdiv}>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "18px", md: "18px" },
              fontWeight: "700",
              alignSelf: "center",
              color: "#f8edeb",
            }}
          >
            Expense List
          </Typography>
          <Stack
            sx={{ alignItems: "center", marginLeft: "auto" }}
            spacing={2}
            direction="row"
          >
            {/* <TextField variant="outlined" placeholder="Search..." sx={{'& .MuiInputBase-root':{height:'25px'}}} 
              InputProps={{ endAdornment: <endAdornment position="End"><SearchIcon/></endAdornment>}}/>   */}

            <TextField
              placeholder="Search..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "grey" }} />
                  </InputAdornment>
                ),
                sx: {
                  width: { xs: "172px", sm: "300px", md: "260px" },
                  height: { xs: "28px", sm: "38px", md: "38px" },
                  fontSize: "14px",
                  color: "#f8edeb",
                  border: "1px solid grey",
                },
              }}
              variant="outlined"
            />
            <Button variant="contained" sx={bttn} onClick={popup} >
              Add Expense
            </Button>

            <IconButton sx={bttntwo}>
              <OpenInBrowserIcon />
            </IconButton>
          </Stack>
        </Box>
        <TableContainer sx={tablecss}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={dateCell}>
                  <strong>Sr No.</strong>
                </TableCell>
                <TableCell align="left" sx={dateCell}>
                  <strong>Date</strong>
                </TableCell>
                <TableCell align="left" sx={desCell}>
                  <strong>Description</strong>
                </TableCell>
                <TableCell align="left" sx={tableCell}>
                  <strong>Category</strong>
                </TableCell>
                <TableCell align="left" sx={tableCell}>
                  <strong>Amount</strong>
                </TableCell>
                <TableCell align="left" sx={tableCell}>
                  <strong>Payment Mode</strong>
                </TableCell>
                <TableCell align="left" sx={tableCell}>
                  <strong>Edit</strong>
                </TableCell>
                <TableCell align="left" sx={tableCell}>
                  <strong>Delete</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {Array.isArray(expenseData) ? (
              expenseData?.map((content, index) => (
                <TableRow sx={{ padding: "-16px" }} key={index}>
                  <TableCell align="left" sx={{ padding: "5px 0" }}>
                    <Box sx={contentname}>{index + 1}</Box>
                  </TableCell>
                  <TableCell align="left" sx={{ padding: "5px 0" }}>
                    <Box sx={contentname}>{content.date}</Box>
                  </TableCell>
                  <TableCell align="left" sx={celltwo}>
                    {content.description}
                  </TableCell>
                  <TableCell align="left" sx={celltwo}>
                    {content.category}
                  </TableCell>
                  <TableCell align="left" sx={celltwo}>
                    {content.amount}
                  </TableCell>
                  <TableCell align="left" sx={celltwo}>
                    {content.payment}
                  </TableCell>

                  <TableCell align="left" sx={celltwo}>
                    <IconButton onClick={() => popEdit(content._id)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell align="left" sx={celltwo}>
                    <IconButton onClick={() => deleteExpense(content._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))): null}
            </TableBody>
          </Table>
          <Box sx={show}>
            <Typography fontSize={14}>
              Showing <b>1</b> to <b>10</b> out of <b>20</b> Transactions
            </Typography>
            <Box sx={page}>
              <ChevronLeftIcon sx={chevron} />
              <p style={one}>1</p>
              <ChevronRightIcon sx={chevron} />
            </Box>
          </Box>
        </TableContainer>

        {open ? <AddExpense /> : null}
        {edit ? <EditExpense/> : null}
      </Box>
    </>
  );
};

export default Expenses;
