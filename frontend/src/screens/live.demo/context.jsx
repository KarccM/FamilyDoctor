import { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from "../hooks/useLocalStorage";

const DemoContext = createContext()

export default function DemoProvider(props) {



  return <DemoContext.Provider value={{

  }} {...props} />
}

function useDemo() {
  return useContext(DemoContext);
}

export {
  useDemo
}