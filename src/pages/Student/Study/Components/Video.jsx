/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { getImageUrl } from '../../../../api/common';
import axiosClient from '../../../../api/axios';

export default function Video({ lesson, course_id }) {
    const [watchedPercentage, setWatchedPercentage] = useState(0);
    const videoRef = useRef(null);
    const [hasCompleted, setHasCompleted] = useState(false); // Trạng thái đã gọi API hay chưa
    console.log(watchedPercentage);

    // Hàm call API để cập nhật trạng thái lesson đã hoàn thành
    const markLessonAsComplete = async () => {
        try {
            // Gọi API của bạn ở đây, ví dụ:
            const res = await axiosClient.post(`student/courses/${course_id}/lessons/${lesson.id}/completes`)
            console.log(res);

            // await api.markLessonComplete(lesson.id);
            console.log("Lesson completed:", lesson.id);
        } catch (error) {
            console.error("Failed to mark lesson as complete", error);
        }
    };

    // Hàm theo dõi thời gian xem video và tính phần trăm đã xem
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            const percentage = (currentTime / duration) * 100;
            setWatchedPercentage(percentage);

            // Kiểm tra nếu người dùng đã xem ít nhất 80% video
            if (percentage >= 80 && !hasCompleted) {
                setHasCompleted(true);
                markLessonAsComplete(); // Call API khi hoàn thành 80% video
            }
        }
    };

    useEffect(() => {
        // Đảm bảo là hàm được gọi khi video đã sẵn sàng
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('timeupdate', handleTimeUpdate);
        }

        // Cleanup
        return () => {
            if (videoElement) {
                videoElement.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, [hasCompleted]);

    return (
        <>
            {/* Content */}
            <div className="px-5" style={{ width: '1000px' }}>
                <div style={{ height: '500px' }} className="d-flex tw-bg-black rounded">
                    <video
                        ref={videoRef}
                        src={getImageUrl(lesson.videos.video_url)}
                        controls
                        className="w-100 tw-rounded-xl"
                    ></video>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h3 className="mt-2">{lesson.title}</h3>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-outline-primary">+ Thêm ghi chú tại: 0:00</button>
                    </div>
                </div>
                <div className="card rounded px-3 py-2 mt-2 shadow-none mb-3" style={{ backgroundColor: '#F2F2F2' }}>
                    <span className="">Cập nhật ngày: 25/02/2025</span>
                    <label htmlFor="" className="fw-bold">Mô tả</label>
                    <p>Mô tả gì đó</p>
                </div>
            </div>
        </>
    );
}
