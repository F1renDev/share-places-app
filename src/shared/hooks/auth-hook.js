import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    //Setting the new expiration date to the current time + 1 hour
    //or getting the expiration date if it was set before
    const tokenExpirationInfo =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationInfo);
    //Storing the user id and that user's token in localStorage
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        //toISOString() ensures that no data gets lost when this date is stringified
        expiration: tokenExpirationInfo.toISOString()
      })
    );
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  //If there is a token and some time left to be authenticated the timer is set to log out
  //after the remaining number of minutes (lifetime = 1h)
  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  //Checking if there is a logged in user in the localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    //If there is some data and that data include a token and the expirationd date
    //is in the future the user can be logged in
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return { token, login, logout, userId };
};
