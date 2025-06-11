import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrPage } from "../store";
import { useCallback, useEffect } from "react";

export default function ProjectList() {
  const currPage = useSelector((state) => state.topBar.currPage);
  const dispatch = useDispatch();

  useEffect(() => {
    const page = "Projects";
    dispatch(changeCurrPage(page));
  }, []);

  return (
    <>
      <Link to="/project/new">
        <div className="flex gap-3 bg-white border-1 border-dashed border-gray-400 px-5 py-2 rounded-xl justify-center max-w-[1500px] mt-10 ">
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add project
        </div>
      </Link>

      <Link to="/project/detail">
        <div className="flex gap-3 bg-white border-1 border-dashed border-gray-400 px-5 py-2 rounded-xl justify-center max-w-[1500px] mt-10 ">
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Detail
        </div>
      </Link>

      <div className="flex justify-between items-center max-w-[1500px]">
        <span className="text-base  font-base text-violet-800">
          Recent Projects
        </span>
        <span className="px-5 py-2 bg-violet-700  text-white rounded-xl">
          All Projects
        </span>
      </div>

      <div className="flex flex-col gap-5">
        <div className="px-5 py-3 grid grid-cols-[1fr_max-content_max-content_max-content_max-content] gap-5 items-center shadow-lg shadow-gray-300 rounded-xl bg-white max-w-[1500px] ">
          <span className="font-medium text-gray-500">Grid Test</span>
          <span className="text-pink-500 text-sm">20 screens</span>
          <span className="text-green-800 bg-green-200 px-3 py-1 rounded-xl">
            Active
          </span>
          <span>06/06/25 12:30AM</span>
          <span className="align-middle">
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
          </span>
        </div>
        <div className="px-5 py-3 grid grid-cols-[1fr_max-content_max-content_max-content_max-content] gap-5 items-center shadow-gray-300 rounded-xl bg-white max-w-[1500px] ">
          <span className="font-medium text-gray-500">Grid Test</span>
          <span className="text-pink-500 text-sm">15 screens</span>
          <span className="text-green-800 bg-green-200 px-3 py-1 rounded-xl">
            Active
          </span>
          <span>06/06/25 12:30AM</span>
          <span className="align-middle">
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
          </span>
        </div>
        <div className="px-5 py-3 grid grid-cols-[1fr_max-content_max-content_max-content_max-content] gap-5 items-center shadow-gray-300 rounded-xl bg-white max-w-[1500px] ">
          <span className="font-medium text-gray-500">Grid Test</span>
          <span className="text-pink-500 text-sm">19 screens</span>
          <span className="text-green-800 bg-green-200 px-3 py-1 rounded-xl">
            Active
          </span>
          <span>06/06/25 12:30AM</span>
          <span className="align-middle">
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
          </span>
        </div>
      </div>
    </>
  );
}
