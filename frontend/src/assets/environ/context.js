import React from "react";

export const context = React.createContext({
  postNewAccData: () => {},
  newAccountData: { error: true },
  setNewAccountData: () => {},
  postLoginData: () => {},
  loginResponse: { error: true },
  setLoginResponse: () => {},
});
