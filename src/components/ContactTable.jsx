import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { remove, ref } from "firebase/database";
import { db } from "../firebase/firebase";
import FormDialog from "./FormDialog";

export default function ContactTable({ setConctactList, contactList }) {
  const [open, setOpen] = React.useState(false);
  const [updateInfo, setUpdateInfo] = React.useState({});

  const deleteContact = (id) => {
    remove(ref(db, "contacts/" + id));
  };
  const editContact = (id, name, phone, gender) => {
    setOpen(true);
    setUpdateInfo({ name: name, gender: gender, phone: phone, id: id });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactList?.map((contact) => (
            <TableRow
              key={contact.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {contact.name}
              </TableCell>
              <TableCell align="right">{contact.phone}</TableCell>
              <TableCell align="right">{contact.gender}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <EditIcon
                    onClick={() =>
                      editContact(
                        contact.id,
                        contact.name,
                        contact.phone,
                        contact.gender
                      )
                    }
                  />
                </IconButton>
              </TableCell>
              <TableCell align="right">
                <IconButton>
                  <DeleteIcon onClick={() => deleteContact(contact.id)} />
                </IconButton>
              </TableCell>
              <FormDialog
                open={open}
                setOpen={setOpen}
                updateInfo={updateInfo}
                setUpdateInfo={setUpdateInfo}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
