import * as yup from "yup";

const nameRegex = /^[a-zA-ZšŠđĐžŽčČćĆ ]+$/;
const phoneRegex = /^([0-9]{9,10})$/;
const usernameRegex = /^[a-zA-Z0-9_.]+$/;
const mediumPasswordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{10,})/;

const schema = yup.object().shape({
    firstName: 
        yup.string()
        .required("First name is required.")
        .matches(nameRegex, "First name should be letters only."),
    lastName: 
        yup.string()
        .required("Last name is required.")
        .matches(nameRegex, "Last name should be letters only."),
    email: 
        yup.string()
        .email("Invalid e-mail address.")
        .required("Email is required."),
    phoneNumber: 
        yup.string()
        .required("Phone number is required.")
        .matches(phoneRegex, "Invalid phone number (write only digits)."),
    gender: 
        yup.string()
        .required("Gender is required."),
    dateOfBirth: 
        yup.string()
        .required("Date of birth is required."),
    biography: 
        yup.string()
        .max(256, "Maximum number of characters is 256.")
        .required("Short biography is required."),
    username: 
        yup.string()
        .required("Username is required.")
        .min(6, "Minimum number of characters is 6.")
        .matches(usernameRegex, "Possible characters: letters, digits, dot and underscore."),
    password:  
        yup.string()
        .required("Password is required.")
        .matches(mediumPasswordRegex, "Password is too weak.")
        .matches(strongPasswordRegex, "Password has medium strength."),
    confirmPassword: 
        yup.string()
        .oneOf([yup.ref("password")], "Passwords do not match.")
        .required("Please confirm your password."),
    isPrivate: 
        yup.boolean()
});

export default schema;