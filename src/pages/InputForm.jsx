import useMediaQuery from "@mui/material/useMediaQuery";
import { inputFormFields } from '../constants/inputFormFields';
import { Box, Button, TextField } from "@mui/material";
import { Header } from "../components";
import { Formik } from "formik";
import * as yup from "yup";


const InputForm = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

  // initial input fields
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };

  // phone number input validation checking from string by regex pattern...
  const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


  // user input validation logic for each input field 
  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Invalid Email").required("Required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    address1: yup.string().required("Required"),
    address2: yup.string().required("Required"),
  });


  // user click | data send to server OR do some action...
  const handleFormSubmit = (values) => {
    console.log(values)
    alert(
      Object.keys(values).map(key =>
        `\n${key.charAt().toUpperCase() + key.slice(1)} : ${values[key]}`
      )
    )
  }


  return (
    <Box m="20px">

      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {
          ({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                {
                  inputFormFields.map(({ label, name, type }) =>
                    <TextField
                      key={name}
                      fullWidth
                      variant="filled"
                      type={type}
                      label={label}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values[name]}
                      name={name}
                      error={!!touched[name] && !!errors[name]}
                      helperText={touched[name] && errors[name]}
                      sx={(name === 'firstName' || name === 'lastName')
                        ? { gridColumn: "span 2" }
                        : { gridColumn: "span 4" }
                      }
                    />
                  )
                }
              </Box>

              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Create New User
                </Button>
              </Box>

            </form>
          )
        }
      </Formik>
    </Box>
  );
};

export default InputForm;