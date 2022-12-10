import * as yup from "yup";

// initial input fields
export const initialValues = {
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
export const checkoutSchema = yup.object().shape({
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