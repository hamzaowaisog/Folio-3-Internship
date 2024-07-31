import * as YUP from 'yup';

const SignInSchema = YUP.object().shape({
    email: YUP.string().email("Invalid Email"),
    password: YUP.string().min(8 , "Password Too Short")
})
export default SignInSchema;