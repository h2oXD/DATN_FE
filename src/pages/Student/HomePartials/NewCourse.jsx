import { useEffect, useState } from 'react'
import axiosClient from '../../../api/axios'
import { Link } from 'react-router-dom'
import { getImageUrl } from '../../../api/common'
import { Skeleton } from 'antd'

export default function NewCourse() {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const fetchCourse = async () => {
            try {
                const res = await axiosClient.get('/courseNew')
                setCourses(res.data.data)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        fetchCourse()
    }, [])
    if (loading) {
        return <>
            <div className="card p-5">
                <Skeleton />
            </div>
        </>
    }
    if (!courses) {
        return <><div className='p-4'>Không có dữ liệu khoá học mới</div></>
    }
    return (
        <>
            <div className="ms-2 mt-2">
                <h4 className="ms-1">Khoá học mới nhất</h4>
                <div className="row mb-2">
                    {courses.map((course, index) => (
                        <div className="col-lg-3 col-12" key={index}>
                            <div className="card d-flex rounded shadow-none">
                                <div className="p-2" style={{ position: 'relative' }}> {/* Thêm style cho div cha */}
                                    <Link to={`/student/home/${course.id}/coursedetail`}>
                                        <div style={{
                                            position: 'relative',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
                                        }}>
                                            <img
                                                src={
                                                    getImageUrl(course.thumbnail) ?? "/default-thumbnail.jpg"
                                                }
                                                alt="course"
                                                className="rounded img-4by3-lg w-100"
                                            />
                                            {course.level && (
                                                <span className="badge bg-dark-soft" style={{
                                                    position: 'absolute',
                                                    top: '10px',
                                                    right: '10px',
                                                    padding: '5px 10px',
                                                    backgroundColor: 'white'
                                                }}>
                                                    {course.level}
                                                </span>
                                            )}
                                        </div>
                                    </Link>
                                </div>
                                <div className="px-2 py-1">
                                    <h4 className="m-0 h4">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <Link to={`/student/home/${course.id}/coursedetail`} className="text-inherit">{course.title}</Link>
                                            </div>
                                        </div>
                                    </h4>
                                    <span className="fs-6">{course.lecturer_name}</span>
                                    <ul className="list-inline fs-6 mb-0 d-flex justify-content-between align-items-center pb-2">
                                        <li className="list-inline-item d-flex flex-column">
                                            {course.is_free == 0 && course.price_sale && (
                                                <>
                                                    <span className="h5 m-0">
                                                        <del className="text-muted me-2">
                                                            <span className="fw-bold">
                                                                {parseInt(course.price_regular).toLocaleString() + 'đ'}
                                                            </span>
                                                        </del>
                                                        <span className="fw-bold">
                                                            {parseInt(course.price_sale).toLocaleString() + 'đ'}
                                                        </span>
                                                    </span>
                                                </>
                                            )}
                                            {course.is_free == 0 && !course.price_sale && (
                                                <>
                                                    <span className="fw-bold h5 m-0">
                                                        {parseInt(course.price_sale).toLocaleString() + 'đ'}
                                                    </span>
                                                </>
                                            )}
                                            {course.is_free == 1 && (<><span className="fw-bold h5 m-0">Miễn phí</span></>)}

                                            <span className="text-warning fw-bold">{
                                                course.average_rating % 1 === 0 ?
                                                    Math.floor(course.average_rating) :
                                                    course.average_rating.toFixed(1)
                                            } ★ ({course.average_rating % 1 === 0 ?
                                                Math.floor(course.average_rating) :
                                                course.average_rating.toFixed(1)
                                                } đánh giá)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
