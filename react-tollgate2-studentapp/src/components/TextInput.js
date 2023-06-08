import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const TextInput = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const config = {
    ...field,
    ...otherProps,

    variant: "outlined",
    fullWidth: true,
  };
  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }
  return (
    <>
      <TextField {...config} />
    </>
  );
};

export default TextInput;
