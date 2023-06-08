import React, { useContext, useEffect } from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import axios from "axios";
import { StudentContext } from "../context/StudentContext";
const Header = () => {
  const { dispatch } = useContext(StudentContext);
  useEffect(() => {
    axios.get("http://localhost:3001/students").then((res) => {
      dispatch({
        type: "ADD_STUDENTS",
        payload: res.data,
      });
    });
  }, []);
  return (
    <>
      <AppBar
        sx={{
          position: "relative",
        }}
      >
        <Container>
          <Toolbar
            sx={{
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <Typography variant='h6'>Student App</Typography>
            <Box display={"flex"} gap={3}>
              <Link to='/'>Show Students</Link>
              <Link to='/add-students'>Add Student</Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
