import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import axiosClient from "../../../api/axios";
import { useOutletContext, useParams } from "react-router-dom";
import { Skeleton } from "antd";
import { toast } from "react-toastify";

export default function Goals() {
  const { updateCheckData } = useOutletContext();
  const { course_id } = useParams()
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [learningOutcomes, setLearningOutcomes] = useState(["", "", "", ""]);
  const [prerequisites, setPrerequisites] = useState([""]);
  const [targetStudents, setTargetStudents] = useState([""]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fethCouseData = async () => {
      try {
        setLoading(true)
        const data = await axiosClient(`/lecturer/courses/${course_id}`);
        const res = data.data.data;

        // Phân tích chuỗi JSON thành mảng JavaScript
        const parsedLearningOutcomes = JSON.parse(res.learning_outcomes || "['', '', '', '']");
        const parsedPrerequisites = JSON.parse(res.prerequisites || "['']");
        const parsedTargetStudents = JSON.parse(res.target_students || "['']");

        formik.setValues({
          learning_outcomes: parsedLearningOutcomes,
          prerequisites: parsedPrerequisites,
          target_students: parsedTargetStudents,
        });

        setLearningOutcomes(parsedLearningOutcomes);
        setPrerequisites(parsedPrerequisites);
        setTargetStudents(parsedTargetStudents);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    };
    fethCouseData();
  }, [course_id]);

  const formik = useFormik({
    initialValues: {
      learning_outcomes: learningOutcomes,
      prerequisites: prerequisites,
      target_students: targetStudents,
    },
    onSubmit: async (values) => {
      setIsSubmitting(true);
      values._method = "PUT";
      console.log(values);

      try {
        const response = await axiosClient.put(
          `/lecturer/courses/${course_id}`,
          {
            learning_outcomes: JSON.stringify(values.learning_outcomes),
            prerequisites: JSON.stringify(values.prerequisites),
            target_students: JSON.stringify(values.target_students),
            _method: "PUT", // Thêm _method nếu API yêu cầu
          }
        );
        updateCheckData()
        toast.success('Cập nhật thành công')
        console.log("Response from API:", response); // Kiểm tra response từ API

        // Xử lý response từ API, ví dụ: hiển thị thông báo thành công
      } catch (error) {
        console.error("Error submitting form:", error);
        // Xử lý lỗi, ví dụ: hiển thị thông báo lỗi
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const handleAddLearningOutcome = () => {
    if (learningOutcomes.length < 8) {
      setLearningOutcomes([...learningOutcomes, ""]);
    }
  };

  const handleRemoveLearningOutcome = (index) => {
    const newLearningOutcomes = [...learningOutcomes];
    newLearningOutcomes.splice(index, 1);
    setLearningOutcomes(newLearningOutcomes);
  };

  const handleAddPrerequisite = () => {
    if (prerequisites.length < 4) {
      setPrerequisites([...prerequisites, ""]);
    }
  };

  const handleRemovePrerequisite = (index) => {
    const newPrerequisites = [...prerequisites];
    newPrerequisites.splice(index, 1);
    setPrerequisites(newPrerequisites);
  };

  const handleAddTargetStudent = () => {
    if (targetStudents.length < 4) {
      setTargetStudents([...targetStudents, ""]);
    }
  };

  const handleRemoveTargetStudent = (index) => {
    const newTargetStudents = [...targetStudents];
    newTargetStudents.splice(index, 1);
    setTargetStudents(newTargetStudents);
  };
  if (loading) {
    return (
      <div className="card p-5">
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
    );
  }
  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <div>
            <h3 className="m-0">Mục tiêu học viên</h3>
          </div>
          <div>
            {isSubmitting ? (
              <button className="btn btn-sm btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-sm btn-primary"
                onClick={() => formRef.current.requestSubmit()}
              >
                Lưu
              </button>
            )}
          </div>
        </div>
        <div className="card-body">
          <form ref={formRef} className="row" onSubmit={formik.handleSubmit}>
            <div className="col-12 mb-3">
              <label htmlFor="" className="fw-bold">
                Học viên sẽ học được gì trong khóa học của bạn?
              </label>
              <p>
                Bạn phải nhập ít nhất 4 mục tiêu hoặc kết quả học tập mà học
                viên có thể mong đợi đạt được sau khi hoàn thành khóa học.
              </p>
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="d-flex align-items-center mt-2">
                  <input
                    type="text"
                    placeholder="Ví dụ: Xác định vai trò và trách nhiệm của người quản lý dự án"
                    className="form-control"
                    value={outcome}
                    onChange={(e) => {
                      const newLearningOutcomes = [...learningOutcomes];
                      newLearningOutcomes[index] = e.target.value;
                      setLearningOutcomes(newLearningOutcomes);
                      formik.setFieldValue(
                        `learning_outcomes[${index}]`,
                        e.target.value
                      );
                    }}
                  />
                  {index >= 4 && (
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger ms-2"
                      onClick={() => handleRemoveLearningOutcome(index)}
                    >
                      Xóa
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="col-12">
              {learningOutcomes.length < 8 && (
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={handleAddLearningOutcome}
                >
                  +Thêm nội dung
                </button>
              )}
            </div>
            <div className="col-12 mb-3 mt-4">
              <label htmlFor="" className="fw-bold">
                Yêu cầu hoặc điều kiện tiên quyết để tham gia khóa học của bạn là gì?
              </label>
              <p>
                Liệt kê các kỹ năng, kinh nghiệm, công cụ hoặc thiết bị mà học viên bắt buộc phải có trước khi tham gia khóa học.
                Nếu bạn không có yêu cầu nào, hãy tận dụng phần này và coi đây là cơ hội để bạn hạ thấp tiêu chuẩn cho người mới bắt đầu.
              </p>
              {prerequisites.map((prerequisite, index) => (
                <div key={index} className="d-flex align-items-center mt-2">
                  <input
                    type="text"
                    placeholder="Ví dụ: Không cần kinh nghiệm lập trình. Bạn sẽ học mọi thứ mà bạn cần biết"
                    className="form-control"
                    value={prerequisite}
                    onChange={(e) => {
                      const newPrerequisites = [...prerequisites];
                      newPrerequisites[index] = e.target.value;
                      setPrerequisites(newPrerequisites);
                      formik.setFieldValue(
                        `prerequisites[${index}]`,
                        e.target.value
                      );
                    }}
                  />
                  {index >= 1 && (
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger ms-2"
                      onClick={() => handleRemovePrerequisite(index)}
                    >
                      Xóa
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="col-12">
              {prerequisites.length < 4 && (
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={handleAddPrerequisite}
                >
                  +Thêm nội dung
                </button>
              )}
            </div>
            <div className="col-12 mb-3 mt-4">
              <label htmlFor="" className="fw-bold">
                Khóa học này dành cho đối tượng nào?
              </label>
              <p>
                Viết mô tả rõ ràng về học viên mục tiêu cho khóa học, tức là
                những người sẽ thấy nội dung khóa học có giá trị. Điều này sẽ
                giúp bạn thu hút học viên phù hợp tham gia khóa học.
              </p>
              {targetStudents.map((targetStudent, index) => (
                <div key={index} className="d-flex align-items-center mt-2">
                  <input
                    type="text"
                    placeholder="Ví dụ: Các nhà phát triển Python có trình độ sơ cấp muốn tìm hiểu về khoa học dữ liệu"
                    className="form-control"
                    value={targetStudent}
                    onChange={(e) => {
                      const newTargetStudents = [...targetStudents];
                      newTargetStudents[index] = e.target.value;
                      setTargetStudents(newTargetStudents);
                      formik.setFieldValue(
                        `target_students[${index}]`,
                        e.target.value
                      );
                    }}
                  />
                  {index >= 1 && (
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger ms-2"
                      onClick={() => handleRemoveTargetStudent(index)}
                    >
                      Xóa
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="col-12">
              {targetStudents.length < 4 && (
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={handleAddTargetStudent}
                >
                  +Thêm nội dung
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}