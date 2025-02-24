import { Link, useParams } from "react-router-dom";

export default function Course() {
    const { course_id } = useParams();
    console.log(course_id);
    
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top" style={{ zIndex: 999 }}>
                <div className="container-fluid px-0">
                    <Link to={``} className="text-dark py-1"><button className="btn btn-sm btn-primary text-light">Quay lại</button></Link>
                </div>
            </nav>
        </>
    )
}
