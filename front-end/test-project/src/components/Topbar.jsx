import { useSelector, useDispatch } from "react-redux";
import { changeCurrPage } from "../store";
import { useEffect } from "react";

export default function Topbar() {
  const currPage = useSelector((state) => state.topBar.currPage);
  const dispatch = useDispatch();

  useEffect(() => {
    const page = "Dashboard"; 
    dispatch(changeCurrPage(page));

  }, [dispatch]);

  return (
    <div className="flex items-center gap-10">
      <h1 className="text-xl">{currPage}</h1>

      <div className="bg-white px-5 py-3  mx-auto flex-1 max-w-1/2 rounded-xl outline-1 outline-violet-400 flex items-center gap-3 hover:shadow-violet-200 hover:shadow-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search Grid Test"
          className="outline-0 flex-1"
        />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 ml-auto"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
        />
      </svg>

      <span className="rounded-[50%]  w-10 h-10 bg-violet-700 text-white font-light  flex items-center justify-center text-xl ">
        A
      </span>
    </div>
  );
}

 