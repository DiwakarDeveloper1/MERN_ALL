import React from "react";
import { useFormikContext } from "formik";
import { Button } from "@mui/material";
const SubmitButton = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();
  const handleClick = (e) => {
    e.preventDefault();
    submitForm();
  };
  const config = {
    variant: "contained",
    fullWidth: true,
    ...otherProps,
    onClick: handleClick,
  };
  return (
    <Button
      sx={{
        boxShadow: "none",
        borderRadius: "5px",
        py: 2,
      }}
      {...config}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
