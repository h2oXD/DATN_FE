// import {
//   Modal,
//   Button,
//   Form,
//   Input,
//   Upload,
//   Select,
//   DatePicker,
//   message,
//   Row,
//   Col,
//   Divider,
// } from "antd";
// import { useState } from "react";
// import { UploadOutlined } from "@ant-design/icons";
// import { FaEdit } from "react-icons/fa";

// const { Option } = Select;

// export default function EditInfor() {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [avatar, setAvatar] = useState(null);

//   const showModal = () => setIsModalVisible(true);
//   const handleCancel = () => setIsModalVisible(false);

//   const beforeUpload = (file) => {
//     const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//     if (!isJpgOrPng) {
//       message.error("Chỉ hỗ trợ định dạng PNG hoặc JPG!");
//       return Upload.LIST_IGNORE;
//     }
//     return true;
//   };

//   const handleUpload = ({ file }) => {
//     const url = URL.createObjectURL(file);
//     setAvatar(url);
//   };

//   return (
//     <>
//       <FaEdit onClick={showModal} style={{ cursor: "pointer", fontSize: 20 }} />
//       <Modal
//         title={
//           <h2
//             style={{
//               fontSize: "20px",
//               fontWeight: "bold",
//               textAlign: "center",
//             }}
//           >
//             Cập nhật hồ sơ
//           </h2>
//         }
//         open={isModalVisible}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <Divider style={{ margin: "10px 0" }} />{" "}
//         <Form layout="vertical">
//           <Form.Item label="Ảnh hồ sơ" style={{ marginBottom: "10px" }}>
//             <Row align="middle">
//               <Col>
//                 <Upload
//                   showUploadList={false}
//                   beforeUpload={beforeUpload}
//                   customRequest={handleUpload}
//                   accept="image/png, image/jpeg"
//                 >
//                   <div
//                     style={{
//                       width: 80,
//                       height: 80,
//                       borderRadius: "50%",
//                       border: "1px dashed #ccc",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       cursor: "pointer",
//                       overflow: "hidden",
//                     }}
//                   >
//                     {avatar ? (
//                       <img
//                         src={avatar}
//                         alt="avatar"
//                         style={{
//                           width: "100%",
//                           height: "100%",
//                           objectFit: "cover",
//                         }}
//                       />
//                     ) : (
//                       <UploadOutlined
//                         style={{ fontSize: 20, color: "#1890ff" }}
//                       />
//                     )}
//                   </div>
//                 </Upload>
//               </Col>
//               <Col style={{ marginLeft: "12px" }}>
//                 <p
//                   style={{ fontSize: "14px", color: "#888", marginBottom: "0" }}
//                 >
//                   Chỉ hỗ trợ PNG hoặc JPG.
//                 </p>
//               </Col>
//             </Row>
//           </Form.Item>
//           <Form.Item
//             label="Họ Tên"
//             name="name"
//             rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
//             style={{ marginBottom: "10px" }}
//           >
//             <Input placeholder="Nhập họ tên" />
//           </Form.Item>
//           <Form.Item label="Email" style={{ marginBottom: "10px" }}>
//             <Input defaultValue="nhungnthph45436@fpt.edu.vn" disabled />
//           </Form.Item>
//           <Form.Item label="Số điện thoại" style={{ marginBottom: "10px" }}>
//             <Input
//               addonBefore={
//                 <img src="https://flagcdn.com/w40/vn.png" width="24" alt="VN" />
//               }
//               placeholder="Nhập số điện thoại"
//             />
//           </Form.Item>
//           <Row gutter={12}>
//             <Col span={12}>
//               <Form.Item label="Quốc gia" style={{ marginBottom: "10px" }}>
//                 <Select placeholder="Chọn quốc gia">
//                   <Option value="vn">Việt Nam</Option>
//                   <Option value="us">Mỹ</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Tỉnh thành" style={{ marginBottom: "10px" }}>
//                 <Select placeholder="Chọn tỉnh thành">
//                   <Option value="hanoi">Hà Nội</Option>
//                   <Option value="hcm">TP. Hồ Chí Minh</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={12}>
//             <Col span={12}>
//               <Form.Item label="Ngày sinh" style={{ marginBottom: "10px" }}>
//                 <DatePicker style={{ width: "100%" }} />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Giới tính" style={{ marginBottom: "10px" }}>
//                 <Select>
//                   <Option value="male">Nam</Option>
//                   <Option value="female">Nữ</Option>
//                   <Option value="other">Khác</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//           </Row>
//           <Divider style={{ margin: "10px 0" }} />{" "}
//           <Form.Item style={{ textAlign: "right", marginBottom: 0 }}>
//             <Button onClick={handleCancel} style={{ marginRight: "8px" }}>
//               Hủy
//             </Button>
//             <Button type="primary" htmlType="submit">
//               Cập nhật
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </>
//   );
// }

