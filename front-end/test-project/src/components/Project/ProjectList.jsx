import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrPage } from "../../store";
import { useEffect } from "react";
import ProjectEdit from "./ProjectEdit";

export default function ProjectList() {
  const currPage = useSelector((state) => state.topBar.currPage);
  const dispatch = useDispatch();

  useEffect(() => {
    const page = "Projects";
    dispatch(changeCurrPage(page));
  }, [dispatch]);

  const projects = [
    {
      name: "Grid Test",
      screens: 20,
      status: "Active",
      lastUpdated: "06/06/25 12:30AM",
    },
    {
      name: "Grid Test",
      screens: 15,
      status: "Active",
      lastUpdated: "06/06/25 12:30AM",
    },
    {
      name: "Grid Test",
      screens: 19,
      status: "Active",
      lastUpdated: "06/06/25 12:30AM",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen py-10">
      <div className="flex justify-between items-center w-full max-w-[1200px] mt-4 mb-8 px-2">
        <span className="text-2xl font-light text-violet-900 tracking-tight">
          Recent Projects
        </span>
        <div className="flex gap-3">
          <Link to="/project/new">
            <button className="flex gap-2 items-center bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white px-5 py-2.5 rounded-2xl shadow-lg transition font-light text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add Project
            </button>
          </Link>
          <span className="px-5 py-2.5 bg-white text-violet-700 rounded-2xl font-light border border-violet-200 shadow-sm hover:bg-violet-50 transition cursor-pointer">
            All Projects
          </span>
        </div>
      </div>

      <div className="w-full max-w-[1200px] bg-white/80 backdrop-blur rounded-3xl shadow-xs overflow-x-auto border border-violet-100">
        {/* Table Header */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1.5fr_0.5fr] gap-6 px-8 py-4 border-b border-violet-100 bg-gradient-to-r from-violet-100/80 to-fuchsia-100/60 rounded-t-3xl text-violet-900 font-light text-base tracking-wide">
          <span>Project</span>
          <span>Screens</span>
          <span>Status</span>
          <span>Last Updated</span>
          <span className="text-center">Actions</span>
        </div>
        {/* Table Rows */}
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[2fr_1fr_1fr_1.5fr_0.5fr] gap-6 px-8 py-5 items-center border-b last:border-b-0 border-violet-50 hover:bg-violet-50/60 transition font-light text-gray-800 cursor-pointer group"
          >
            <span className="font-light text-violet-900 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 mr-2"></span>
              {project.name}
            </span>
            <span className="text-fuchsia-600 text-base font-light px-4">
              {project.screens}
            </span>
            <span className="text-green-800 bg-green-100/80 px-4 py-1 rounded-2xl text-sm font-light w-max shadow-sm">
              {project.status}
            </span>
            <span className="text-gray-500 text-sm">{project.lastUpdated}</span>
            <Link to="/project/detail">
              <span className="flex justify-center">
                <button
                  className="hover:bg-violet-100 p-2 rounded-full transition group-hover:scale-110"
                  title="More actions"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                    />
                  </svg>
                </button>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
