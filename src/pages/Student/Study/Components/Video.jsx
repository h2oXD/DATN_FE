/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { getImageUrl } from '../../../../api/common';
import axiosClient from '../../../../api/axios';
import { Button, Modal } from 'antd';

export default function Video({ lesson, course_id, setRefresh, setCurrentTime, currentTime }) {
    const [watchedPercentage, setWatchedPercentage] = useState(0);
    const videoRef = useRef(null);
    const [hasCompleted, setHasCompleted] = useState(false); // Trạng thái đã gọi API hay chưa
    const lastTimeRef = useRef(0); // Lưu thời điểm trước khi tua
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [warningCount, setWarningCount] = useState(0); // Số lần vi phạm
    const [maxWatchedTime, setMaxWatchedTime] = useState(0); // Lưu thời gian xem cao nhất

    // Hàm call API để cập nhật trạng thái lesson đã hoàn thành
    const markLessonAsComplete = async () => {
        try {
            // Gọi API của bạn ở đây, ví dụ:
            const res = await axiosClient.post(`student/courses/${course_id}/lessons/${lesson.id}/completes`)
            console.log(res);
            setRefresh(prev => !prev);
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
            setCurrentTime(currentTime);
            const percentage = (currentTime / duration) * 100;
            setWatchedPercentage(percentage);
            // Cập nhật thời gian xem cao nhất chỉ khi video không bị tua
            if (currentTime > lastTimeRef.current) {
                setMaxWatchedTime(currentTime);
            }
            if(percentage < 1){
                setHasCompleted(false)
            }
            // Hoàn thành 80% thì gọi API
            if (percentage >= 80 && !hasCompleted) {
                setHasCompleted(true);
                markLessonAsComplete();
            }

            lastTimeRef.current = currentTime; // Cập nhật lastTimeRef để kiểm tra tua sau này
        }
    };
    // Format thời gian thành mm:ss
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Kiểm tra nếu người dùng tua vượt quá thời gian đã xem lớn nhất
    const handleSeeking = () => {
        if (videoRef.current) {
            const newTime = videoRef.current.currentTime;
            if (newTime > maxWatchedTime + 60) { // Nếu người dùng tua vượt quá maxWatchedTime + 60s
                setIsModalOpen(true);
                setWarningCount(prev => prev + 1);
                videoRef.current.currentTime = maxWatchedTime; // Quay lại vị trí cao nhất đã xem
            }
        }
    };

    // Cập nhật lastTimeRef khi seek hoàn thành
    const handleSeeked = () => {
        if (videoRef.current) {
            lastTimeRef.current = videoRef.current.currentTime;
        }
    };
    // Chặn tua bằng bàn phím
    // const handleKeyDown = (event) => {
    //     if (['ArrowRight', 'ArrowLeft', 'L', 'J'].includes(event.key)) {
    //         setIsModalOpen(true);
    //         event.preventDefault();
    //     }
    // };

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('timeupdate', handleTimeUpdate);
            videoElement.addEventListener('seeking', handleSeeking);
            videoElement.addEventListener('seeked', handleSeeked);
            // document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('timeupdate', handleTimeUpdate);
                videoElement.removeEventListener('seeking', handleSeeking);
                videoElement.removeEventListener('seeked', handleSeeked);
                // document.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, [hasCompleted, maxWatchedTime]);


    return (
        <>

            {/* Content */}
            <div className="w-100">
                <div style={{ height: '470px' }} className="d-flex tw-bg-black justify-content-center">
                    <video
                        ref={videoRef}
                        src={getImageUrl(lesson.videos.video_url)}
                        controls
                    ></video>
                </div>
                <div className="d-flex align-items-center justify-content-between tw-px-20">
                    <div>
                        <h2 className="mt-3">{lesson.title}</h2>
                    </div>
                    <div>
                        <button className="btn btn-sm tw-bg-[#ebebeb]" onClick={() => {
                            if (videoRef.current) {
                                videoRef.current.pause(); // Dừng video khi nhấn nút
                            }
                        }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">+ Thêm ghi chú tại: {formatTime(currentTime)}</button>
                    </div>
                </div>
                <div className="px-3 shadow-none mb-3 tw-px-20">
                    <span className="">Cập nhật ngày: 25/02/2025</span>
                </div>
            </div>
            <Modal
                title="Thông báo"
                open={isModalOpen}
                width={300}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
            >
                <div>
                    <p>Bạn không nên học quá nhanh!</p>
                    <div className='d-flex justify-content-end'>
                        <button type='button' onClick={() => setIsModalOpen(false)} className='btn btn-sm btn-primary'>OK</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
