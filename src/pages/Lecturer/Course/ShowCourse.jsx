import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../../api/axios';
import { toast } from 'react-toastify';
import { getImageUrl } from '../../../api/common';

export default function ShowCourse() {
    const { course_id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axiosClient.get(`/lecturer/courses/${course_id}`)
                console.log(res.data.data);
                setCourse(res.data.data)
            } catch (error) {
                if (error.response.status == 404 || error.response.status == 403) {
                    navigate('/404')
                } else {
                    toast.error('Có lỗi xảy ra')
                }
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [course_id])
    if (loading || !course) {
        return (
            <>

            </>
        )
    }
    return (
        <>
            <div className='card'>
                <div className="card-header">
                    Chi tiết
                </div>
            </div>
        </>
    )
}
