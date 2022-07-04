import React, { useState } from "react";
import NewInvoice from "../NewInvoice";
import { Box, Button, FormControl, TextField, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import CustomDialog from "../../../CustomDialog/CustomDialog";
import "./styles.css";


function AddItem(props) {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [nameErr, setNameErr] = useState(false)
  const [onSubmit, setOnSubmit] = useState(false)

  const clearState = () => {
    setItem("");
    setAmount("");
    setRate("");
    setQuantity("");
    setDescription("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const formInputData = {
      item,
      amount,
      rate,
      quantity,
      description,
    };
    props.func(formInputData);

  }

  return (
    <CustomDialog
      open={props.show}
      title="New Item"
      content={
        <Box padding="3px 0" width='550px' height='300px'>
          <FormControl onSubmit={handleSubmit}>
            <Grid className="item-outline" spacing={5}>
            <TextField
              label="Item"
              variant="outlined"
              type="text"
               inputProps={{
                style: {
                  marginLeft:"8px"
                },
               }}
              onChange={(e) => setItem(e.target.value)}
              value={item}
              error={nameErr}
            />

            <TextField
              label="Quantity"
              variant="outlined"
              type="text"
              onChange={(e) => setAmount(e.target.value)}
              inputProps={{
                style: {
                  marginLeft:"8px"
                },
               }}
              value={amount}
              error={nameErr}
            />


            </Grid>
            <div className="item-outline">
            <TextField
              label="Rate"
              variant="outlined"
              type="text"
              onChange={(e) => setRate(e.target.value)}
              value={rate}
              error={nameErr}
            />
            <TextField
              label="Amount"
              variant="outlined"
              type="text"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              error={nameErr}
            />
            </div>
           
           
            <TextField
              label="Description"
              variant="outlined"
              type="text"
              inputProps={{
                style: {
                  height: "100px",
                },
              }}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              error={nameErr}
            />
          </FormControl>
        </Box>
        
      }
      actions={
        <Box
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
         <Button
                  variant='text'
                  open={() => props.show(false)}
                  >
                  Cancel
              </Button>
           
          <LoadingButton
            variant="contained"
            onClick={handleSubmit}
//loading={handleSubmit}
          >
            Save
          </LoadingButton>
        </Box>
      }
    />
  );
}
export default AddItem;
