import React from "react";

export const context = React.createContext({
  postNewAccData: () => {},
  newAccountData: { error: true },
  setNewAccountData: () => { },
  // login customer
  postLoginData: () => {},
  loginResponse: { error: true },
  setLoginResponse: () => { },
  //login seller
  postLoginSellerData: () => {},
  loginSellerResponse: { error: true },
  setLoginSellerResponse: () => { },
});
