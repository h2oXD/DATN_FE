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
// import { useState, useEffect } from "react";
// import { UploadOutlined } from "@ant-design/icons";
// import { FaEdit } from "react-icons/fa";
// import axiosClient from "../../../api/axios";
// import dayjs from "dayjs";

// const { Option } = Select;

// export default function EditInfor() {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [form] = Form.useForm();
//   const [avatar, setAvatar] = useState(null);

//   useEffect(() => {
//     axiosClient.get("/user").then((response) => {
//       console.log("User Data:", response.data);
//       const userData = response.data || {};
      
//       form.setFieldsValue({
//         name: userData.name || "",
//         phone_number: userData.phone_number || "",
//         country: userData.country || undefined,
//         province: userData.province || undefined,
//         birth_date: userData.birth_date ? dayjs(userData.birth_date) : null,
//         gender: userData.gender || undefined,
//       });
//       setAvatar(userData.profile_picture || null);
//     }).catch((error) => {
//       console.error("Lỗi khi lấy dữ liệu người dùng:", error);
//     });
//   }, [form]);
  
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

//   const handleUpdate = (values) => {
//     console.log("Submitting form:", values);
//     axiosClient.put("/users", values).then(() => {
//       message.success("Cập nhật thành công!");
//       setIsModalVisible(false);
//     }).catch((error) => {
//       console.error("Lỗi khi cập nhật:", error);
//       message.error("Có lỗi xảy ra!");
//     });
//   };

//   return (
//     <>
//       <FaEdit onClick={showModal} style={{ cursor: "pointer", fontSize: 20 }} />
//       <Modal
//         title={<h2 style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>Cập nhật hồ sơ</h2>}
//         open={isModalVisible}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <Divider style={{ margin: "10px 0" }} />
//         <Form form={form} layout="vertical" onFinish={handleUpdate}>
//           <Form.Item label="Ảnh hồ sơ">
//             <Row align="middle">
//               <Col>
//                 <Upload
//                   showUploadList={false}
//                   beforeUpload={beforeUpload}
//                   customRequest={handleUpload}
//                   accept="image/png, image/jpeg"
//                 >
//                   <div
//                     style={{ width: 80, height: 80, borderRadius: "50%", border: "1px dashed #ccc", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", overflow: "hidden" }}
//                   >
//                     {avatar ? <img src={avatar} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <UploadOutlined style={{ fontSize: 20, color: "#1890ff" }} />}
//                   </div>
//                 </Upload>
//               </Col>
//             </Row>
//           </Form.Item>
//           <Form.Item label="Họ Tên" name="name" rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}>
//             <Input placeholder="Nhập họ tên" />
//           </Form.Item>
//           <Form.Item label="Số điện thoại" name="phone_number">
//             <Input placeholder="Nhập số điện thoại" />
//           </Form.Item>
//           <Row gutter={12}>
//             <Col span={12}>
//               <Form.Item label="Quốc gia" name="country">
//                 <Select placeholder="Chọn quốc gia">
//                   <Option value="Vietnam">Việt Nam</Option>
//                   <Option value="USA">Mỹ</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Tỉnh thành" name="province">
//                 <Select placeholder="Chọn tỉnh thành">
//                   <Option value="Hanoi">Hà Nội</Option>
//                   <Option value="HCM">TP. Hồ Chí Minh</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={12}>
//             <Col span={12}>
//               <Form.Item label="Ngày sinh" name="birth_date">
//                 <DatePicker style={{ width: "100%" }} />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Giới tính" name="gender">
//                 <Select>
//                   <Option value="male">Nam</Option>
//                   <Option value="female">Nữ</Option>
//                   <Option value="other">Khác</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//           </Row>
//           <Divider style={{ margin: "10px 0" }} />
//           <Form.Item style={{ textAlign: "right" }}>
//             <Button onClick={handleCancel} style={{ marginRight: "8px" }}>Hủy</Button>
            
//             <Button type="primary" htmlType="submit">Cập nhật</Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </>
//   );
// }

import {
  Modal,
  Button,
  Form,
  Input,
  Upload,
  Select,
  DatePicker,
  message,
  Row,
  Col,
  Divider,
} from "antd";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { FaEdit } from "react-icons/fa";
import axiosClient from "../../../api/axios";
import dayjs from "dayjs";

const { Option } = Select;

