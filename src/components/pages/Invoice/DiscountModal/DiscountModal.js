import { Box, Button, FormControl, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomDialog from "../../../CustomDialog/CustomDialog";
import { DataGrid } from "@mui/x-data-grid";
import { LoadingButton } from "@mui/lab";

const DiscountModal = ({ show, formdata, onSuccess }) => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [onSubmit, setOnSubmit] = useState(false);

  const createDiscount = (event) => {
    event.preventDefault();
    const discount = event.target.discount.value;

    formdata({ discount });
    // show(false)

    event.target.reset();
    //event.target.reset();

    // console.log(businessName)

    if (onSubmit) return;
    if (!name || name.trim().length === 0) {
      setNameErr(true);
      return;
    }
    setNameErr(false);
    setOnSubmit(true);
    show(false);
  };

  return (
    <CustomDialog
      open={show}
      title="Add Discount"
      content={
        <Box padding="5px 0">
          <FormControl>
            <TextField
              label="Discount Percentage"
              variant="outlined"
              value={name}
              name=""
              type="number"
              onChange={(e) => setName(e.target.value)}
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
          <Button variant="text" onClick={() => show(false)}>
            Cancel
          </Button>
          <LoadingButton
            variant="contained"
            onClick={() => createDiscount()}
            loading={onSubmit}
          >
            Create
          </LoadingButton>
        </Box>
      }
    />
  );
};

export default DiscountModal;
