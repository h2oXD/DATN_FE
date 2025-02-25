import { Outlet, useParams, useSearchParams } from "react-router-dom";
import ListLesson from "./Paritals/ListLesson";
import Header from "./Paritals/Header";

export default function Course() {
    const { course_id } = useParams();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('lesson');
    return (
        <>
            {/* Header */}
            <Header />
            <div className="d-flex mt-2 justify-content-center">
                <Outlet context={{ lesson_id: id, course_id: course_id }} />

                {/* ListLesson */}
                <ListLesson lesson_id={id} />
            </div >
        </>
    )
}
