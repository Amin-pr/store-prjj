import { createContext, useContext, useReducer } from "react";

const userAuthorContext = createContext();

const initalState = {
  logedin: false,
  formData: [],
  users: [],
  currentUser: [],
  isloading: false,
  loginRes: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "user/login":
      return { ...state, loginRes: null, isLoading: true };

    case "user/logedin":
      return {
        ...state,
        loginRes: action.payload,
        isLoading: false,
        currentUser: action.payload,
      };

    case "user/signup":
      return { ...state, loginRes: null, isLoading: true };
    case "user/signedup":
      return { ...state, loginRes: action.payload, isLoading: false };
    default:
      throw new Error("invalid action");
  }
}

function UserAuthProvider({ children }) {
  const [{ logedin, currentUser, users, formData, isloading }, dispatch] =
    useReducer(reducer, initalState);
 return (
    <userAuthorContext.Provider
      value={{
        isloading,
        logedin,
        currentUser,
        users,
        formData,
        dispatch,
      }}
    >
      {children}
    </userAuthorContext.Provider>
  );
}

function useAuth() {
  const context = useContext(userAuthorContext);
  if (context === undefined)
    throw new Error("useAuth used outside of its provider");
  return context;
}

export { UserAuthProvider, useAuth };
