import { useState } from "react";
import { Card, Rate, Input, Button, List, Avatar, Modal } from "antd";

const CourseReview = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      rating: 5,
      comment: "Khóa học rất hay!",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Trần Thị B",
      rating: 4,
      comment: "Nội dung dễ hiểu, giảng viên nhiệt tình.",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
  ]);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isCompleted, setIsCompleted] = useState(true); // Giả lập học viên đã hoàn thành khóa học
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    if (!rating || !comment) return;
    const newReview = {
      id: reviews.length + 1,
      name: "Bạn",
      rating,
      comment,
      avatar: "https://i.pravatar.cc/150?img=3",
    };
    setReviews([newReview, ...reviews]);
    setRating(0);
    setComment("");
    setIsModalOpen(false);
  };

  return (
    <Card title="Đánh giá khóa học">
      {isCompleted && (
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Đánh giá ngay
        </Button>
      )}
      <Modal
        title="Đánh giá khóa học"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Rate value={rating} onChange={setRating} />
        <Input.TextArea
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Viết đánh giá của bạn..."
          style={{ marginTop: 8 }}
        />
        <Button type="primary" onClick={handleSubmit} style={{ marginTop: 8 }}>
          Gửi đánh giá
        </Button>
      </Modal>
      <List
        itemLayout="horizontal"
        dataSource={reviews}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<strong>{item.name}</strong>}
              description={
                <div>
                  <Rate value={item.rating} disabled style={{ fontSize: 14 }} />
                  <p>{item.comment}</p>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default CourseReview;
