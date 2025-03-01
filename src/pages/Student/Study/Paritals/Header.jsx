/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../../../api/axios'

export default function Header({ course_id, refresh }) {
    const [progress, setProgress] = useState(0)
    const [courseTitle, setCourseTitle] = useState('')
    const [certificate, setCertificate] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosClient(`/user/courses/${course_id}`)
                setProgress(res.data.data.progress.progress_percent)
                setCourseTitle(res.data.data.course.title)
                // console.log(res.data.data);
                const progressPercent = res.data.data.progress.progress_percent;
                // Nếu hoàn thành 100%, gọi API cấp chứng chỉ
                if (progressPercent == 100) {
                    const res2 = await axiosClient.post(`/certificates/student/courses/${course_id}`);
                    console.log(res2);
                    setCertificate(res2.data.data)
                }
            } catch (error) {
                console.log(error);
            }
        }
        const fetchCerti = async () => {
            try {
                const res = await axiosClient.get(`show/certificates/${course_id}`)
                setCertificate(res.data.data)
                console.log(res.data.data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchCerti()
        fetchData()
    }, [refresh, course_id])
    // console.log(parseInt(progress));

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top shadow" style={{ zIndex: 999, backgroundColor: '#1d1e27' }}>
                <div className="container-fluid px-0 d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link to={`/student/MyCourse`} className="text-dark py-1">
                            <button className="btn btn-sm btn-primary text-light">Quay lại</button>
                        </Link>
                        <h4 className="m-0 ms-3 text-light">|{courseTitle}</h4>
                    </div>
                    <div className="d-flex align-items-center">
                        {certificate && (<Link to={`/student/certificate/${certificate.id}`} className='text-light btn btn-sm btn-outline-primary me-2'>Nhận chứng chỉ</Link>)}
                        <div className="border rounded p-1">
                            <span className='text-light'>{parseInt(progress)}%</span>
                        </div>
                        <p className="m-0 ms-2 tw-font-semibold fs-5 text-light">0/12 bài học</p>
                        <button className="btn btn-sm btn-outline-light ms-2">Ghi chú</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
