import * as yup from "yup";

const alphaNumSignsRegex = /^[a-zA-ZšŠđĐžŽčČćĆ\s0-9-\\._'",]+$/;

let minDate = new Date();
minDate.setDate(minDate.getDate() - 365 * 120);

const schema = yup.object().shape({
    title: yup.string()
        .required("Title is required.")
        .matches(alphaNumSignsRegex, "School should be letters, digits or dots, dashes, apostrophes, commas and underscores only."),
    companyName: yup.string()
        .required("Field of study is required.")
        .matches(alphaNumSignsRegex, "Company name should be letters, digits or dots, dashes, apostrophes, commas and underscores only."),
    location: yup.string()
        .matches(alphaNumSignsRegex, "Location should be letters, digits or dots, dashes, apostrophes, commas and underscores only."),
    industry: yup.string()
        .matches(alphaNumSignsRegex, "Industry should be letters, digits or dots, dashes, apostrophes, commas and underscores only."),
    startDate: yup
        .string()
        .required("Start date is required."),
    endDate: yup
        .string()
        .required("End date is required.")
});

export default schema;