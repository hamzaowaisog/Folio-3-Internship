import * as YUP from 'yup';

const SignInSchema = YUP.object().shape({
    email: YUP.string().email("Invalid Email").required("Email is required"),
    password: YUP.string().required().min(8 , "Password Too Short")
})
export default SignInSchema;