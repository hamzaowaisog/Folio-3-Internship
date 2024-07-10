import {Link} from "react-router-dom";


const menuItems = [
    { key: "1", label: <Link to={"/login"} >Login</Link> },
    { key: "2", label: <Link to={"/cart"}>Cart </Link> },
  ];

  export default menuItems;