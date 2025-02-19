/* eslint-disable react/prop-types */
import { Modal } from "antd";

const CodingModal = ({
  isModalCodingOpen,
  setIsModalCodingOpen,
  section_id,
  setLessons,
}) => {
  return (
    <Modal
      open={isModalCodingOpen}
      onCancel={() => {
        setIsModalCodingOpen(false);
      }}
      footer={null}
    >
      <h3 className="mb-3">Thêm bài tập coding</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="tenBaiTap" className="form-label">
            Tên bài tập
          </label>
          <input
            type="text"
            className="form-control"
            id="tenBaiTap"
            placeholder="Nhập tên bài tập"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="loaiNgonNgu" className="form-label">
            Chọn ngôn ngữ lập trình
          </label>
          <select className="form-select" id="loaiNgonNgu">
            <option>Python</option>
            <option>JavaScript</option>
            <option>C++</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="mucTieu" className="form-label">
            Mục tiêu bài tập
          </label>
          <textarea
            className="form-control"
            id="mucTieu"
            rows="3"
            placeholder="Cung cấp một mục tiêu học tập cho bài tập coding này."
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button type="reset" className="btn btn-danger me-2">
            Hủy
          </button>
          <button type="submit" className="btn btn-primary">
            Tiếp theo
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CodingModal;
