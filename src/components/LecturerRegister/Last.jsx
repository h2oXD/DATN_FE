import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../contexts/StoreProvider";
import axiosClient from "../../api/axios";
import { toast } from "react-toastify";
import { getImageUrl } from "../../api/common";
import { useNavigate } from "react-router-dom";
import { Steps, Button, Radio, Card } from "antd";

export default function Last() {
  const { user, setUser } = useContext(StoreContext);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        email: user.email || "",
        phone_number: user.phone_number || "",
        profile_picture: user.profile_picture || "",
        bio: user.bio || "",
      });
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
    formData._method = "PUT";
    try {
      const response = await axiosClient.post("/users", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Cập nhật thông tin thành công");
      setUser(response.data.user);
      setCurrentStep(1);
    } catch (error) {
      console.error("Lỗi cập nhật thông tin:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  const handleAnswerChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleAnswerSubmit = async () => {
    if (user.role === "lecturer") {
      toast.warning("Bạn đã là giảng viên, không thể đăng ký lại.");
      return;
    }
    try {
      await axiosClient.post("/register/answers", answers);
      toast.success("Gửi yêu cầu thành công, chờ phê duyệt!");
      navigate("/");
    } catch (error) {
      console.error("Lỗi gửi câu trả lời:", error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  const questions = [
    {
      label: "Bạn đánh giá điều gì quan trọng nhất trong giảng dạy?",
      name: "answer1",
      options: [
        "Kinh nghiệm giảng dạy",
        "Phương pháp giảng dạy",
        "Tương tác với học viên",
      ],
    },
    {
      label: "Yếu tố nào quan trọng để trở thành giáo viên chuyên nghiệp?",
      name: "answer2",
      options: [
        "Chứng chỉ sư phạm",
        "Kỹ năng giao tiếp",
        "Kiến thức chuyên sâu",
      ],
    },
    {
      label: "Bạn quan tâm nhất đến lĩnh vực chuyên môn nào?",
      name: "answer3",
      options: [
        "Lĩnh vực chuyên môn",
        "Kinh nghiệm thực tiễn",
        "Nghiên cứu và phát triển",
      ],
    },
  ];

  return (
    <div className="container py-3 w-60">
      <h2 className="my-2 mb-3 text-center text-primary">
        Đăng ký trở thành giảng viên
      </h2>
      <Steps current={currentStep}>
        <Steps.Step title="Thông tin giảng viên" />
        {questions.map((_, index) => (
          <Steps.Step key={index} title={`Câu hỏi ${index + 1}`} />
        ))}
      </Steps>

      <Card className="mt-4 p-4 shadow-sm">
        {currentStep === 0 ? (
          <form className="row g-4">
            <div className="col-lg-6">
              <label className="form-label fw-bold">Họ và tên</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6">
              <label className="form-label fw-bold">Số điện thoại</label>
              <input
                type="text"
                name="phone_number"
                className="form-control"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6">
              <label className="form-label fw-bold">Ảnh đại diện</label>
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
            <div className="col-12">
              <label className="form-label fw-bold">Mô tả</label>
              <textarea
                name="bio"
                className="form-control"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            <div className="col-12 text-center mt-3">
              <Button type="primary" onClick={handleSubmit}>
                Tiếp tục
              </Button>
            </div>
          </form>
        ) : (
          <>
            <h3 className="fw-bold mb-4" style={{ fontSize: "1.2rem" }}>
              {questions[currentStep - 1].label}
            </h3>
            <Radio.Group
              onChange={handleAnswerChange}
              name={questions[currentStep - 1].name}
              value={answers[questions[currentStep - 1].name]}
              className="d-flex flex-column align-items-start"
            >
              {questions[currentStep - 1].options.map((option, idx) => (
                <Radio key={idx} value={option} className="my-2">
                  {option}
                </Radio>
              ))}
            </Radio.Group>
          </>
        )}
      </Card>

      <div className="mt-4 text-center">
        {currentStep > 0 && (
          <Button onClick={() => setCurrentStep(currentStep - 1)}>
            Quay lại
          </Button>
        )}
        {currentStep === 0 ? null : currentStep < questions.length ? (
          <Button
            type="primary"
            className="mx-3"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Tiếp tục
          </Button>
        ) : (
          <Button type="primary" className="mx-3" onClick={handleAnswerSubmit}>
            Gửi đáp án
          </Button>
        )}
      </div>
    </div>
  );
}
