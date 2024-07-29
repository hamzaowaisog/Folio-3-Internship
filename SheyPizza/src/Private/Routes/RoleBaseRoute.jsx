import PropTypes from "prop-types";
import { Navigate } from "react-router-dom"; // Import the Navigate component
import useRoleBasedAccess from "../../Functionality/useRoleBasedAcces";

const RoleBaseRoute = ({ element: Element, requiredRole, ...rest }) => {
  RoleBaseRoute.propTypes = {
    element: PropTypes.elementType.isRequired,
    requiredRole: PropTypes.string.isRequired,
  };
  const redirect = useRoleBasedAccess(requiredRole);

  if (redirect) {
    return <Navigate to={redirect}/>;
  }
  console.log("Rendering element:", Element);
  return <Element {...rest} />;
};
export default RoleBaseRoute;
