/* eslint-disable react/prop-types */
import axiosClient from "../../../../api/axios";
import { getImageUrl } from "../../../../api/common";

export default function Document({ lesson, course_id, setRefresh }) {
    // Hàm call API khi nhấn vào nút tải xuống
    const handleDownloadClick = async (e) => {
        e.preventDefault(); // Ngừng hành động mặc định của thẻ <a>

        try {
            console.log("Gọi API để xử lý tải tài liệu...");
            await axiosClient.post(`student/courses/${course_id}/lessons/${lesson.id}/completes`)
            // Gọi API ở đây, ví dụ:
            // await api.downloadDocument(lesson.id);
            setRefresh(prev => !prev);
            // Sau khi gọi API, người dùng sẽ tải xuống tài liệu
            window.location.href = getImageUrl(lesson.documents.document_url); // Mở tài liệu để tải xuống
        } catch (error) {
            console.error("Lỗi khi gọi API", error);
        }
    };

    return (
        <>
            {/* Content */}
            <div className="container mt-4 px-5" style={{ width: '1150px' }}>
                <div className="tw-m-[30px]">
                    <h3>{lesson.title}</h3>
                    <p>{lesson.description}</p>
                    <a href={getImageUrl(lesson.documents.document_url)} download onClick={handleDownloadClick}>
                        Tải xuống
                    </a>
                </div>
            </div>
        </>
    );
}
