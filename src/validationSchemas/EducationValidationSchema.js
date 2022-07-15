import * as yup from "yup";

const alphaNumSignsRegex = /^[a-zA-ZšŠđĐžŽčČćĆ\s0-9-\\._'",]+$/;

let minDate = new Date();
minDate.setDate(minDate.getDate() - 365 * 120);

const schema = yup.object().shape({
    school: yup.string()
        .required("School is required.")
        .matches(alphaNumSignsRegex, "School should be letters, digits or dots, dashes, apostrophes, commas and underscores only."),
    fieldOfStudy: yup.string()
        .required("Field of study is required.")
        .matches(alphaNumSignsRegex, "Field of study should be letters, digits or dots, dashes and underscores only."),
    startDate: yup
        .string()
        .required("Start date is required."),
    endDate: yup
        .string()
        .required("End date is required.")
});

export default schema;