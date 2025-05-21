import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { MainContextProvider } from "./context/MainContext";

const App = () => {
  return (
    <MainContextProvider >
      <Header />
      <div className="w-full lg:w-[80%] mx-auto text-white">
        <Outlet />
      </div>
    </MainContextProvider>
  );
};
export default App;
