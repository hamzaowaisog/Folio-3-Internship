import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const RoleBaseRoute = ({ element:Element , requiredRole, ...rest}) =>{
RoleBaseRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  requiredRole: PropTypes.string.isRequired,
};
    const {isAdmin,isAuthenticated , data} = useSelector(state => state.auth);

    if(!isAuthenticated){
        console.log(isAuthenticated);
        return <Navigate to='/login'/>;
    }
    if(!data && !isAdmin && requiredRole !== 'admin'){
        return <Navigate to='/'/>
    }
    console.log('Rendering element:', Element);
    return <Element {...rest}/>;

}
export default RoleBaseRoute;