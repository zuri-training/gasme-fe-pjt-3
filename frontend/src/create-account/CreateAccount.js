import { useContext, useEffect, useState } from "react";
import CreateAccountPage from "./CreateAccountPage";
import { context } from "../assets/environ/context";

export default function CreateAccount() {
  const { newAccountData } = useContext(context);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const messages = {};
    if (newAccountData.data != null && newAccountData.data.user != null) {
      messages.CONSUMER_DASHBOARD = newAccountData.data.user;
    } else if (newAccountData.data != null) {
      newAccountData.data.errors.forEach((element) => {
        messages[element.param] = element.msg;
      });
    } else if (newAccountData.message != null) {
      messages["email"] = newAccountData.message;
    } else {
      console.log(newAccountData);
    }
    setUserData(messages);
  }, [newAccountData]);

  return (
    <>
      {newAccountData.error ? (
        <CreateAccountPage responseData={userData} />
      ) : (
        JSON.stringify(userData)
      )}
    </>
  );
}
