import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom"
import axiosClient from "../../../../api/axios";
import Video from "./Video";
import Document from "./Document";
import Quiz from "./Quiz";
import Coding from "./Coding";

export default function Content() {
    const { lesson_id, course_id, setRefresh } = useOutletContext()
    const [lesson, setLessons] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchLesson = async () => {
            setLoading(true)
            try {
                const res = await axiosClient.get(`lesson/${lesson_id}`)
                setLessons(res.data.data)
                // console.log(res.data.data);
                console.log(loading);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }

        }
        fetchLesson()
    }, [lesson_id])

    // if (loading) {
    //     return <><div className="px-5 d-flex justify-content-center align-items-center" style={{ width: '1000px' }}>
    //         <div className="spinner-border" role="status">
    //             <span className="visually-hidden">Loading...</span>
    //         </div>
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
                <Video lesson={lesson} course_id={course_id} setRefresh={setRefresh} />
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
