import React, { useCallback, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRecordContext } from "react-admin";

const WithdrawDialog = () => {
  const [open, setOpen] = useState(false);
  const record = useRecordContext();

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        withdraw
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Withdraw</DialogTitle>
        <DialogContent>
          <DialogContentText>{record.userId}</DialogContentText>
          <DialogContentText>{record.title}</DialogContentText>
          <DialogContentText>{record.body}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Withdraw</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WithdrawDialog;
