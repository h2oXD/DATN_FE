export default function Chat() {
  return (
    <>
      <div className="d-flex vh-95">
        {/* Sidebar Contacts */}
        <div className="w-25 bg-light border-end p-3">
          <h3>Contacts</h3>
          <ul className="list-unstyled">
            <li className="py-2">
              <i className="bi bi-circle-fill text-success me-2"></i> Jitu
              Chauhan
            </li>
            <li className="py-2">
              <i className="bi bi-circle-fill text-warning me-2"></i> Olivia
              Cooper
            </li>
            <li className="py-2">
              <i className="bi bi-circle-fill text-danger me-2"></i> Oswal Baug
            </li>
            <li className="py-2">
              <i className="bi bi-circle-fill text-success me-2"></i> Jitu
              Chauhan
            </li>
            <li className="py-2">
              <i className="bi bi-circle-fill text-dangerdanger me-2"></i> Jitu
              Chauhan
            </li>
          </ul>
        </div>

        {/* Chat Area */}
        <div className="d-flex flex-column w-75">
          <div className="flex-grow-1 p-3 overflow-auto d-flex flex-column chat-box-container">
            <div className="p-2 rounded bg-secondary text-white align-self-start mb-2 chat-box">
              I just started Bootstrap, SCSS and Gulp development.
            </div>
            <div className="p-2 rounded bg-primary text-white align-self-end mb-2 chat-box">
              I just started Bootstrap, SCSS and Gulp development.
            </div>
            <div className="p-2 rounded bg-secondary text-white align-self-start mb-2 chat-box">
              Thank you
            </div>
            <div className="p-2 rounded bg-primary text-white align-self-end mb-2 chat-box">
              You are most welcome.
            </div>
            <div className="p-2 rounded bg-secondary text-white align-self-start mb-2 chat-box">
              I just started Bootstrap, SCSS and Gulp development.
            </div>
            <div className="p-2 rounded bg-primary text-white align-self-end mb-2 chat-box">
              I just started Bootstrap, SCSS and Gulp development.
            </div>
            <div className="p-2 rounded bg-secondary text-white align-self-start mb-2 chat-box">
              Thank you
            </div>
            <div className="p-2 rounded bg-primary text-white align-self-end mb-2 chat-box">
              You are most welcome.
            </div>
            <div className="p-2 rounded bg-secondary text-white align-self-start mb-2 chat-box">
              Thank you
            </div>
            <div className="p-2 rounded bg-primary text-white align-self-end mb-2 chat-box">
              You are most welcome.
            </div>
            <div className="p-2 rounded bg-secondary text-white align-self-start mb-2 chat-box">
              Thank you
            </div>
          </div>

          <div className="border-top p-2 d-flex align-items-center bg-white">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Type a new message"
            />
            <button className="btn btn-primary">
              <i className="bi bi-send"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
