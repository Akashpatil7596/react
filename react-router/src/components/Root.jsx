import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { ToastContainer } from "react-toastify";

export default function Root() {
  return (
    <div>
      <ToastContainer />

      <Navigation />
      <h1>Root Pages</h1>
      <Outlet />
    </div>
  );
}
