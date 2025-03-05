import { useState, useEffect } from 'react';
import axiosClient from '../../../api/axios';
import { useParams } from 'react-router-dom';
import { getImageUrl } from '../../../api/common';

export default function ShowCertificate() {
    const { id } = useParams();
    const [certificate, setCertificate] = useState(null);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCerti = async () => {
            try {
                const res = await axiosClient.get(`/certificates/${id}`);
                setCertificate(res.data.data.certificate_url);

                const course_id = res.data.data.course_id;
                const res2 = await axiosClient.get(`/courses/${course_id}/public`);
                setCourse(res2.data.data);
                console.log(res2.data.data);

            } catch (error) {
                console.log(error);
            }
        };
        fetchCerti();
    }, [id]);
    if (!course) {
        return <>Load</>
    }

    return (
        <>
            <div className='ms-3'>
                <div className="row gap-3">
                    <div className="card px-5 col-7" style={{ backgroundColor: "#fff", padding: "20px", display: "flex", justifyContent: "center" }}>
                        {certificate ? (
                            <iframe
                                src={`${certificate}#toolbar=0&navpanes=0&scrollbar=0`}
                                width="100%"
                                height="543px"
                                title="Certificate"
                                style={{ border: "none", backgroundColor: "#ffffff" }}

                            />
                        ) : (
                            <p>Đang tải chứng chỉ...</p>
                        )}
                    </div>
                    <div className="col-3">
                        <div className='card p-2'>
                            <img src={getImageUrl(course.course.thumbnail)} alt="" className='rounded' />
                            <p className='fw-semibold m-0'>{course.course.title}</p>
                            <small className='fs-5'>Giảng viên: {course.instructor.name}</small>
                            <div>
                                <small>Số bài học: {course.total_lessons}</small>
                            </div>
                        </div>
                        <a href={certificate} className='btn btn-sm btn-primary mt-2'>Tải xuống</a>
                    </div>
                </div>
            </div>
        </>
    );
}
