import { Grid } from "@mui/material";
import React, { useState } from "react";
import ContactTable from "./ContactTable";
import Form from "./Form";

const Main = () => {
  const [contactList, setContactList] = useState([]);
  return (
    <Grid container spacing={0} style={{ minHeight: "100vh" }}>
      <Grid item xs={12} md={5} sx={{ m: "auto" }}>
        <Form contactList={contactList} setContactList={setContactList} />
      </Grid>
      <Grid item xs={12} md={5} sx={{ m: "auto" }}>
        <ContactTable
          contactList={contactList}
          setContactList={setContactList}
        />
      </Grid>
    </Grid>
  );
};

export default Main;
