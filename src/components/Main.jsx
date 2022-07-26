import { Grid } from "@mui/material";
import React, { useState } from "react";
import ContactTable from "./ContactTable";
import Form from "./Form";

const Main = () => {
  const [contactList, setContactList] = useState([]);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Form contactList={contactList} setContactList={setContactList} />
        </Grid>
        <Grid item xs={8}>
          <ContactTable
            contactList={contactList}
            setContactList={setContactList}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
