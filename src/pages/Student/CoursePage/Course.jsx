import React, { useState, useRef, useEffect } from "react";
import { Modal, Button, Form, ProgressBar, Accordion } from "react-bootstrap";
import { FaLock } from "react-icons/fa";

const Course = () => {
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const videoRef = useRef(null);
  const currentLesson = "Biến và nhập xuất dữ liệu";

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const getCurrentTime = () => "0:00";

  const handleAddOrEditNote = () => {
    if (newNote.trim() !== "") {
      if (editIndex !== null) {
        const updatedNotes = [...notes];
        updatedNotes[editIndex].content = newNote;
        setNotes(updatedNotes);
        setEditIndex(null);
      } else {
        setNotes([
          ...notes,
          { lesson: currentLesson, time: getCurrentTime(), content: newNote },
        ]);
      }
      setNewNote("");
    }
  };

  const courseContent = [
    {
      title: "Bắt đầu",
      completed: 2,
      total: 8,
      duration: "21:39",
      videos: [
        {
          title: "1.Bạn sẽ làm được gì sau khóa học?",
          duration: "03:15",
          locked: false,
        },
        { title: "2.Tìm hiểu về HTML, CSS", duration: "02:29", locked: true },
        { title: "3.Làm quen với Dev tools", duration: "03:55", locked: true },
      ],
    },
    {
      title: "Làm quen với HTML",
      completed: 5,
      total: 13,
      duration: "55:52",
      videos: [],
    },
    {
      title: "Làm quen với CSS",
      completed: 10,
      total: 29,
      duration: "2:16:11",
      videos: [],
    },
  ];

  const totalCompleted = courseContent.reduce(
    (sum, sec) => sum + sec.completed,
    0
  );
  const totalLessons = courseContent.reduce((sum, sec) => sum + sec.total, 0);
  const progress = Math.round((totalCompleted / totalLessons) * 100);

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-md-9 p-4">
          <h3 className="fw-bold mb-3">Lập trình C++ cơ bản, nâng cao</h3>
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{currentLesson}</h5>
              <button
                className="btn btn-light btn-sm"
                onClick={() => setShowModal(true)}
              >
                + Thêm ghi chú tại {getCurrentTime()}
              </button>
            </div>
            <div className="card-body">
              <iframe
                ref={videoRef}
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
                title="Giới thiệu khóa học C++"
                frameBorder="0"
                allowFullScreen
                className="rounded"
              ></iframe>
              <p className="mt-3 text-muted">Cập nhật tháng 11/30/2024</p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-secondary">Bài Trước</button>
            <button className="btn btn-primary">Bài Tiếp Theo</button>
          </div>
        </main>

        {/* Sidebar */}
        <aside
          className="col-md-3 p-3 border-start custom-scrollbar"
          style={{
            height: "80vh",
            backgroundColor: "#f8f9fa",
            overflowY: "scroll",
          }}
        >
          <h4 className="fw-bold">Nội dung khóa học</h4>
          <ProgressBar now={progress} label={`${progress}%`} className="mb-3" />
          <Accordion>
            {courseContent.map((section, idx) => (
              <Accordion.Item eventKey={idx.toString()} key={idx}>
                <Accordion.Header>
                  <div className="d-flex flex-column w-100">
                    <span className="fw-bold">{section.title}</span>
                    <small className="text-muted">
                      {section.completed}/{section.total} | {section.duration}
                    </small>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {section.videos.map((video, vidIdx) => (
                    <div
                      key={vidIdx}
                      className="lesson-item p-2 d-flex justify-content-between align-items-center rounded"
                      onClick={() => setActiveLesson(vidIdx)}
                      style={{ cursor: "pointer" }}
                    >
                      <span>{video.title}</span>
                      <div className="d-flex align-items-center">
                        <small className="text-muted me-2">
                          {video.duration}
                        </small>
                        {video.locked && <FaLock className="text-secondary" />}
                      </div>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </aside>
      </div>

      {/* CSS cho hover và scrollbar */}
      <style>{`
        .lesson-item:hover {
          background-color: #e9ecef;
          transition: background-color 0.3s ease-in-out;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #007bff;
          border-radius: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #0056b3;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #e0e0e0;
        }
      `}</style>
    </div>
  );
};

export default Course;
