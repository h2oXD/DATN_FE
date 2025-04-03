import { useEffect, useState } from "react"
import axiosClient from "../../api/axios"
import { useParams } from "react-router-dom";
import { getImageUrl } from "../../api/common";

export default function LecturerShowInfo() {
    const { id } = useParams();
    const [lecturer, setLecturer] = useState(null)
    useEffect(() => {
        const fetchLecturerInfo = async () => {
            try {
                const res = await axiosClient.get(`/guest/lecturer-info/${id}`)
                console.log(res);
                setLecturer(res.data)

            } catch (error) {
                console.log(error);
            }
        }
        fetchLecturerInfo()
    }, [])
    return (
        <>
            <>
                {/* Page Content */}
                <main>
                    {/*hero section*/}
                    <section className="py-xl-8 py-6">
                        <div className="container">
                            {/*row*/}
                            <div className="row gy-4">
                                <div className="col-xl-12 col-12">
                                    <div className="d-flex flex-column gap-4">
                                        {/*card*/}
                                        <div className="card">
                                            {/*img*/}
                                            <div
                                                className="rounded-top-3"
                                                style={{
                                                    backgroundImage:
                                                        "url(../assets/images/mentor/mentor-single.png)",
                                                    backgroundPosition: "center",
                                                    backgroundSize: "cover",
                                                    backgroundRepeat: "no-repeat",
                                                    height: 228
                                                }}
                                            />
                                            <div className="card-body p-md-5">
                                                <div className="d-flex flex-column gap-5">
                                                    {/*img*/}
                                                    <div className="mt-n8">
                                                        <img
                                                            src={lecturer && lecturer.profile_picture ? getImageUrl(lecturer.profile_picture) : '/avatarDefault.jpg'}
                                                            alt="mentor 1"
                                                            className="img-fluid rounded-4 mt-n8 w-10"
                                                        />
                                                    </div>
                                                    <div className="d-flex flex-column gap-5">
                                                        <div className="d-flex flex-column gap-3">
                                                            <div className="d-flex flex-md-row flex-column justify-content-between gap-2">
                                                                {/*heading*/}
                                                                <div>
                                                                    <h1 className="mb-0">{lecturer && lecturer.name}</h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*card*/}
                                        <div className="card">
                                            {/*card body*/}
                                            <div className="card-body p-md-5 d-flex flex-column gap-3">
                                                {/*heading*/}
                                                <h3 className="mb-0">Giới thiệu</h3>
                                                <div className="d-flex flex-column">
                                                    {/*para*/}
                                                    <p className="mb-1">
                                                        {lecturer && lecturer.bio ? lecturer.bio : 'Chưa có lời giới thiệu nào'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/*card*/}
                                        <div className="card">
                                            {/*card body*/}
                                            <div className="card-body p-md-5">
                                                <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-between gap-2">
                                                    {/*heading*/}
                                                    <div>
                                                        <h3 className="mb-0">Đánh giá của mọi người</h3>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column gap-3">
                                                    {lecturer && lecturer.reviews && lecturer.reviews <= 0 && <h4 className="text-center">Chưa có đánh giá nào cho giảng viên này</h4>}
                                                    {lecturer && lecturer.reviews && lecturer.reviews > 0 && (
                                                        <div className="py-4 d-flex flex-column gap-3 border-bottom">
                                                            <div className="d-flex flex-row justify-content-between align-items-md-center">
                                                                <div className="d-flex flex-row gap-3 align-items-center">
                                                                    {/*img*/}
                                                                    <div>
                                                                        <img
                                                                            src="../assets/images/avatar/avatar-1.jpg"
                                                                            alt="avatar 1"
                                                                            className="avatar avatar-lg rounded-circle"
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        {/*heading*/}
                                                                        <h4 className="mb-1">Satvik</h4>
                                                                        <div className="d-flex flex-md-row flex-column gap-md-2 align-items-md-center lh-1">
                                                                            {/*icons*/}
                                                                            <span>
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={12}
                                                                                    height={12}
                                                                                    fill="currentColor"
                                                                                    className="bi bi-star-fill text-warning"
                                                                                    viewBox="0 0 16 16"
                                                                                >
                                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                                </svg>
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={12}
                                                                                    height={12}
                                                                                    fill="currentColor"
                                                                                    className="bi bi-star-fill text-warning"
                                                                                    viewBox="0 0 16 16"
                                                                                >
                                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                                </svg>
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={12}
                                                                                    height={12}
                                                                                    fill="currentColor"
                                                                                    className="bi bi-star-fill text-warning"
                                                                                    viewBox="0 0 16 16"
                                                                                >
                                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                                </svg>
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={12}
                                                                                    height={12}
                                                                                    fill="currentColor"
                                                                                    className="bi bi-star-fill text-warning"
                                                                                    viewBox="0 0 16 16"
                                                                                >
                                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                                </svg>
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={12}
                                                                                    height={12}
                                                                                    fill="currentColor"
                                                                                    className="bi bi-star-fill text-warning"
                                                                                    viewBox="0 0 16 16"
                                                                                >
                                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*text*/}
                                                                            <span>
                                                                                <small className="fw-medium">
                                                                                    September 9, 2024
                                                                                </small>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <small>Plan:</small>
                                                                    <small className="border-bottom">1 Month</small>
                                                                </div>
                                                            </div>
                                                            {/*para*/}
                                                            <div>
                                                                <p className="mb-0">
                                                                    The mentor was really knowledgeable and solved all my
                                                                    doubt regarding my Tech Stack and carrer as well....
                                                                    if you are really confused or do need to know how to
                                                                    start your DSA career have a session with Sir... it
                                                                    will really help you.
                                                                </p>
                                                            </div>
                                                            {/*link*/}
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>

        </>
    )
}
