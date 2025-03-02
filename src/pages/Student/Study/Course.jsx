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
            <Header course_id={course_id} refresh={refresh} />
            <div className="d-flex">
                <div className="flex-grow-1 tw-fixed ">
                    <Outlet context={{ lesson_id: id, course_id: course_id, refresh, setRefresh }} />
                </div>

                {/* ListLesson */}
                <ListLesson lesson_id={id} refresh={refresh} />
            </div >
            {/* <div className="tw-fixed tw-bottom-0 tw-left-0 tw-w-full tw-bg-[#f0f0f0] tw-text-center tw-p-3" style={{ boxShadow: '#0000001a 0 -2px 3px' }}>
                <div className="d-flex justify-content-center">
                    <div className="d-flex gap-4">
                        <button className="btn btn-outline-primary btn-sm">Bài trước</button>
                        <button className="btn btn-outline-primary btn-sm">Bài tiếp theo</button>
                    </div>
                    <div className="tw-absolute tw-top-0 tw-right-0 tw-bottom-0 tw-w-[30%] tw-flex tw-items-center tw-justify-end tw-cursor-pointer">
                        <button className="btn btn-outline-primary btn-sm">Hỏi đáp</button>
                    </div>
                </div>
            </div> */}
        </>
    )
}
