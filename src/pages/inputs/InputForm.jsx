import { checkoutSchema, initialValues } from "../../constants/inputFormValues";
import { inputFormFields } from '../../constants/inputFormFields';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button, TextField } from "@mui/material";
import { Header } from "../../components";
import { Formik } from "formik";



const InputForm = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

  // user click | data send to server OR do some action...
  const handleFormSubmit = (values, onSubmitProps) => {

    // 🧹🧹🧹 Form Fields are Reset by Formik lib...
    onSubmitProps.resetForm()

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