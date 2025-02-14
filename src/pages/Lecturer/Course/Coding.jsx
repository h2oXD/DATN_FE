import { useState } from "react";
import CodingContent from "./CodingContent";
import CodingPlan from "./CodingPlan";

export default function Coding() {
  const [activeTab, setActiveTab] = useState("plan"); // Mặc định hiển thị CodingPlan

  return (
    <div className="card p-4">
      <div className="d-flex justify-content-end">
        <button
          className={`btn me-2 ${
            activeTab === "plan" ? "btn-info" : "btn-outline-info"
          }`}
          onClick={() => setActiveTab("plan")}
        >
          Lập kế hoạch học tập
        </button>
        <button
          className={`btn ${
            activeTab === "content" ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={() => setActiveTab("content")}
        >
          Nội dung
        </button>
      </div>

      {activeTab === "plan" && <CodingPlan />}
      {activeTab === "content" && <CodingContent />}
    </div>
  );
}
