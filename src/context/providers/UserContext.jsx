import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
// contexApi
import { userContext } from "../userContext";
// actions and Services
import { addUser } from "../../store/actions/user";
import { loginUser, registerUser } from "../../services/userServices";
// utils
import SimpleReactValidator from "simple-react-validator";
import { decodeToken } from "../../utils/decodeToken";
import { errorMessage, successMessage } from "../../utils/messageToast";

const UserContext = props => {
  // states
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [policy, setPolicy] = useState("");
  //   dispatch
  const dispatch = useDispatch();
  // validator inputs
  const [, forceUpdate] = useState();
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "تکمیل این قسمت الزامی است",
        min: "حداقل هشت کارکتر وارد کنید",
        email: "ایمیل وارد شده صحیح نیست",
      },
    })
  );
  // reset States
  const resetStates = () => {
    setFirstname("");
    setLastname("");
    setRepeatPass("");
    setPolicy();
  };
  // handels ....................................
  const handleRegister = async event => {
    // preventDefualt none
    event.preventDefault();
    // get user values
    const user = {
      fullname: `${firstname} ${lastname}`,
      email,
      password,
    };
    // use tryCatch with asyncAwait for create account
    try {
      if (repeatPass === password && validator.current.allValid()) {
        // loadingBar
        const { status } = await registerUser(user);
        if (status === 201) {
          successMessage("حساب کاربری شما به درستی ساخته شد");
          // push user to loginPage
          props.history.push("/login");
        } else {
          if (status === 401)
            errorMessage("قبلا با ایمیل مذکور ثبت نام کردید !");
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      errorMessage("حساب شما ساخته نشد , مجدد تلاش کنید");
      console.log(ex);
    }
  };
  const handleLogin = async event => {
    // preventDefualt none
    event.preventDefault();
    // get user values
    const user = {
      email,
      password,
    };
    try {
      if (validator.current.allValid()) {
        // loadingBar
        const { status, data } = await loginUser(user);
        if (status === 200) {
          successMessage(`خوش برگشتی`);
          // set user token
          localStorage.setItem("token", data.token);
          dispatch(addUser(decodeToken(data.token).payload.user));
          // reset user data
          resetStates();
          // push user in HomePage
          props.history.push("/");
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      errorMessage("کلمه عبور یا ایمیل شما نادرست است");
      console.log(ex);
    }
  };
  // return .....................................
  return (
    <userContext.Provider
      value={{
        firstname,
        setFirstname,
        lastname,
        setLastname,
        email,
        setEmail,
        password,
        setPassword,
        repeatPass,
        setRepeatPass,
        policy,
        setPolicy,
        handleLogin,
        handleRegister,
        validator,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};
export default withRouter(UserContext);
