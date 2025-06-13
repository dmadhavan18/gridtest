import { useDispatch } from "react-redux";
import { changeCurrPage } from "../store";
import React, { useEffect } from "react";
import ProjectEdit from "./ProjectEdit";
import { Link } from "react-router-dom";

export default function DetailProject() {
  const dispatch = useDispatch();

  useEffect(() => {
    const page = "Projects";
    dispatch(changeCurrPage(page));
  }, [dispatch]);

  const project = {
    name: "Inventory Tracker",
    screensNo: "5",
    description: "A project to manage warehouse inventories and suppliers.",
    gitHubUrl: "https://github.com/sample/inventory-tracker",
    projectUrl: "https://inventory.example.com",
    framework: "react",
    screens: [
      { name: "Dashboard", url: "/dashboard" },
      { name: "Stock", url: "/stock" },
    ],
    users: [
      { user: "alice", role: "admin" },
      { user: "bob", role: "viewer" },
    ],
  };

  const textStyle = "px-4 py-3 rounded-xl";

 

  return (
    <div className="relative">
      <form className="grid grid-cols-1 2xl:grid-cols-2 gap-y-12 gap-x-12">
        <div className="grid grid-cols-2 items-center justify-center max-w-4xl 2xl:max-w-full  gap-x-16 gap-y-8 bg-white p-8 rounded-xl">
          <h3 className="col-span-2 text-violet-800 text-lg">
            Project Information
          </h3>

          <div className="flex flex-col gap-4 items-start">
            <label className="font-normal">Project Name</label>
            <p className={textStyle}>{project.name}</p>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <label className="font-normal">No. of screens</label>
            <p className={textStyle}>{project.screensNo}</p>
          </div>

          <div className="flex flex-col gap-4 items-start col-span-2">
            <label className="font-normal">Description</label>
            <p className={textStyle}>{project.description}</p>
          </div>
        </div> 

        <div className="grid grid-cols-2 items-center justify-center max-w-4xl 2xl:max-w-full gap-x-16 gap-y-8 bg-white p-8 rounded-xl">
          <h3 className="col-span-2 text-violet-800 text-lg">Project Urls</h3>

          <div className="flex flex-col gap-4 items-start">
            <label className="font-normal">Git hub Repository Url</label>
            <p className="px-4 py-3 rounded-xl w-48 overflow-visible">{project.gitHubUrl}</p>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <label className="font-normal">Project url</label>
            <p className="px-4 py-3 rounded-xl w-48 overflow-visilble">{project.projectUrl}</p>
          </div>

          <div className="flex flex-col gap-4 items-start col-span-2">
            <label className="font-normal">Framework</label>
            <p className="px-4 py-3 rounded-xl">{project.framework}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center justify-center max-w-4xl 2xl:max-w-full  gap-x-16 gap-y-8 bg-white p-8 rounded-xl self-start">
          <h3 className="col-span-2 text-violet-800 text-lg">Screens</h3>

          <div className="col-span-2 w-full">
            <table className="w-full rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-700">No</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-700">Name</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-700">Url</th>
                </tr>
              </thead>
              <tbody>
                {project.screens.map((screen, idx) => (
                  <tr key={idx} className="border-t border-gray-200">
                    <td className="px-4 py-2">{idx + 1}</td>
                    <td className="px-4 py-2">{screen.name}</td>
                    <td className="px-4 py-2">{screen.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center justify-center max-w-4xl 2xl:max-w-full  gap-x-16 gap-y-8 bg-white p-8 rounded-xl max-h-fit self-start">
          <h3 className="col-span-2 text-violet-800 text-lg">Users</h3>

          <div className="col-span-2 w-full">
            <table className="w-full rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-700">No</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-700 ">User</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-700">Role</th>
                </tr>
              </thead>
              <tbody>
                {project.users.map((user, idx) => (
                  <tr key={idx} className="border-t border-gray-200">
                    <td className="px-4 py-2 ">{idx + 1}</td>
                    <td className="px-4 py-2">{user.user}</td>
                    <td className="px-4 py-2 ">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </form>
      {/* Fixed action buttons */}
      <div className="fixed top-26 right-8 flex gap-4 z-50">
        
        <Link to="/project/edit">
          <button className="bg-violet-600 text-white px-4 py-2 rounded-md shadow">
            Edit Project
          </button>
        </Link>
      </div>
    </div>
  );
}
