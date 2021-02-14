import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../../actions/user";

const Logout = ({ history }) => {
  const dispatch = useDispatch();
  // logout
  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    history.push("/");
    // history.replace("/");
  }, []);
  // return null ........................................
  return null;
};
export default Logout;
