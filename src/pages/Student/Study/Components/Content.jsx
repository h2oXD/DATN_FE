import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom"
import axiosClient from "../../../../api/axios";
import { getImageUrl } from "../../../../api/common";

export default function Content() {
    const { lesson_id, course_id } = useOutletContext()
    const [lesson, setLessons] = useState(null)
    const [loading, setLoading] = useState(false)
    console.log(lesson_id);
    console.log(course_id);
    useEffect(() => {
        const fetchLesson = async () => {
            setLoading(true)
            try {
                const res = await axiosClient.get(`lesson/${lesson_id}`)
                setLessons(res.data.data)
                console.log(res.data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }

        }
        fetchLesson()
    }, [lesson_id])

    // if (loading) {
    //     return <><div className="px-5" style={{ width: '1000px' }}>
    //         <h1>Đang load...</h1>
    //     </div></>
    // }

    if (!lesson) {
        return <><div className="px-5" style={{ width: '1000px' }}>
            <h1>Bắt đầu học nào</h1>
        </div></>
    }
    if (lesson.type == 'video') {
        return (
            <>
                {/* Content */}
                <div className="px-5" style={{ width: '1000px' }}>
                    <div style={{ height: '500px' }} className="d-flex bg-dark rounded">
                        <video src={getImageUrl(lesson.videos.video_url)} controls className="w-100 tw-rounded-xl"></video>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="mt-2">{lesson.title}</h3>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-outline-primary">+ Thêm ghi chú tại: 0:00</button>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div>
                            <span className="avatar">
                                <img src="/assets/images/avatar/avatar-1.jpg" className="rounded-circle" alt="" />
                            </span>
                        </div>
                        <div className="ms-2 d-flex">
                            <h5>Thầy Tống Văn Đức</h5>
                        </div>
                        <div className="ms-4">
                            <button className="btn btn-sm btn-primary tw-rounded-3xl">Đánh giá</button>
                        </div>
                    </div>
                    <div className="card rounded px-3 py-2 mt-2 shadow-none mb-3" style={{ backgroundColor: '#F2F2F2' }}>
                        <span className="">Cập nhật ngày: 25/02/2025</span>
                        <label htmlFor="" className="fw-bold">Mô tả</label>
                        <p>Mô tả gì đó</p>
                    </div>
                </div>
            </>
        )
    }
    if (lesson.type == 'document') {
        return (
            <>
                {/* Content */}
                <div className="px-5" style={{ width: '1000px' }}>
                    <h1>Document</h1>
                    <h1>{lesson_id}</h1>
                    {/* <div style={{ height: '500px' }} className="d-flex ">
                        <video src="" controls className="w-100 tw-rounded-xl"></video>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="mt-2">Giới thiệu về JavaScript</h3>
                            <span className="mt-2">Cập nhật ngày: 25/02/2025</span>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-outline-dark">+ Thêm ghi chú tại: 0:00</button>
                        </div>
                    </div> */}
                </div>
            </>
        )
    }
    if (lesson.type == 'quiz') {
        return (
            <>
                {/* Content */}
                <div className="px-5" style={{ width: '1000px' }}>
                    <h1>quiz</h1>
                    <h1>{lesson_id}</h1>
                    {/* <div style={{ height: '500px' }} className="d-flex ">
                        <video src="" controls className="w-100 tw-rounded-xl"></video>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="mt-2">Giới thiệu về JavaScript</h3>
                            <span className="mt-2">Cập nhật ngày: 25/02/2025</span>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-outline-dark">+ Thêm ghi chú tại: 0:00</button>
                        </div>
                    </div> */}
                </div>
            </>
        )
    }
    if (lesson.type == 'coding') {
        return (
            <>
                {/* Content */}
                <div className="px-5" style={{ width: '1000px' }}>
                    <h1>coding</h1>
                    <h1>{lesson_id}</h1>
                    {/* <div style={{ height: '500px' }} className="d-flex ">
                        <video src="" controls className="w-100 tw-rounded-xl"></video>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="mt-2">Giới thiệu về JavaScript</h3>
                            <span className="mt-2">Cập nhật ngày: 25/02/2025</span>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-outline-dark">+ Thêm ghi chú tại: 0:00</button>
                        </div>
                    </div> */}
                </div>
            </>
        )
    }
}
