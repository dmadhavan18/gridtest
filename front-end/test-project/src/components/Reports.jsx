import React from "react";
import { useParams } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

// Violet color palette (for chart colors)
const COLORS = {
  accent: "#7c3aed",
  accentLight: "#ede9fe",
  accentDark: "#5b21b6",
  text: "#3b0764",
  textLight: "#a78bfa",
  border: "#e9d5ff",
  piePassed: "#008000",
  pieFailed: "#ff0000",
  pieSkipped: "#ede9fe",
  pieOther: "#c4b5fd",
  pieLogPassed: "#008000",
  pieLogFailed: "#ff0000",
  pieLogOther: "#c4b5fd",
};

const mockReportData = {
  "project-1": {
    started: "2024-06-10T09:00:00Z",
    ended: "2024-06-10T10:30:00Z",
    testPassed: 120,
    testFailed: 15,
    testSkipped: 5,
    testOther: 2,
    logPassed: 100,
    logFailed: 20,
    logOther: 10,
    authors: [
      { name: "link1", passed: 60, failed: 5, skipped: 2, other: 1 },
      { name: "link2", passed: 40, failed: 7, skipped: 1, other: 0 },
      { name: "link3", passed: 20, failed: 3, skipped: 2, other: 1 },
    ],
    tags: [
      { name: "UI", passed: 50, failed: 4, skipped: 1, other: 0 },
      { name: "API", passed: 40, failed: 8, skipped: 2, other: 1 },
      { name: "E2E", passed: 30, failed: 3, skipped: 2, other: 1 },
    ],
  },
};

function formatDateTime(dt) {
  return new Date(dt).toLocaleString();
}

function calcPassedPercent(passed, failed, skipped, other) {
  const total = passed + failed + skipped + other;
  if (total === 0) return "0%";
  return ((passed / total) * 100).toFixed(1) + "%";
}

