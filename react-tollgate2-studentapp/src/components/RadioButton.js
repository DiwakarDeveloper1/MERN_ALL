import { FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useField } from "formik";
const RadioButton = ({ name, label, ...otherProps }) => {
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
      <FormLabel>{"Gender"}</FormLabel>
      <RadioGroup
        sx={{
          flexDirection: "row",
        }}
        {...config}
      >
        <FormControlLabel control={<Radio />} label='Male' value={"M"} />
        <FormControlLabel control={<Radio />} label='Female' value={"F"} />
      </RadioGroup>
    </>
  );
};

export default RadioButton;