import {
  Modal,
  Button,
  
  Input,
  Upload,
  Select,
  DatePicker,
  message,
  Row,
  Col,
  Divider,
  Form,
} from "antd";
import { useState, useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { FaEdit } from "react-icons/fa";

import dayjs from "dayjs";
import axiosClient from "../../../api/axios";

const { Option } = Select;

export default function EditInfor() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosClient.get("/user").then((response) => {
      const user = response.data;
      console.log("User data from API:", user); // Kiểm tra dữ liệu nhận từ API
      if (user) {
        form.setFieldsValue({
          name: user.name,
          phone_number: user.phone_number,
          bio: user.bio,
          linkedin_url: user.linkedin_url,
          website_url: user.website_url,
          country: user.country,
          province: user.province,
          birth_date: user.birth_date ? dayjs(user.birth_date) : null,
          gender: user.gender,
        });
        console.log("Updated form values:", form.getFieldsValue()); // Kiểm tra giá trị form sau khi gán
      }
    });
  }, [form]);  
  
  
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("Chỉ hỗ trợ định dạng PNG hoặc JPG!");
      return Upload.LIST_IGNORE;
    }
    return true;
  };

  const [avatarFile, setAvatarFile] = useState(null);

  const handleUpload = ({ file }) => {
    const url = URL.createObjectURL(file);
    setAvatar(url);
    setAvatarFile(file); // Lưu file ảnh để gửi lên API
  };


  const handleSubmit = async (values) => {
    console.log("Đã submit form:", values);
    setLoading(true);
  
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone_number", values.phone_number || "");
    formData.append("bio", values.bio || "");
    formData.append("linkedin_url", values.linkedin_url || "");
    formData.append("website_url", values.website_url || "");
    formData.append("country", values.country || "");
    formData.append("province", values.province || "");
    formData.append(
      "birth_date",
      values.birth_date ? dayjs(values.birth_date).format("YYYY-MM-DD") : ""
    );
    formData.append("gender", values.gender || "");
  
    // Nếu có ảnh mới thì gửi lên API
    if (avatarFile) {
      formData.append("profile_picture", avatarFile);
    }
    console.log("Gửi API:", formData);
    try {
      await axiosClient.put("/api/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      message.success("Cập nhật thông tin thành công!");
      setIsModalVisible(false);
    } catch (error) {
      console.error("Lỗi cập nhật thông tin:", error);
      message.error("Cập nhật thất bại, vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };
  

  

  return (
    <>
      <FaEdit onClick={showModal} style={{ cursor: "pointer", fontSize: 20 }} />
      <Modal
        title={
          <h2 style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>
            Cập nhật hồ sơ
          </h2>
        }
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Divider style={{ margin: "10px 0" }} />
        <Form form={form} layout="vertical" onFinish={handleSubmit} onFinishFailed={(error) => console.log("Form lỗi:", error)}>
          <Form.Item label="Ảnh hồ sơ" style={{ marginBottom: "10px" }}>
            <Row align="middle">
              <Col>
                <Upload showUploadList={false} beforeUpload={beforeUpload} customRequest={handleUpload} accept="image/png, image/jpeg">
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      border: "1px dashed #ccc",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      overflow: "hidden",
                    }}
                  >
                    {avatar ? (
                      <img src={avatar} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <UploadOutlined style={{ fontSize: 20, color: "#1890ff" }} />
                    )}
                  </div>
                </Upload>
              </Col>
              <Col style={{ marginLeft: "12px" }}>
                <p style={{ fontSize: "14px", color: "#888", marginBottom: "0" }}>Chỉ hỗ trợ PNG hoặc JPG.</p>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="Họ Tên" name="name" rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]} style={{ marginBottom: "10px" }}>
            <Input placeholder="Nhập họ tên" />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="phone_number" style={{ marginBottom: "10px" }}>
            <Input addonBefore={<img src="https://flagcdn.com/w40/vn.png" width="24" alt="VN" />} placeholder="Nhập số điện thoại" />
          </Form.Item>
          <Form.Item label="Bio" name="bio" style={{ marginBottom: "10px" }}>
            <Input placeholder="Nhập mô tả bản thân" />
          </Form.Item>
          <Form.Item label="LinkedIn" name="linkedin_url" style={{ marginBottom: "10px" }}>
            <Input placeholder="Nhập URL LinkedIn" />
          </Form.Item>
          <Form.Item label="Website" name="website_url" style={{ marginBottom: "10px" }}>
            <Input placeholder="Nhập URL website" />
          </Form.Item>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item label="Quốc gia" name="country" style={{ marginBottom: "10px" }}>
                <Select placeholder="Chọn quốc gia">
                  <Option value="Vietnam">Việt Nam</Option>
                  <Option value="USA">Mỹ</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Tỉnh thành" name="province" style={{ marginBottom: "10px" }}>
                <Select placeholder="Chọn tỉnh thành">
                  <Option value="Hanoi">Hà Nội</Option>
                  <Option value="HCM">TP. Hồ Chí Minh</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item label="Ngày sinh" name="birth_date" style={{ marginBottom: "10px" }}>
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Giới tính" name="gender" style={{ marginBottom: "10px" }}>
                <Select>
                  <Option value="male">Nam</Option>
                  <Option value="female">Nữ</Option>
                  <Option value="other">Khác</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Divider style={{ margin: "10px 0" }} />
          <Form.Item style={{ textAlign: "right", marginBottom: 0 }}>
            <Button onClick={handleCancel} style={{ marginRight: "8px" }}>
              Hủy
            </Button>
            <Button type="primary" htmlType="submit" loading={loading}>
  Cập nhật
</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

