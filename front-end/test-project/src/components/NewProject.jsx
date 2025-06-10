import { useSelector, useDispatch } from "react-redux";
import { changeCurrPage } from "../store";
import { useCallback, useEffect } from "react";

export default function NewProject() {
  const currPage = useSelector((state) => state.topBar.currPage);
  const dispatch = useDispatch();

  useEffect(() => {
    const page = "Projects";
    dispatch(changeCurrPage(page));
  }, []);

  return (
    <>
      <div className="flex justify-between items-center max-w-[1500px] mt-6">
        <span className="text-base  font-base text-violet-800">
          New Project
        </span>
      </div>

      <div className="max-w-[1500px] grid grid-cols-[max-content_1fr] gap-16">
        <span>Name</span>
        <input type="text" className="max-w-lg" />
      </div>
    </>
  );
}
