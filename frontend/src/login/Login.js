import { useContext, useEffect, useState } from "react";
import { context } from "../assets/environ/context";
import LoginPage from "./LoginPage";
import ConsumerDashboard from "../consumer-dashboard/ConsumerDashboard";

export default function Login() {
  const { loginResponse } = useContext(context);
  const [userData, setUserData] = useState({});

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

  //IF DATA HAS VENDOR NAME, RETURN SELLER DASH BOARD ELSE USER DASH BOARD
  return (
    <>
      {loginResponse.error ? (
        <LoginPage responseData={userData} />
      ) : (
        <ConsumerDashboard responseData={userData} />
      )}
    </>
  );
}
