import { useContext, useEffect, useState } from "react";
import { context } from "../assets/environ/context";
import LoginSellerPage from "./LoginSellerPage";
import { Redirect } from "react-router-dom";

export default function Login() {
  const { loginSellerResponse } = useContext(context);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const messages = {};
    if (
      loginSellerResponse.data != null &&
      loginSellerResponse.data.user != null &&
      loginSellerResponse.data.user.vendorId != null
    ) {
      messages.data = loginSellerResponse.data.user;
    } else if (
      loginSellerResponse.message != null &&
      loginSellerResponse.error
    ) {
      messages.errorMsg = loginSellerResponse.message;
    } else if (
      loginSellerResponse.data != null &&
      loginSellerResponse.data.user.vendorId == null
    ) {
      messages.errorMsg =
        "Please login as a customer to create a seller's account.";
    } else {
      console.log(loginSellerResponse);
    }
    setUserData(messages);
  }, [loginSellerResponse]);

  return (
    <>
      {loginSellerResponse.error ||
      loginSellerResponse.data.user.vendorId == null ? (
        <LoginSellerPage responseData={userData} />
      ) : (
        <Redirect to={{ pathname: "/gasme-fe-pjt-3/seller-dashboard" }} />
      )}
    </>
  );
}
