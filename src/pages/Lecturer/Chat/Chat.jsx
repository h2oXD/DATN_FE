import React, { useState, useRef } from "react";
import {
  BsSend,
  BsImage,
  BsPaperclip,
  BsThreeDotsVertical,
  BsEmojiSmile,
  BsCircleFill,
  BsPersonCircle,
  BsFileEarmark,
} from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";

export default function Chat() {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      lastMessage: "Thầy ơi, bài giảng phần 2 khi nào có ạ?",
      time: "10:15 AM",
      online: true,
    },
    {
      id: 2,
      name: "Trần Thị B",
      lastMessage: "Em có thắc mắc về bài tập tuần này.",
      time: "Hôm qua",
      online: false,
    },
    {
      id: 3,
      name: "Lê Văn C",
      lastMessage: "Cảm ơn thầy đã phản hồi!",
      time: "2 ngày trước",
      online: true,
    },
  ]);

  const [messages, setMessages] = useState([
    {
      sender: "student",
      text: "Thầy ơi, bài giảng phần 2 khi nào có ạ?",
      type: "text",
    },
    {
      sender: "instructor",
      text: "Dự kiến vào thứ 6 tuần này em nhé!",
      type: "text",
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );
  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const fileInputRef = useRef(null);
  const attachFileRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { sender: "instructor", text: newMessage, type: "text" },
      ]);
      setNewMessage("");
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMessages([
        ...messages,
        {
          sender: "instructor",
          text: URL.createObjectURL(file),
          fileName: file.name,
          type: "file",
        },
      ]);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMessages([
        ...messages,
        {
          sender: "instructor",
          text: URL.createObjectURL(file),
          type: "image",
        },
      ]);
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setNewMessage((prev) => prev + emojiObject.emoji);
  };

  return (
    <div className="container mt-4">
      <div className="row tw-bg-gray-200 tw-p-3 rounded-2 ">
        {/* Danh sách hội thoại */}
        <div className="col-md-4 border-end">
          <h3 className="fw-bold my-3">Tin nhắn</h3>
          <div className="list-group">
            {conversations.map((chat) => (
              <button
                key={chat.id}
                className={`list-group-item list-group-item-action d-flex align-items-center p-3 rounded ${
                  chat.id === selectedConversation.id
                    ? "active bg-primary text-white"
                    : ""
                }`}
                onClick={() => setSelectedConversation(chat)}
              >
                <div className="position-relative me-2">
                  <BsPersonCircle size={40} />
                  <BsCircleFill
                    className="position-absolute bottom-0 end-0"
                    size={12}
                    color={chat.online ? "green" : "gray"}
                  />
                </div>
                <div className="flex-grow-1">
                  <strong>{chat.name}</strong>
                  <div className="d-flex align-items-center">
                    <small className="text-muted">
                      {chat.online ? "Đang hoạt động" : "Ngoại tuyến"}
                    </small>
                  </div>
                  <p className="small text-muted mb-0">{chat.lastMessage}</p>
                </div>
                <small className="text-muted">{chat.time}</small>
              </button>
            ))}
          </div>
        </div>

        {/* Cửa sổ chat */}
        <div className="col-md-8">
          <div className="card shadow-sm rounded">
            <div className="card-header d-flex justify-content-between align-items-center bg-white border-bottom">
              <div className="d-flex align-items-center">
                <div className="position-relative me-2">
                  <BsPersonCircle size={40} />
                  <BsCircleFill
                    className="position-absolute bottom-0 end-0"
                    size={12}
                    color={selectedConversation.online ? "green" : "gray"}
                  />
                </div>
                <div>
                  <h6 className="mb-0">{selectedConversation.name}</h6>
                  <small className="text-muted">
                    {selectedConversation.online
                      ? "Đang hoạt động"
                      : "Ngoại tuyến"}
                  </small>
                </div>
              </div>
              <BsThreeDotsVertical />
            </div>

            <div
              className="card-body chat-box p-3 bg-light"
              style={{ height: "400px", overflowY: "auto" }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`d-flex mb-2 ${
                    msg.sender === "instructor"
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                >
                  {msg.sender !== "instructor" && (
                    <BsPersonCircle size={35} className="me-2" />
                  )}
                  <div
                    className={`p-3 rounded shadow-sm ${
                      msg.sender === "instructor"
                        ? "bg-primary text-white"
                        : "bg-white border"
                    }`}
                    style={{ maxWidth: "75%" }}
                  >
                    {msg.type === "text" ? (
                      msg.text
                    ) : msg.type === "image" ? (
                      <img
                        src={msg.text}
                        alt="Uploaded"
                        className="img-fluid rounded border"
                        style={{ maxWidth: "100%" }}
                      />
                    ) : (
                      <div className="d-flex align-items-center">
                        <BsFileEarmark size={20} className="me-2" />
                        <a
                          href={msg.text}
                          download={msg.fileName}
                          className="text-white"
                        >
                          {msg.fileName}
                        </a>
                      </div>
                    )}
                  </div>
                  {msg.sender === "instructor" && (
                    <BsPersonCircle size={35} className="ms-2" />
                  )}
                </div>
              ))}
            </div>

            {/* Nhập tin nhắn */}
            <div className="card-footer bg-white border-top">
              <div className="input-group">
                <button
                  className="btn btn-light position-relative"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <BsEmojiSmile />
                  {showEmojiPicker && (
                    <div
                      className="position-absolute"
                      style={{ bottom: "40px", zIndex: 10 }}
                    >
                      <EmojiPicker onEmojiClick={handleEmojiClick} />
                    </div>
                  )}
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => attachFileRef.current.click()}
                >
                  <BsPaperclip />
                  <input
                    type="file"
                    hidden
                    ref={attachFileRef}
                    onChange={handleFileUpload}
                  />
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => fileInputRef.current.click()}
                >
                  <BsImage />
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                  />
                </button>
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Nhập tin nhắn..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button className="btn btn-primary" onClick={handleSendMessage}>
                  <BsSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
