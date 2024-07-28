import * as Yup from "yup";


const SignUpSchema = Yup.object().shape({
  name: Yup.string().min(2,"Too Short!").max(50,"Too Long!").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8,"Password is too short - should be 8 chars minimum.").required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),

});
export default SignUpSchema;