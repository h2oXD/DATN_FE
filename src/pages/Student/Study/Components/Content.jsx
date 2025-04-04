import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom"
import axiosClient from "../../../../api/axios";
import Video from "./Video";
import Document from "./Document";
import Quiz from "./Quiz";
import Coding from "./Coding";
import { Modal } from "antd";

export default function Content() {
    const { lesson_id, course_id, setRefresh, setCurrentTime, currentTime } = useOutletContext()
    const [lesson, setLessons] = useState(null)
    const [loading, setLoading] = useState(false)
    // const [first, setFirst] = useState(false)
    const [hasCompleted, setHasCompleted] = useState(false); // Trạng thái đã gọi API hay chưa
    const navigate = useNavigate()
    useEffect(() => {
        const lessonInProgress = async () => {
            try {
                const res = await axiosClient.get(`/progress/${course_id}`)
                console.log(res);
                if (!lesson) {
                    if (res.data.lesson_id) {
                        navigate(`?lesson=${res.data.lesson_id}`)
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        lessonInProgress()
    }, [course_id])
    useEffect(() => {
        const fetchLesson = async () => {
            setLoading(true)
            try {
                const res = await axiosClient.get(`lesson/${lesson_id}`)
                setLessons(res.data.data)
                // console.log(res.data.data);
                // console.log(loading);
                setHasCompleted(false)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }

        }
        fetchLesson()
    }, [lesson_id])


    // useEffect(() => {
    //     const lessonF = async () => {
    //         try {
    //             const res = await axiosClient.get(`course/${course_id}/lesson`)
    //             console.log(res.data.data[0].lesson_id);
    //             setFirst(res.data.data[0].lesson_id)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     lessonF()
    // }, [])
    // if (loading) {
    //     return <>
    //         <div className="container tw-mt-[200px]">
    //             <div className="p-5 d-flex justify-content-center align-items-center" style={{ width: '1000px' }}>
    //                 <div className="spinner-border" role="status">
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // }

    if (!lesson) {
        // if (first) {
        //     navigate(`?lesson=${first}`)
        // }
        return null
    }
    if (lesson.type == 'video') {
        return (
            <>
                <Video setHasCompleted={setHasCompleted} hasCompleted={hasCompleted} lesson={lesson} course_id={course_id} setRefresh={setRefresh} setCurrentTime={setCurrentTime} currentTime={currentTime} />
            </>
        )
    }
    if (lesson.type == 'document') {
        return (
            <>
                <Document lesson={lesson} course_id={course_id} setRefresh={setRefresh} />
            </>
        )
    }
    if (lesson.type == 'quiz') {
        return (
            <>
                <Quiz lesson={lesson} course_id={course_id} setRefresh={setRefresh} />
            </>
        )
    }
    if (lesson.type == 'coding') {
        return (
            <>
                <Coding lesson={lesson} course_id={course_id} setRefresh={setRefresh} />
            </>
        )
    }
}
