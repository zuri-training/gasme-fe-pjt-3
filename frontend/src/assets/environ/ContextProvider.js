import React, { useCallback, useState } from "react";
import { context } from "./context";
import { baseUrl } from "../url/baseurl";

function ContextProvider({ children }) {
  const [newAccountData, setNewAccountData] = useState({ error: true });
  const [loginResponse, setLoginResponse] = useState({ error: true });

  const postNewAccData = useCallback((newAccountInput) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAccountInput),
    };

    fetch(baseUrl + "/auth/signup", requestOptions)
      .then((response) => response.json())
      .then((data) => setNewAccountData(data));
  }, []);
  
  const postLoginData = useCallback((newAccountInput) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAccountInput),
    };

    fetch(baseUrl + "/auth/login", requestOptions)
      .then((response) => response.json())
      .then((data) => setLoginResponse(data));
  },[]);

  const value = {
    newAccountData,
    postNewAccData,
    loginResponse,
    postLoginData,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}

export default ContextProvider;