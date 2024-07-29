import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/authslice";

const Login = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.auth.data);

    const checkLogin = (userdata)=>{
        for(let user of users){
            if(user.email === userdata.email && user.password === userdata.password && user.role === 'admin'){
                dispatch(authActions.login({auth: true , admin:true}));
                return true;
            }
        }
        return false;
    }
    return {
        checkLogin,
    }

};

export default Login;
