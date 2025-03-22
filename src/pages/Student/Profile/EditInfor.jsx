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

const { Option } = Select;

export default function EditInfor() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

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

  const handleUpload = ({ file }) => {
    const url = URL.createObjectURL(file);
    setAvatar(url);
  };

  return (
    <>
      <FaEdit onClick={showModal} style={{ cursor: "pointer", fontSize: 20 }} />
      <Modal
        title={
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Cập nhật hồ sơ
          </h2>
        }
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Divider style={{ margin: "10px 0" }} />{" "}
        <Form layout="vertical">
          <Form.Item label="Ảnh hồ sơ" style={{ marginBottom: "10px" }}>
            <Row align="middle">
              <Col>
                <Upload
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                  customRequest={handleUpload}
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
                      <img
                        src={avatar}
                        alt="avatar"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <UploadOutlined
                        style={{ fontSize: 20, color: "#1890ff" }}
                      />
                    )}
                  </div>
                </Upload>
              </Col>
              <Col style={{ marginLeft: "12px" }}>
                <p
                  style={{ fontSize: "14px", color: "#888", marginBottom: "0" }}
                >
                  Chỉ hỗ trợ PNG hoặc JPG.
                </p>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            label="Họ Tên"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
            style={{ marginBottom: "10px" }}
          >
            <Input placeholder="Nhập họ tên" />
          </Form.Item>
          <Form.Item label="Email" style={{ marginBottom: "10px" }}>
            <Input defaultValue="nhungnthph45436@fpt.edu.vn" disabled />
          </Form.Item>
          <Form.Item label="Số điện thoại" style={{ marginBottom: "10px" }}>
            <Input
              addonBefore={
                <img src="https://flagcdn.com/w40/vn.png" width="24" alt="VN" />
              }
              placeholder="Nhập số điện thoại"
            />
          </Form.Item>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item label="Quốc gia" style={{ marginBottom: "10px" }}>
                <Select placeholder="Chọn quốc gia">
                  <Option value="vn">Việt Nam</Option>
                  <Option value="us">Mỹ</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Tỉnh thành" style={{ marginBottom: "10px" }}>
                <Select placeholder="Chọn tỉnh thành">
                  <Option value="hanoi">Hà Nội</Option>
                  <Option value="hcm">TP. Hồ Chí Minh</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item label="Ngày sinh" style={{ marginBottom: "10px" }}>
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Giới tính" style={{ marginBottom: "10px" }}>
                <Select>
                  <Option value="male">Nam</Option>
                  <Option value="female">Nữ</Option>
                  <Option value="other">Khác</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Divider style={{ margin: "10px 0" }} />{" "}
          <Form.Item style={{ textAlign: "right", marginBottom: 0 }}>
            <Button onClick={handleCancel} style={{ marginRight: "8px" }}>
              Hủy
            </Button>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
