import { useContext, useEffect, useState } from "react";
import { context } from "../assets/environ/context";
import LoginPage from "./LoginPage";

export default function Login() {
  const { loginResponse } = useContext(context);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const messages = {};
    if (loginResponse.data != null && loginResponse.data.user != null) {
      messages.CONSUMER_DASHBOARD_OR_SELLER_DASHBOARD = loginResponse.data.user;
    } else if (loginResponse.message != null) {
      messages.errorMsg = loginResponse.message;
    } else {
      console.log(loginResponse);
    }
    setUserData(messages);
  }, [loginResponse]);

  //IF DATA HAS VENDOR NAME, RETURN SELLER DASH BOARD ELSE USER DASH BOARD
  return (
    <>
      {loginResponse.error ? (
        <LoginPage responseData={userData} />
      ) : (
        JSON.stringify(userData)
      )}
    </>
  );
}
