/* eslint-disable react/prop-types */
import { Editor } from "@monaco-editor/react";
import { Modal } from "antd";
import { useState } from "react";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "../../../../../api/common";
import axiosClient, { executeCode } from "../../../../../api/axios";
import { toast } from "react-toastify";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  problem_title: yup.string().required("Tên bài tập không được để trống"),
  problem_description: yup.string().nullable(),
  language: yup.string().required("Ngôn ngữ không được để trống"),
  starter_code: yup.string().required("Mã nguồn khởi tạo không được để trống"),
  solution_code: yup.string().required("Mã nguồn giải pháp không được để trống"),
  output: yup.string().required("Đầu ra không được để trống"),
});

const CodingModal = ({
  isModalCodingOpen,
  setIsModalCodingOpen,
  section_id,
  setLessons,
  course_id,
  setIsReset,
  isReset
}) => {
  const [problemTitle, setProblemTitle] = useState('')
  const [problemDescription, setProblemDescription] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [starterCode, setStarterCode] = useState('')
  const [solutionCode, setsolutionCode] = useState('')
  const [output, setOutput] = useState('')
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const [isLoading, setIsLoading] = useState(false)

  const runCode = async () => {
    const sourceCode = solutionCode;
    if (!solutionCode) {
      toast.warning("Vui lòng nhập mã trước khi chạy!");
      return;
    }
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      // Đảm bảo output là một chuỗi, loại bỏ dấu nháy kép dư thừa
      let outputString = result.output;
      if (Array.isArray(outputString)) {
        outputString = outputString.join("\n"); // Nối thành chuỗi nếu là mảng
      }
      outputString = outputString.replace(/^"|"$/g, ''); // Xóa dấu nháy nếu có

      setOutput(outputString);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateCoding = async (e) => {
    e.preventDefault();
    const data = {
      language: language,
      problem_title: problemTitle,
      problem_description: problemDescription,
      starter_code: starterCode,
      solution_code: solutionCode,
      output: output
    }
    try {
      await validationSchema.validate(data, { abortEarly: false });
      const res = await axiosClient.post(`/lecturer/courses/${course_id}/sections/${section_id}/codings`, data)
      console.log(res);
      toast.success("Tạo bài tập thành công!");
      setIsModalCodingOpen(false);
      setIsReset(!isReset);
    } catch (error) {
      if (error.inner) {
        error.inner.forEach((err) => toast.error(err.message));
      } else {
        toast.error("Có lỗi xảy ra khi tạo bài tập!");
      }
    }
  }
  return (
    <Modal
      className="tw-top-[10px]"
      open={isModalCodingOpen}
      onCancel={() => {
        setIsModalCodingOpen(false);
      }}
      footer={null}
      width={1500}

    >
      <h3 className="mb-3">Thêm bài tập coding</h3>
      <form className="row">
        <div className="mb-3 col-6">
          <label htmlFor="tenBaiTap" className="form-label">
            Tên bài tập
          </label>
          <input
            type="text"
            className="form-control"
            id="tenBaiTap"
            placeholder="Nhập tên bài tập"
            value={problemTitle}
            onChange={(e) => { setProblemTitle(e.target.value) }}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="loaiNgonNgu" className="form-label">
            Chọn ngôn ngữ lập trình
          </label>
          <select className="form-select text-dark" id="loaiNgonNgu" onChange={(e) => {
            setLanguage(e.target.value)
            setStarterCode(CODE_SNIPPETS[e.target.value])
            setsolutionCode(CODE_SNIPPETS[e.target.value])
          }}>
            {languages.map(([lang, version], index) => (
              <option key={index} value={lang}>
                {lang} ({version})
              </option>
            ))}

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
            value={problemDescription}
            onChange={(e) => { setProblemDescription(e.target.value) }}
          ></textarea>
        </div>
        <div className="col-12 row ">
          <div className="mb-3 col-6">
            <label htmlFor="">Mã khởi đầu dành cho học viên</label>
            <Editor value={starterCode} onChange={(value) => { setStarterCode(value) }} theme="vs-dark" height="30vh" language={language} />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="">Mã đáp án</label>
            <Editor value={solutionCode} onChange={(value) => { setsolutionCode(value) }} theme="vs-dark" height="30vh" language={language} />
          </div>
        </div>
        <div>
          <input value={output} name="" type="text" disabled className="form-control bg-dark text-light" id="" />
          {isLoading ? (<button className="btn btn-outline-dark btn-sm mt-2" disabled><i className="spinner-border spinner-border-sm"></i></button>) : (<><button onClick={runCode} type="button" className="btn btn-outline-dark btn-sm mt-2">Chạy mã</button></>)}

        </div>
        <div className="d-flex justify-content-end">
          <button type="reset" className="btn btn-danger me-2" onClick={() => { setIsModalCodingOpen(false) }}>
            Hủy
          </button>
          <button type="submit" className="btn btn-primary" onClick={handleCreateCoding}>
            Lưu bài tập
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CodingModal;
