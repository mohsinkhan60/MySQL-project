/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { AxiosClient } from "../config/axiosClient";

export const MainContext = createContext({
  roses: [],
  fatchAllRoses: () => {},
});

export const useMainConntext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
  const [roses, setRoses] = useState([]);

  const fatchAllRoses = async () => {
    try {
      const response = await AxiosClient.get("/rose/get-roses");
      const data = response.data;
      // console.log(data);
      setRoses(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fatchAllRoses();
  });

  return (
    <MainContext.Provider value={{ roses, fatchAllRoses }}>
      {children}
    </MainContext.Provider>
  );
};
