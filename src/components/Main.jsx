import { Grid } from "@mui/material";
import React, { useState } from "react";
import ContactTable from "./ContactTable";
import Form from "./Form";

const Main = () => {
  const [contactList, setContactList] = useState([]);
  return (
    <Grid container spacing={0} sx={{ padding: "2rem", gap: "1rem" }}>
      <Grid item xs={8} md={4} sx={{ marginX: "auto" }}>
        <Form contactList={contactList} setContactList={setContactList} />
      </Grid>
      <Grid item xs={12} md={7} sx={{ m: "auto" }}>
        <ContactTable
          contactList={contactList}
          setContactList={setContactList}
        />
      </Grid>
    </Grid>
  );
};

export default Main;
