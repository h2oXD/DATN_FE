import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../contexts/StoreProvider";
import axiosClient from "../../api/axios";
import { toast } from "react-toastify";
import { getImageUrl } from "./../../api/common";
import { BiBook, BiCodeBlock, BiSend, BiUserCheck } from "react-icons/bi";

export default function Last() {
  const { user, setUser } = useContext(StoreContext);
  const [check, setCheck] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    profile_picture: "",
    bio: "",
  });
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        phone_number: user.phone_number || "",
        profile_picture: user.profile_picture || "",
        bio: user.bio || "",
      });
      setCheck(
        !user.name || !user.phone_number || !user.profile_picture || !user.bio
      );
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, profile_picture: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // formDataToSend.append("_method", "PUT");
    formData._method = "PUT";
    try {
      const response = await axiosClient.post("/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Cập nhật thông tin thành công");
      console.log(response);

      setUser(response.data.user);
      setCheck(false);
    } catch (error) {
      console.error("Lỗi cập nhật thông tin:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  const handleAnswerChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post("/register/answers", answers);
      alert(response.data.message);
      toast.success("Gửi yêu cầu thành công, chờ phê duyệt!");
    } catch (error) {
      console.error("Lỗi gửi câu trả lời:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <>
      {check ? (
        <div className="container py-5">
          <div className="card shadow-sm p-4">
            <h2 className="mb-4 text-center">Thông tin cá nhân</h2>
            <form onSubmit={handleSubmit} className="row g-4">
              <div className="col-lg-6 col-12">
                <label className="form-label fw-bold">Họ và tên</label>
                <input
                  type="text"
                  name="name"
                  className="form-control border-primary"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 col-12">
                <label className="form-label fw-bold">Số điện thoại</label>
                <input
                  type="text"
                  name="phone_number"
                  className="form-control border-primary"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 col-12 text-center">
                <label className="form-label fw-bold">Ảnh đại diện</label>
                <div className="d-flex flex-column align-items-center">
                  {user.profile_picture && (
                    <img
                      src={getImageUrl(user.profile_picture)}
                      className="img-thumbnail rounded-circle mb-2"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <input
                    type="file"
                    name="profile_picture"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <label className="form-label fw-bold">Mô tả</label>
                <textarea
                  name="bio"
                  className="form-control border-primary"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>
              <div className="col-12 text-center mt-3">
                <button
                  type="submit"
                  className="btn btn-primary px-5 py-2 rounded-pill shadow-sm"
                >
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-center align-items-start min-vh-100 mt-4">
            <div className="card shadow-lg rounded-4 p-5 w-50">
              <h2 className="text-center fw-bold text-dark mb-4">
                <BiBook className="me-2" /> Form câu hỏi
              </h2>
              <form onSubmit={handleAnswerSubmit}>
                {[
                  {
                    label: (
                      <>
                        <BiUserCheck className="me-2 text-primary" />
                        Bạn đánh giá điều gì quan trọng nhất trong giảng dạy?
                      </>
                    ),
                    name: "answer1",
                    options: [
                      "Kinh nghiệm giảng dạy",
                      "Phương pháp giảng dạy",
                      "Tương tác với học viên",
                    ],
                  },
                  {
                    label: (
                      <>
                        <BiCodeBlock className="me-2 text-danger" />
                        Yếu tố nào quan trọng để trở thành giáo viên chuyên
                        nghiệp?
                      </>
                    ),
                    name: "answer2",
                    options: [
                      "Chứng chỉ sư phạm",
                      "Kỹ năng giao tiếp",
                      "Kiến thức chuyên sâu",
                    ],
                  },
                  {
                    label: (
                      <>
                        <BiBook className="me-2 text-success" />
                        Bạn quan tâm nhất đến lĩnh vực chuyên môn nào?
                      </>
                    ),
                    name: "answer3",
                    options: [
                      "Lĩnh vực chuyên môn",
                      "Kinh nghiệm thực tiễn",
                      "Nghiên cứu và phát triển",
                    ],
                  },
                ].map((question, index) => (
                  <div className="mb-4" key={index}>
                    <label className="form-label fw-bold">
                      {question.label}
                    </label>
                    <div className="d-flex flex-column gap-2">
                      {question.options.map((option, idx) => (
                        <div className="form-check" key={idx}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name={question.name}
                            value={option}
                            checked={answers[question.name] === option}
                            onChange={handleAnswerChange}
                          />
                          <label className="form-check-label ms-2">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary btn-lg px-5">
                    <BiSend className="me-2" />
                    Gửi đáp án
                  </button>
                </div>
              </form>
            </div>
          </div>
          ;
        </>
      )}
    </>
  );
}
