import { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext()

export default function AuthProvider(props) {
  const [isAuthed, setIsAuthed] = useState(false);
  function getUserId() {
    let { readFromLocalStorage, writeOnLocalStorage } = useLocalStorage();
    let userId = readFromLocalStorage('userId');
    if (!userId) {
      userId = uuidv4();
      writeOnLocalStorage('userId', userId);
    }
    setIsAuthed(true);
    return userId;
  }

  return <AuthContext.Provider value={{
    getUserId,
    isAuthed,
  }} {...props} />
}

function useAuth() {
  return useContext(AuthContext);
}

export {
  useAuth
}