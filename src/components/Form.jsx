import {
  Typography,
  TextField,
  Box,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import { ref, set, push, onValue } from "firebase/database";
import { db } from "../firebase/firebase";
import { toastSuccessNotify } from "../helpers/ToastNotify";

const Form = ({ setContactList }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  function writeUserData(e) {
    e.preventDefault();
    const contactsRef = ref(db, "contacts");
    const newContactRef = push(contactsRef);
    toastSuccessNotify("New Contact Successfully Added!");
    set(newContactRef, {
      name: name,
      phone: phone,
      gender: gender,
    });
  }

  useEffect(() => {
    const contactsRef = ref(db, "contacts");
    onValue(contactsRef, (snapshot) => {
      const contactArr = [];
      const data = snapshot.val();
      for (let id in data) {
        contactArr.push({ id, ...data[id] });
      }
      console.log(contactArr);
      setContactList(contactArr);
    });

    // eslint-disable-next-line
  }, []);

  return (
    <form
      style={{
        backgroundColor: "white",
        // maxWidth: "500px",
        // maxHeight: "300px",
        margin: "auto",
      }}
      onSubmit={writeUserData}
    >
      <Box component="form" noValidate autoComplete="off">
        <div>
          <Typography variant="h4">Add Contact</Typography>
        </div>
        <div>
          <TextField
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <AccountCircle />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
            fullWidth
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <PhoneIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
            id="outlined-number"
            label="Teleophone"
            type="tel"
            fullWidth
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
      </Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Gender"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <div>
        <Button variant="contained" type="submit">
          ADD
        </Button>
      </div>
    </form>
  );
};

export default Form;
