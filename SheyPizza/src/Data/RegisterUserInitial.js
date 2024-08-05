
const RegisterUserInitial = () =>{
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "user",
      };

    return{
        initialValues,

    }
}
export default RegisterUserInitial;