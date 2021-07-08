import { useContext, useEffect, useState } from "react";
import { context } from "../assets/environ/context";
import LoginPage from "./LoginPage";
import { Redirect } from "react-router-dom";

export default function Login() {
  const { loginResponse } = useContext(context);
  const [userData, setUserData] = useState({});
  const localData = JSON.parse(localStorage.getItem("login"));

  useEffect(() => {
    const messages = {};
    if (loginResponse.data != null && loginResponse.data.user != null) {
      messages.data = loginResponse.data.user;
    } else if (loginResponse.message != null) {
      messages.errorMsg = loginResponse.message;
    } else {
      console.log(loginResponse);
    }
    setUserData(messages);
  }, [loginResponse]);

  console.log(userData)

  //IF DATA HAS VENDOR NAME, RETURN SELLER DASH BOARD ELSE USER DASH BOARD
  return (
    <>
      {localData == null || localData.error ? (
        <LoginPage responseData={userData} />
      ) : (
        <Redirect to={{ pathname: "/gasme-fe-pjt-3/customer-dashboard" }} />
      )}
    </>
  );
}
