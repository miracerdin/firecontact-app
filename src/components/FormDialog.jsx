import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { db } from "../firebase/firebase";
import { ref, update } from "firebase/database";
import { toastSuccessNotify } from "../helpers/ToastNotify";

export default function FormDialog({
  open,
  setOpen,
  updateInfo,
  setUpdateInfo,
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setUpdateInfo({ ...updateInfo, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    update(ref(db, "contacts/" + updateInfo.id), {
      name: updateInfo.name,
      phone: updateInfo.phone,
      gender: updateInfo.gender,
    });
    toastSuccessNotify("Successfully Changed!");
    handleClose();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            name="name"
            fullWidth
            variant="standard"
            value={updateInfo.name}
            onChange={(e) => handleChange(e)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone"
            type="text"
            name="phone"
            fullWidth
            variant="standard"
            value={updateInfo.phone}
            onChange={(e) => handleChange(e)}
          />
        </DialogContent>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel id="demo-gender">Gender</InputLabel>
            <Select
              labelId="demo-gender"
              id="gender"
              name="gender"
              label="Gender"
              value={updateInfo.gender}
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
