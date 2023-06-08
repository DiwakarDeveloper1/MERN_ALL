import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const StudentContext = createContext();

const studentReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload];
    case "ADD_STUDENTS":
      return [...action.payload];
    default:
      return state;
  }
};

export function StudentContextProvider({ children }) {
  const [students, dispatch] = useReducer(studentReducer, []);

  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
}
