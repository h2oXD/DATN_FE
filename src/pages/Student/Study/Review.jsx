/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import axiosClient from "../../../api/axios"
import { getImageUrl } from "../../../api/common";
import { format } from "date-fns";
import { StoreContext } from "../../../contexts/StoreProvider";
import StarRatings from "react-rating-stars-component";
import { toast } from "react-toastify";


export default function Review({ course_id }) {
    const [isSwitch, setIsSwitch] = useState(true)
    const [courseReview, setCourseReview] = useState(null)
    const { user } = useContext(StoreContext)
    const [isReviewed, setIsReviewed] = useState(0)
    const [content, setContent] = useState('')
    const [star, setStar] = useState(0)
    const [reset, setReset] = useState(false)
    useEffect(() => {
        const reviewKhoaHoc = async () => {
            try {
                const res = await axiosClient.get(`/courses/${course_id}/reviews`)
                console.log(res.data);
                setCourseReview(res.data.reviews)
                setIsReviewed(res.data.isReviewed)
            } catch (error) {
                console.log(error);
            }

        }
        reviewKhoaHoc()
    }, [course_id, reset])
    useEffect(() => {
        const reviewGiangVien = async () => {
            try {
                const res = await axiosClient.get(`/lecturers/{lecturerId}/reviews`)
                console.log(res);
            } catch (error) {
                console.log(error);
            }

        }
        reviewGiangVien
    }, [])
    const handleReview = async () => {
        if (star <= 0) return toast.error('Số sao phải lớn hơn 0')
        if (content <= 0) return toast.error('Chưa có nội dung đánh giá')
        try {
            const data = {
                rating: star,
                review_text: content,
            }
            console.log(data);

            await axiosClient.post(`/courses/${course_id}/reviews`, data)
            toast.success('Đánh giá thành công')
            setIsReviewed(1)
            setStar(0)
            setContent('')
            setReset(pre => !pre)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {/* Canvas của comment */}
            <div className="offcanvas offcanvas-end tw-w-[700px] tw-bg-white" tabIndex="-1" id="offcanvasReview" aria-labelledby="offcanvasReviewLabel">
                <div className="offcanvas-header pb-1">
                    <div className='d-flex flex-column'>
                        <h3 id="offcanvasGhiChuRightLabel m-0">Đánh giá</h3>
                        <small className=''>Đưa ra cảm nhận của bạn về khoá học và giảng viên</small>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="d-flex gap-3 justify-content-end">
                        <button onClick={() => { setIsSwitch(true) }} className="btn btn-warning btn-sm">Đánh giá khoá học</button>
                        <button onClick={() => { setIsSwitch(false) }} className="btn btn-warning btn-sm">Đánh giá người hướng dẫn</button>
                    </div>
                    {isSwitch && <>
                        <h4>Đánh giá khoá học</h4>
                        {isReviewed == 0 && <>
                            <div className="alert border">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="avatar avatar-md">
                                        <img
                                            alt="avatar"
                                            src={user && user.profile_picture ? getImageUrl(user.profile_picture) : '/avatarDefault.jpg'}
                                            className="rounded-circle"
                                        />
                                    </div>
                                    <p className="m-0 ms-2 tw-font-semibold">{user && user.name}</p>
                                </div>
                                <div className="d-flex align-items-center mb-1">
                                    <p className="m-0 me-2">Đưa ra đánh giá</p>
                                    <StarRatings
                                        count={5}
                                        value={star}
                                        onChange={setStar}
                                        size={25}
                                        activeColor="#ffaa46"
                                    />
                                </div>
                                <textarea placeholder="Nhập nội dung của bạn..." className="form-control" id="" value={content} onChange={(e) => { setContent(e.target.value) }}></textarea>
                                <button type="button" onClick={handleReview} className="btn btn-sm btn-primary mt-2">Gửi đánh giá</button>
                            </div>
                        </>}
                        {courseReview && courseReview.map((c, index) => (
                            <div key={index} className="alert alert-light">
                                <div className="d-flex gap-3">
                                    <div className="avatar avatar-md">
                                        <img
                                            alt="avatar"
                                            src={c.reviewer.profile_picture ? getImageUrl(c.reviewer.profile_picture) : '/avatarDefault.jpg'}
                                            className="rounded-circle"
                                        />
                                    </div>
                                    <div>
                                        <p className={user && user.id == c.reviewer.id ? `m-0 tw-font-semibold text-primary` : `m-0 tw-font-semibold`}>{c.reviewer.name} {user && user.id == c.reviewer.id && ('( Đánh giá của bạn )')}</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <p className="m-0 text-warning">{c.rating}★</p>
                                            <small className="m-0">{format(new Date(c.created_at), "dd/MM/yyyy HH:mm:ss")}</small>
                                        </div>
                                    </div>
                                </div>
                                <p className="m-0">{c.review_text}</p>
                            </div>
                        ))}
                        {courseReview && courseReview.length == 0 && <p className="text-center mt-5">Chưa có đánh giá nào</p>}
                    </>}
                    {!isSwitch && <>
                        <h4>Đánh giá giảng viên</h4>
                    </>}
                </div>
            </div >
        </>
    )
}
