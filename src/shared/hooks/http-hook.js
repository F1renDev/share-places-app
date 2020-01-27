import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequest = useRef([]);

  //Wrapped in useCallback so that the function is never recreated when the component rerenders
  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequest.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method: method,
          body: body,
          headers: headers,
          signal: httpAbortCtrl.signal
        });

        const responseData = await response.json();
        // If not response.ok, than we have a 500-ish or 400-ish response code, but not an error
        if (!response.ok) {
          throw new Error(responseData.message);
        }

        return responseData;
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    },
    //useCallback has no dependncies, so [] is passed
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    //Used as a cleanup function before the next time useEffect runs again
    //or also when the component using this custom hook unmounts
    return () => {
      activeHttpRequest.current.forEach(abortCtrl => abortCtrl.abort());
    };
  }, []);

  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
    clearError: clearError
  };
};
