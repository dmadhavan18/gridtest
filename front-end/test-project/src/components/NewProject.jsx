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
      <form className="grid grid-cols-1 items-center justify-center gap-y-12 ">
        <div className="grid grid-cols-2 items-center justify-center max-w-4xl gap-x-16 gap-y-8 bg-white p-8 rounded-xl">
          <h3 className="col-span-2 text-violet-800 text-lg">
            Project Information
          </h3>

          <div className="flex flex-col gap-4 items-start">
            <label htmlFor="name" className="font-normal">
              Project Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Project name"
              className="w-full px-4 py-3 rounded-xl outline-1 outline-gray-300 focus:outline-violet-500"
            />
          </div>

          <div className="flex flex-col gap-4 items-start">
            <label htmlFor="screens-no" className="font-normal">
              No. of screens
            </label>

            <input
              type="text"
              id="screens-no"
              name="screens-no"
              placeholder="Number of Screens"
              className="w-full px-4 py-3 rounded-xl outline-1 outline-gray-300 focus:outline-violet-500"
            />
          </div>

          <div className="flex flex-col gap-4 items-start col-span-2">
            <label htmlFor="Description" className="font-normal">
              Description
            </label>

            <textarea
              name="description"
              id="description"
              className="w-full px-4 py-3 h-24 rounded-xl outline-1 outline-gray-300 focus:outline-violet-500 resize-none"
              placeholder="Project description"
            ></textarea>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center justify-center max-w-4xl gap-x-16 gap-y-8 bg-white p-8 rounded-xl">
          <h3 className="col-span-2 text-violet-800 text-lg">Project Urls</h3>

          <div className="flex flex-col gap-4 items-start">
            <label htmlFor="git-hub-url" className="font-normal">
              Git hub Repository Url
            </label>
            <input
              type="text"
              id="git-hub-url"
              name="git-hub-url"
              placeholder="Git hub url"
              className="w-full px-4 py-3 rounded-xl outline-1 outline-gray-300 focus:outline-violet-500"
            />
          </div>

          <div className="flex flex-col gap-4 items-start">
            <label htmlFor="project-url" className="font-normal">
              Project url
            </label>
            <input
              type="text"
              id="project-url"
              name="project-url"
              placeholder="Project url"
              className="w-full px-4 py-3 rounded-xl outline-1 outline-gray-300 focus:outline-violet-500"
            />
          </div>

          <div className="flex flex-col gap-4 items-start relative">
            <label htmlFor="framework" className="font-normal">
              Framework
            </label>
            <div className="relative w-full">
              <select
                id="framework"
                name="framework"
                className="w-full px-4 py-3 pr-10 rounded-xl outline-1 outline-gray-300 focus:outline-violet-500 bg-white appearance-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select framework
                </option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
                <option value="svelte">Svelte</option>
                <option value="nextjs">Next.js</option>
                <option value="nuxtjs">Nuxt.js</option>
                <option value="other">Other</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          
          
          </div>




        </div>


        <div className="grid grid-cols-2 items-center justify-center max-w-4xl gap-x-16 gap-y-8 bg-white p-8 rounded-xl">
          <h3 className="col-span-2 text-violet-800 text-lg">Screens</h3>

          

        



        </div>


      </form>
    </>
  );
}
