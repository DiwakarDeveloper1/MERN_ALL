import React, { useContext } from "react";
import { Paper, Typography, Grid, Container } from "@mui/material";
import { Formik } from "formik";
import TextInput from "../components/TextInput";
import moment from "moment";
import RadioButton from "../components/RadioButton";
import SubmitButton from "../components/SubmitButton";
import { StudentContext } from "../context/StudentContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
const AddStudent = () => {
  const student = useContext(StudentContext);
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Paper
          sx={{
            p: 2,
            maxWidth: "md",
            mt: 2,
            mx: "auto",
          }}
        >
          <Typography variant='h4'>Add Student</Typography>
          <Formik
            initialValues={{
              name: "",
              address: "",
              mobile: "",
              dob: moment().format("YYYY-MM-DD"),
              gender: "M",
            }}
            onSubmit={(values) => {
              axios.post("http://localhost:3001/students", values);
              student.dispatch({
                type: "ADD_STUDENT",
                payload: { ...values },
              });
              navigate("/");
            }}
            validationSchema={yup.object().shape({
              name: yup.string().required("Name is required"),
              address: yup
                .string()
                .required("Address is required")
                .min(3, "Address is too short"),
              mobile: yup
                .string()
                .required("Mobile is required")
                .matches(
                  /^[6-9]{1}[0-9]{9}$/,
                  "Please enter valid mobile number"
                )
                .max(10, "Mobile number should be 10 digits"),
              dob: yup.string().required("Date of birth is required"),
            })}
          >
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextInput name='name' label='Student Name' />
              </Grid>
              <Grid item md={6}>
                <TextInput name='dob' label='Student DOB' type='date' />
              </Grid>
              <Grid item md={6}>
                <RadioButton name='gender' />
              </Grid>
              <Grid item md={6}>
                <TextInput name='address' label='Address' />
              </Grid>
              <Grid item md={6}>
                <TextInput
                  name='mobile'
                  label='Mobile No'
                  inputProps={{
                    maxLength: 10,
                  }}
                />
              </Grid>
              <Grid item md={12}>
                <SubmitButton>Add Student</SubmitButton>
              </Grid>
            </Grid>
          </Formik>
        </Paper>
      </Container>
    </>
  );
};

export default AddStudent;
