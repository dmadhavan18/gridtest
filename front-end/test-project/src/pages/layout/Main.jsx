import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ProjectList from "../../components/Project/ProjectList";
import NewProject from "../../components/Project/NewProject";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="bg-[#fafafa] flex font-lexend font-light font-lexend text-sm min-w-fit">
      <Sidebar></Sidebar>

      <div className="flex-1 py-5 px-8  text-gray-500 min-w-fit flex flex-col gap-8 max-h-dvh overflow-scroll">
        <Topbar></Topbar>
        <Outlet />
      </div>
    </div>
  );
}
