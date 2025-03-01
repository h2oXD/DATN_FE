import { Outlet, useParams, useSearchParams } from "react-router-dom";
import ListLesson from "./Paritals/ListLesson";
import Header from "./Paritals/Header";
import { useState } from "react";

export default function Course() {
    const { course_id } = useParams();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('lesson');
    const [refresh, setRefresh] = useState(false);
    return (
        <>
            {/* Header */}
            <Header course_id={course_id} refresh={refresh}/>
            <div className="d-flex justify-content-center container-fluid p-0 mt-2">
                <Outlet context={{ lesson_id: id, course_id: course_id, refresh, setRefresh }} />

                {/* ListLesson */}
                <ListLesson lesson_id={id} refresh={refresh} />
            </div >
        </>
    )
}
