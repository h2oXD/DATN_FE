import { Button, Input, Modal, Rate, Typography, Form } from "antd";

const { TextArea } = Input;
const { Title } = Typography;

export function ReviewModal({ visible, onClose }) {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Dữ liệu đánh giá:", values);
        form.resetFields();
        onClose();
      })
      .catch((error) => {
        console.error("Lỗi:", error);
      });
  };

  return (
    <Modal
      title={<Title level={3}>Đánh giá</Title>}
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Gửi đánh giá
        </Button>,
      ]}
      width={700}
    >
      <Form form={form} layout="vertical">
        <Title level={5}>Bạn có hài lòng với khóa học?</Title>
        <Form.Item
          name="rating"
          rules={[{ required: true, message: "Vui lòng chọn số sao!" }]}
          style={{ marginBottom: "5px" }}
        >
          <Rate />
        </Form.Item>
        <Title level={5}> Hãy chia sẻ cảm nhận của bạn về khóa học này!</Title>
        <Form.Item
          name="review"
          rules={[{ required: true, message: "Vui lòng nhập nhận xét!" }]}
        >
          <TextArea rows={3} placeholder="Nhận xét của bạn..." />
        </Form.Item>
      </Form>
    </Modal>
  );
}
