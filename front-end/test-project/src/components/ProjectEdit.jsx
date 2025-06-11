import { useDispatch } from "react-redux";
import { changeCurrPage } from "../store";
import React, { useCallback, useEffect, useRef, useState } from "react";

export default function ProjectEdit() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const [screens, setScreens] = useState([
    { name: "Home", url: "/home" },
    { name: "About", url: "/about" },
  ]);

  const [users, setUsers] = useState([
    { user: "john", role: "admin" },
    { user: "jane", role: "viewer" },
  ]);

  useEffect(() => {
    const page = "Projects";
    dispatch(changeCurrPage(page));
  }, [dispatch]);

  const handleAddScreen = useCallback(() => {
    setScreens((prev) => [...prev, { name: "", url: "" }]);
  }, []);

  const handleScreenChange = useCallback((idx, field, value) => {
    setScreens((prev) =>
      prev.map((screen, i) =>
        i === idx ? { ...screen, [field]: value } : screen
      )
    );
  }, []);

  const handleAddUser = useCallback(() => {
    setUsers((prev) => [...prev, { user: "", role: "" }]);
  }, []);

  const handleUserChange = useCallback((idx, field, value) => {
    setUsers((prev) =>
      prev.map((userRow, i) =>
        i === idx ? { ...userRow, [field]: value } : userRow
      )
    );
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (form) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log(data, screens, users);
    }
  };

  return (
    <form
      className="grid grid-cols-1 2xl:grid-cols-2 gap-y-12 gap-x-12"
      onSubmit={handleSave}
      ref={formRef}
    >
      <div className="grid grid-cols-2 items-center justify-center max-w-4xl 2xl:min-w-xl gap-x-16 gap-y-8 bg-white p-8 rounded-xl">
        <h3 className="col-span-2 text-violet-800 text-lg">Project Information</h3>

        <div className="flex flex-col gap-4 items-start">
          <label htmlFor="name" className="font-normal">
            Project Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue="My Sample Project"
            placeholder="Project name"
            className="w-full px-4 py-3 rounded-xl outline-1 outline-gray-300 focus:outline-violet-500 placeholder:text-inherit"
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
            defaultValue="5"
            placeholder="Number of Screens"
            className="w-full px-4 py-3 rounded-xl outline-1 outline-gray-300 focus:outline-violet-500 placeholder:text-inherit"
          />
        </div>

        <div className="flex flex-col gap-4 items-start col-span-2">
          <label htmlFor="description" className="font-normal">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            defaultValue="This is a description of the project."
            className="w-full px-4 py-3 h-24 rounded-xl outline-1 outline-gray-300 focus:outline-violet-500 resize-none placeholder:text-inherit"
            placeholder="Project description"
          ></textarea>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center justify-center max-w-4xl 2xl:min-w-xl gap-x-16 gap-y-8 bg-white p-8 rounded-xl">
        <h3 className="col-span-2 text-violet-800 text-lg">Project Urls</h3>

        <div className="flex flex-col gap-4 items-start">
          <label htmlFor="git-hub-url" className="font-normal">
            Git hub Repository Url
          </label>
          <input
            type="text"
            id="git-hub-url"
            name="git-hub-url"
            defaultValue="https://github.com/sample/project"
            placeholder="Git hub url"
            className="w-full px-4 py-3 rounded-xl outline-1 outline-gray-300 focus:outline-violet-500 placeholder:text-inherit"
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
            defaultValue="https://sampleproject.com"
            placeholder="Project url"
            className="w-full px-4 py-3 rounded-xl outline-1 outline-gray-300 focus:outline-violet-500 placeholder:text-inherit"
          />
        </div>

        <div className="flex flex-col gap-4 items-start relative">
          <label htmlFor="framework" className="font-normal">
            Framework
          </label>
          <select
            id="framework"
            name="framework"
            defaultValue="react"
            className="w-full px-4 py-3 pr-10 rounded-xl outline-1 outline-gray-300 focus:outline-violet-500 bg-white appearance-none placeholder:text-inherit"
          >
            <option value="" disabled>Select framework</option>
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
              <path
                d="M6 8l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center justify-center max-w-4xl 2xl:min-w-xl gap-x-16 gap-y-8 bg-white p-8 rounded-xl self-start">
        <h3 className="col-span-2 text-violet-800 text-lg">Screens</h3>
        <div className="col-span-2 w-full">
          <table className="min-w-full rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-700">No</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Name</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Url</th>
              </tr>
            </thead>
            <tbody>
              {screens.map((screen, idx) => (
                <tr key={idx} className="border-t border-gray-200">
                  <td className="px-4 py-2">{idx + 1}</td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={screen.name}
                      onChange={(e) =>
                        handleScreenChange(idx, "name", e.target.value)
                      }
                      className="w-full py-1 outline-0 focus:border-b-1 placeholder:text-inherit"
                      placeholder="Screen name"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={screen.url}
                      onChange={(e) =>
                        handleScreenChange(idx, "url", e.target.value)
                      }
                      className="w-full py-1 outline-0 focus:border-b-1 placeholder:text-inherit"
                      placeholder="Screen url"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={handleAddScreen}
            className="mt-4 px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700"
          >
            Add Screen
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center justify-center max-w-4xl 2xl:min-w-xl gap-x-16 gap-y-8 bg-white p-8 rounded-xl max-h-fit self-start">
        <h3 className="col-span-2 text-violet-800 text-lg">Users</h3>
        <div className="col-span-2 w-full">
          <table className="min-w-full rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-700">No</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">User</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((userRow, idx) => (
                <tr key={idx} className="border-t border-gray-200">
                  <td className="px-4 py-2">{idx + 1}</td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      className="w-full py-1 outline-0 focus:border-b-1 placeholder:text-inherit"
                      value={userRow.user}
                      onChange={(e) =>
                        handleUserChange(idx, "user", e.target.value)
                      }
                    />
                  </td>
                  <td className="px-4 py-2">
                    <select
                      className="w-full py-1 rounded outline-0 focus:border-b-1 placeholder:text-inherit"
                      value={userRow.role}
                      onChange={(e) =>
                        handleUserChange(idx, "role", e.target.value)
                      }
                    >
                      <option value="" disabled>Select role</option>
                      <option value="viewer">Viewer</option>
                      <option value="admin">Admin</option>
                      <option value="tester">Tester</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={handleAddUser}
            className="mt-4 px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700"
          >
            Add User
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="m mx-8 px-4 py-2 max-w-24 bg-violet-600 text-white rounded hover:bg-violet-700"
      >
        Save
      </button>
    </form>
  );
}
