import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        COVIDE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    justifyContent: "center",
    width: 140,
    height: 50,
  },
  or: {
    display: "flex",
    align: "center",
    justifyContent: "center",
  },
  heading: {
    marginTop: theme.spacing(8),
    backgroundColor: "#11698D",
  },
  important: {
    padding: 20,
    marginTop: 2,
  },
  footer: {
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: "center",
    backgroundColor: "#707070",
    color: "#ffffff",
  },
}));

export default function AskForHelp() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name : ${name} \n Contact : ${contact} \n Query : ${query}`);
    alert(`Name : ${name} \n Contact : ${contact} \n Query : ${query}`);
    setName("");
    setContact("");
    setQuery("");
  };

  return (
    <div style={{ backgroundColor: "#f4eee8", margin: 0, top: 0 }}>
      <Container
        component="main"
        maxWidth="md"
        style={{ backgroundColor: "#F7F1F1" }}
      >
        <CssBaseline />
        <div className={classes.heading}>
          <Grid item>
            <Box color="primary.contrastText" p={2}>
              Ask For Help
            </Box>
          </Grid>
        </div>
        <div className={classes.paper}>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleName}
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleContact}
                  variant="outlined"
                  required
                  fullWidth
                  id="contact"
                  label="Contact Number"
                  name="contact"
                  type="contact"
                  value={contact}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  name="query"
                  label="Query"
                  id="query"
                  value={query}
                >
                  <InputLabel>Query</InputLabel>
                  <Select onChange={handleQuery}>
                    <MenuItem value={"A"}>A</MenuItem>
                    <MenuItem value={"B"}>B</MenuItem>
                    <MenuItem value={"C"}>C</MenuItem>
                    <MenuItem value={"D"}>D</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Typography style={{ alignItems: "center" }}>
                ______OR______
              </Typography>
              <Grid item xs={12}>
                <TextField
                  onChange={handleQuery}
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  name="query"
                  label="Query"
                  type="text"
                  id="query"
                  value={query}
                />
              </Grid>
            </Grid>
            <Typography align="center">
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.submit}
              >
                Send
              </Button>
            </Typography>
          </form>
          {/* <p>Query : {query}</p> */}
        </div>
        <Box
          border={1}
          borderColor="primary.main"
          className={classes.important}
        >
          <h5>Important : </h5> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Box>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      <Box className={classes.footer}>
        <p>
          Text of the printing and typewriting industry. Loren Ipsum has been
          industry's standard dummytext ever since 1500
        </p>
      </Box>
    </div>
  );
}