export default function EditInfor() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [avatar, setAvatar] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);

  // Show modal và load dữ liệu sau khi modal xuất hiện
  const showModal = () => {
    setIsModalVisible(true);

    // Delay để đảm bảo Form đã mount xong
    setTimeout(() => {
      axiosClient
        .get("/user")
        .then((response) => {
          const userData = response.data || {};
          form.setFieldsValue({
            name: userData.name || "",
            phone_number: userData.phone_number || "",
            country: userData.country || undefined,
            province: userData.province || undefined,
            birth_date: userData.birth_date ? dayjs(userData.birth_date) : null,
            gender: userData.gender || undefined,
            bio: userData.bio || "",
            linkedin_url: userData.linkedin_url || "",
            website_url: userData.website_url || "",
          });
          setAvatar(userData.profile_picture || null);
        })
        .catch((error) => {
          console.error("Lỗi khi lấy dữ liệu người dùng:", error);
        });
    }, 0); // Delay 0ms
  };

  const handleCancel = () => setIsModalVisible(false);

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("Chỉ hỗ trợ định dạng PNG hoặc JPG!");
      return Upload.LIST_IGNORE;
    }
    return true;
  };

  const handleUpload = (file) => {
    const url = URL.createObjectURL(file.originFileObj || file);
    setAvatar(url);
    setAvatarFile(file);
  };
  

  const handleUpdate = async (values) => {
    const formData = new FormData();
  
    // Kiểm tra dữ liệu truyền vào
    console.log("values:", values);
    console.log("avatarFile:", avatarFile);
  
    // Append dữ liệu bắt buộc
    formData.append("name", values.name || "");
    formData.append("phone_number", values.phone_number || "");
    formData.append("bio", values.bio || "");
  
    // Append ảnh
    if (avatarFile && avatarFile.originFileObj) {
      formData.append("profile_picture", avatarFile.originFileObj);
    } else {
      // Nếu backend yêu cầu ảnh bắt buộc
      console.warn("Avatar file chưa được chọn!");
      formData.append("profile_picture", "");
    }
  
    // Append các trường tùy chọn
    formData.append("linkedin_url", values.linkedin_url || "");
    formData.append("website_url", values.website_url || "");
    formData.append("country", values.country || "");
    formData.append("province", values.province || "");
    formData.append("birth_date", values.birth_date ? values.birth_date.format("YYYY-MM-DD") : "");
    formData.append("gender", values.gender || "");
  
    // Log toàn bộ dữ liệu trước khi gửi
    console.log("FormData gửi đi:");
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }
  
    try {
      const res = await axiosClient.put("/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      message.success("Cập nhật thành công");
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error);
      if (error.response?.status === 422) {
        console.error("Validation Errors:", error.response.data.errors);
      }
      message.error("Cập nhật thất bại. Vui lòng kiểm tra lại thông tin.");
    }
  };
  
  
  
  
  return (
    <>
      <FaEdit onClick={showModal} style={{ cursor: "pointer", fontSize: 20 }} />
      <Modal
        title={<h2 style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>Cập nhật hồ sơ</h2>}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Divider style={{ margin: "10px 0" }} />
        <Form form={form} layout="vertical" onFinish={handleUpdate} onSubmit={handleUpdate}>
        {console.log("Form rendered")}  {/* Kiểm tra xem form có render đúng không */}
        <Form.Item label="Ảnh hồ sơ">
  <Row align="middle">
    <Col>
      <Upload
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={({ file }) => handleUpload(file)}
        accept="image/png, image/jpeg"
      >
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
  </Row>
</Form.Item>


          <Form.Item
            label="Họ Tên"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input placeholder="Nhập họ tên" />
          </Form.Item>

          <Form.Item label="Số điện thoại" name="phone_number">
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          <Form.Item
            label="Giới thiệu bản thân"
            name="bio"
            rules={[{ required: true, message: "Vui lòng nhập giới thiệu!" }]}
          >
            <Input.TextArea rows={3} placeholder="Nhập mô tả ngắn về bạn" />
          </Form.Item>

          <Form.Item label="LinkedIn URL" name="linkedin_url">
            <Input placeholder="Nhập liên kết LinkedIn" />
          </Form.Item>

          <Form.Item label="Website URL" name="website_url">
            <Input placeholder="Nhập liên kết website cá nhân" />
          </Form.Item>

          <Row gutter={12}>
            <Col span={12}>
              <Form.Item label="Quốc gia" name="country">
                <Select placeholder="Chọn quốc gia">
                  <Option value="Vietnam">Việt Nam</Option>
                  <Option value="USA">Mỹ</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Tỉnh thành" name="province">
                <Select placeholder="Chọn tỉnh thành">
                  <Option value="Hanoi">Hà Nội</Option>
                  <Option value="HCM">TP. Hồ Chí Minh</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={12}>
              <Form.Item label="Ngày sinh" name="birth_date">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Giới tính" name="gender">
                <Select placeholder="Chọn giới tính">
                  <Option value="male">Nam</Option>
                  <Option value="female">Nữ</Option>
                  <Option value="other">Khác</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Divider style={{ margin: "10px 0" }} />
          <Form.Item style={{ textAlign: "right" }}>
            <Button onClick={handleCancel} style={{ marginRight: "8px" }}>
              Hủy
            </Button>
            <Button type="primary" onClick={() => form.submit()}>Cập nhật</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
