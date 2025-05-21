/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { AxiosClient } from "../config/axiosClient";
export const MainContext = createContext({
  roses: [],
  fetchAllRose: () => {}, // <-- fix name here
});

export const useMainConntext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
  const [roses, setRoses] = useState([]);

  const fetchAllRose = async () => { // <-- fix name here
    try {
      const response = await AxiosClient.get("/rose/get-roses");
      const data = response.data;
      setRoses(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllRose();
  }, []);

  return (
    <MainContext.Provider value={{ roses, fetchAllRose }}> {/* fix name here */}
      {children}
    </MainContext.Provider>
  );
};