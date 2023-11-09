import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
