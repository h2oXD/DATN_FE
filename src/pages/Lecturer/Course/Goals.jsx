import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Goals() {
  const [goals, setGoals] = useState([""]);
  const [prereqs, setPrereqs] = useState([""]);
  const [audience, setAudience] = useState([""]);

  const addInput = (setFunction) => {
    setFunction((prev) => [...prev, ""]);
  };

  const removeInput = (setFunction, index, list) => {
    if (list.length > 1) {
      setFunction(list.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="card p-3" style={{ width: "800px" }}>
      <h2 className="text-center mb-3">Mục tiêu học viên</h2>
      <div className="mb-4">
        <h2 className="h5 text-dark">
          Học viên sẽ học được gì trong khóa học của bạn?
        </h2>
        <div className="d-flex flex-column gap-2">
          {goals.map((goal, index) => (
            <div className="position-relative" key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập mục tiêu..."
                value={goal}
                onChange={(e) => {
                  const newGoals = [...goals];
                  newGoals[index] = e.target.value;
                  setGoals(newGoals);
                }}
              />
              <FaTimes
                className="position-absolute top-50 end-0 translate-middle-y me-2 text-dark cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => removeInput(setGoals, index, goals)}
              />
            </div>
          ))}
        </div>
        <button
          className="btn btn-outline-primary tw-border-none mt-2"
          onClick={() => addInput(setGoals)}
        >
          + Thêm mục tiêu
        </button>
      </div>

      <div className="mb-4">
        <h2 className="h5 text-dark">
          Yêu cầu hoặc điều kiện tiên quyết để tham gia khóa học?
        </h2>
        <div className="d-flex flex-column gap-2">
          {prereqs.map((prereq, index) => (
            <div className="position-relative" key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="Ví dụ: Không cần kinh nghiệm lập trình.Bạn sẽ học mọi thứ mà bạn cần biết."
                value={prereq}
                onChange={(e) => {
                  const newPrereqs = [...prereqs];
                  newPrereqs[index] = e.target.value;
                  setPrereqs(newPrereqs);
                }}
              />
              <FaTimes
                className="position-absolute top-50 end-0 translate-middle-y me-2 text-dark cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => removeInput(setPrereqs, index, prereqs)}
              />
            </div>
          ))}
        </div>
        <button
          className="btn btn-outline-primary tw-border-none mt-2"
          onClick={() => addInput(setPrereqs)}
        >
          + Thêm điều kiện tiên quyết
        </button>
      </div>

      <div className="mb-4">
        <h2 className="h5 text-dark">Khóa học này dành cho đối tượng nào?</h2>
        <div className="d-flex flex-column gap-2">
          {audience.map((aud, index) => (
            <div className="position-relative" key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="Ví dụ: Các nhà phát triển Python có trình độ sơ cấp muốn tìm hiểu về khoa học dữ liệu"
                value={aud}
                onChange={(e) => {
                  const newAudience = [...audience];
                  newAudience[index] = e.target.value;
                  setAudience(newAudience);
                }}
              />
              <FaTimes
                className="position-absolute top-50 end-0 translate-middle-y me-2 text-dark cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => removeInput(setAudience, index, audience)}
              />
            </div>
          ))}
        </div>
        <button
          className="btn btn-outline-primary tw-border-none mt-2"
          onClick={() => addInput(setAudience)}
        >
          + Thêm đối tượng
        </button>
      </div>
    </div>
  );
}
