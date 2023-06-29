import { useEffect, createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
  user: {
    _id: "644fa8ba3fc7c29abcb76267",
    username: "Babu",
    email: "babu@gmail.com",
    password: "$2b$10$0V3Fwz6gDxKaR.5N26Irp.5bHQCJalgwQ9Mt7g0.XS2bWRUeQHK.m",

    profilePicture: "",

    coverPicture: "",
    followers: ["644fa876c948ffdf703618bc"],
    followings: ["644fa876c948ffdf703618bc"],
    isAdmin: false,

    createdAt: "2023-05-01T11:55:38.498+00:00",
    updatedAt: "2023-05-13T03:15:17.604+00:00",
    profilePicture: "profile/1.png",
    desc: "Hey i'm babu bro frontend Jr.Developer",

    from: "Nepal",
    city: "Kathmandu",

    relationship: 3,
  },
  // user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
