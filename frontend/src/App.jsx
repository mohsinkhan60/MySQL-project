import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="text-red-400">
      <Header />
      <div className="w-full lg:w-[80%] mx-auto text-white">
        <Outlet />
      </div>
    </div>
  );
};
export default App;