const Reports = () => {
  const { projectId } = useParams();
  const data = mockReportData[projectId] || mockReportData["project-1"];

  const testPieData = {
    labels: ["Passed", "Failed", "Skipped", "Other"],
    datasets: [
      {
        data: [
          data.testPassed,
          data.testFailed,
          data.testSkipped,
          data.testOther,
        ],
        backgroundColor: [
          COLORS.piePassed,
          COLORS.pieFailed,
          COLORS.pieSkipped,
          COLORS.pieOther,
        ],
      },
    ],
  };

  const logPieData = {
    labels: ["Passed", "Failed", "Other"],
    datasets: [
      {
        data: [data.logPassed, data.logFailed, data.logOther],
        backgroundColor: [
          COLORS.pieLogPassed,
          COLORS.pieLogFailed,
          COLORS.pieLogOther,
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen font-sans text-violet-950 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-light mb-8 tracking-tight text-violet-900">
          Project Report
          <span className="text-violet-600">{projectId}</span>
        </h2>
        {/* Info Cards */}
        <div className="flex flex-wrap gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md p-6 border border-violet-200 flex-1 min-w-[180px]">
            <div className="text-violet-700 font-light text-xs mb-1">
              Started
            </div>
            <div className="font-light">{formatDateTime(data.started)}</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-violet-200 flex-1 min-w-[180px]">
            <div className="text-violet-700 font-light text-xs mb-1">
              Ended
            </div>
            <div className="font-light">{formatDateTime(data.ended)}</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-violet-200 flex-1 min-w-[180px]">
            <div className="text-violet-700 font-light text-xs mb-1">
              Test Passed
            </div>
            <div className="font-light text-green-700">{data.testPassed}</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-violet-200 flex-1 min-w-[180px]">
            <div className="text-violet-700 font-light text-xs mb-1">
              Test Failed
            </div>
            <div className="font-light text-red-500" style={{ color: COLORS.pieFailed }}>
              {data.testFailed}
            </div>
          </div>
        </div>
        {/* Pie Charts */}
        <div className="flex flex-wrap gap-8 mb-10">
          <div className="bg-white rounded-xl shadow-md p-6 border border-violet-200 flex-1 min-w-[320px]">
            <div className="font-light text-violet-800 mb-3 text-lg">
              Test Results
            </div>
            <Pie data={testPieData} />
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-violet-200 flex-1 min-w-[320px]">
            <div className="font-light text-violet-800 mb-3 text-lg">
              Log Events
            </div>
            <Pie data={logPieData} />
          </div>
        </div>
        <div className="rounded-xl border border-violet-200 mt-8 shadow-sm p-6">
          <div className="font-light text-violet-800 text-lg mb-2">Author</div>
          <div className="overflow-x-auto">
            <table className="w-full mt-2 border-collapse text-base">
              <thead>
                <tr>
                  <th className="text-left px-3 py-2 text-violet-600 font-light">Name</th>
                  <th className="text-right px-3 py-2 text-violet-600 font-light">Passed</th>
                  <th className="text-right px-3 py-2 text-violet-600 font-light">Failed</th>
                  <th className="text-right px-3 py-2 text-violet-600 font-light">Skipped</th>
                  <th className="text-right px-3 py-2 text-violet-600 font-light">Others</th>
                  <th className="text-right px-3 py-2 text-violet-600 font-light">Passed %</th>
                </tr>
              </thead>
              <tbody>
                {data.authors &&
                  data.authors.map((author, idx) => (
                    <tr
                      key={author.name}
                      className={idx % 2 === 0 ? "bg-white" : "bg-violet-50"}
                    >
                      <td className="px-3 py-2 font-semibold">{author.name}</td>
                      <td className="text-right px-3 py-2 font-light text-violet-600">
                        {author.passed}
                      </td>
                      <td
                        className="text-right px-3 py-2 font-light"
                        style={{ color: COLORS.pieFailed }}
                      >
                        {author.failed}
                      </td>
                      <td className="text-right px-3 py-2">{author.skipped}</td>
                      <td className="text-right px-3 py-2">{author.other}</td>
                      <td className="text-right px-3 py-2 font-semibold">
                        {calcPassedPercent(
                          author.passed,
                          author.failed,
                          author.skipped,
                          author.other
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-violet-200 mt-8 bg-white shadow-sm p-6">
          <div className="font-light text-violet-800 text-lg mb-2">Tags</div>
          <div className="overflow-x-auto">
            <table className="w-full mt-2 border-collapse text-base">
              <thead>
                <tr>
                  <th className="text-left px-3 py-2 text-violet-700 font-light">Name</th>
                  <th className="text-right px-3 py-2 text-violet-700 font-light">Passed</th>
                  <th className="text-right px-3 py-2 text-violet-700 font-light">Failed</th>
                  <th className="text-right px-3 py-2 text-violet-700 font-light">Skipped</th>
                  <th className="text-right px-3 py-2 text-violet-700 font-light">Others</th>
                  <th className="text-right px-3 py-2 text-violet-700 font-light">Passed %</th>
                </tr>
              </thead>
              <tbody>
                {data.tags &&
                  data.tags.map((tag, idx) => (
                    <tr
                      key={tag.name}
                      className={idx % 2 === 0 ? "bg-violet-50" : "bg-white"}
                    >
                      <td className="px-3 py-2 font-semibold">{tag.name}</td>
                      <td className="text-right px-3 py-2 font-light text-violet-600">
                        {tag.passed}
                      </td>
                      <td
                        className="text-right px-3 py-2 font-light"
                        style={{ color: COLORS.pieFailed }}
                      >
                        {tag.failed}
                      </td>
                      <td className="text-right px-3 py-2">{tag.skipped}</td>
                      <td className="text-right px-3 py-2">{tag.other}</td>
                      <td className="text-right px-3 py-2 font-light">
                        {calcPassedPercent(
                          tag.passed,
                          tag.failed,
                          tag.skipped,
                          tag.other
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
