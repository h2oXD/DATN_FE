import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top shadow" style={{ zIndex: 999 }}>
                <div className="container-fluid px-0 d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link to={`/student/MyCourse`} className="text-dark py-1">
                            <button className="btn btn-sm btn-primary text-light">Quay lại</button>
                        </Link>
                        <h4 className="m-0 ms-3">|Khoá học JavaScript từ cơ bản đến nâng cao</h4>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="border rounded-circle p-1">
                            <span>0%</span>
                        </div>
                        <p className="m-0 ms-2 tw-font-semibold fs-5">0/12 bài học</p>
                        <button className="btn btn-sm btn-outline-dark ms-2">Ghi chú</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
