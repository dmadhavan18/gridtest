import React, { useState } from "react";

// Example data structure
const projectData = [
  {
    id: "screen1",
    name: "Login Screen",
    children: [
      {
        id: "screen1-link1",
        name: "Forgot Password",
        children: [],
        testCases: [
          { id: "tc3", name: "Reset link sent", status: "passed" },
          { id: "tc4", name: "Invalid email", status: "failed" },
        ],
      },
    ],
    testCases: [
      { id: "tc1", name: "Valid login", status: "passed" },
      { id: "tc2", name: "Invalid login", status: "failed" },
    ],
  },
  {
    id: "screen2",
    name: "Dashboard",
    children: [
      {
        id: "screen2-link1",
        name: "Profile",
        children: [],
        testCases: [
          { id: "tc5", name: "Edit profile", status: "passed" },
        ],
      },
    ],
    testCases: [
      { id: "tc6", name: "Load widgets", status: "passed" },
    ],
  },
];

// Sidebar tree view
function ScreenTree({ nodes, onSelect, selectedId }) {
  const [open, setOpen] = useState({});

  const toggle = (id) => setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <ul className="list-none pl-4">
      {nodes.map((node) => (
        <li key={node.id}>
          <div
            className={`flex items-center rounded-md px-2 py-1 cursor-pointer transition-colors
              ${selectedId === node.id
                ? "bg-violet-100 text-violet-700 font-semibold"
                : "hover:bg-violet-50"
              }`}
            onClick={() => onSelect(node)}
          >
            {node.children.length > 0 && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(node.id);
                }}
                className="mr-2 text-xs select-none text-violet-500"
              >
                {open[node.id] ? "▼" : "▶"}
              </span>
            )}
            <span>{node.name}</span>
          </div>
          {node.children.length > 0 && open[node.id] && (
            <ScreenTree
              nodes={node.children}
              onSelect={onSelect}
              selectedId={selectedId}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

// Test case table
function TestCaseTable({ testCases }) {
  if (!testCases || testCases.length === 0) {
    return <div className="text-gray-400 italic">No test cases found.</div>;
  }
  return (
    <div className="overflow-x-auto rounded-lg shadow border border-violet-100 bg-white">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-violet-50">
            <th className="text-left px-4 py-2 font-semibold text-violet-700">Test Case</th>
            <th className="text-left px-4 py-2 font-semibold text-violet-700">Status</th>
          </tr>
        </thead>
        <tbody>
          {testCases.map((tc) => (
            <tr key={tc.id} className="border-t border-violet-50 hover:bg-violet-50 transition-colors">
              <td className="px-4 py-2">{tc.name}</td>
              <td className="px-4 py-2">
                <span
                  className={`font-bold ${
                    tc.status === "passed"
                      ? "text-green-600 bg-green-50 px-2 py-1 rounded"
                      : "text-red-600 bg-red-50 px-2 py-1 rounded"
                  }`}
                >
                  {tc.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Main component
export default function ProjectTestCaseExplorer() {
  const [selectedNode, setSelectedNode] = useState(projectData[0]);

  // Helper to get all test cases for a node
  const getTestCases = (node) => node?.testCases || [];

  return (
    <div className="flex h-full min-h-[400px] bg-white rounded-xl shadow-lg overflow-hidden border border-violet-100">
      <aside
        className="w-64 border-r border-violet-100 bg-gradient-to-b from-violet-50 to-white p-6"
      >
        <h3 className="text-lg font-bold text-violet-700 mb-4">Screens</h3>
        <ScreenTree
          nodes={projectData}
          onSelect={setSelectedNode}
          selectedId={selectedNode?.id}
        />
      </aside>
      <main className="flex-1 p-8 bg-white">
        <h3 className="text-xl font-semibold text-violet-700 mb-6">
          Test Cases: <span className="font-normal text-gray-700">{selectedNode?.name}</span>
        </h3>
        <TestCaseTable testCases={getTestCases(selectedNode)} />
      </main>
    </div>
  );
}
