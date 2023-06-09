import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import {
  removeTokens,
  setAccessToken,
  setRefreshToken,
} from "../Utils/localStorage";

const StateContext = createContext();

const GlobalContext = ({ children }) => {
  const queryClient = useQueryClient();

  const {
    data: currentUser = {},
    isLoading: userLoading,
    refetch: refetchUser,
  } = useQuery(["/account/my-profile/"], {
    refetchOnWindowFocus: false,
    cacheTime: 0,
    retry: false,
  });

  const setUserToken = (access, refresh) => {
    Boolean(access) && setAccessToken(access);
    Boolean(refresh) && setRefreshToken(refresh);
    queryClient.resetQueries();
  };

  const signOut = () => {
    removeTokens();
    queryClient.resetQueries();
  };

  return (
    <StateContext.Provider
      value={{
        // states
        currentUser,
        userLoading,

        // actions
        setUserToken,
        signOut,
        refetchUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default GlobalContext;

export const useGlobalContext = () => useContext(StateContext);
