import { Outlet } from "react-router-dom"
import Header from "./components/Header"

const App = () => {
  return (
    <div className="text-red-400">
      <Header />
      <Outlet />
    </div>
  )
}
export default App