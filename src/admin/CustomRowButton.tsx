import React, { useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useRecordContext, Button } from "react-admin";

const CustomRowButton = () => {
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
      <Button label="CUSTOM" onClick={handleClickOpen}>
        <QuestionMarkIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Custom Dialog</DialogTitle>
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
          <Button label="Cancel" onClick={handleClose} />
          <Button label="Submit" onClick={handleClose} />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomRowButton;
