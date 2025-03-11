/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import axiosClient from "../../../api/axios";
import CommentItem from "./CommentItem";

export default function CommentLesson({ lesson_id }) {
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false); // Trạng thái loading khi gửi API
    const [comments, setComments] = useState(null);
    const [refresh, setRefresh] = useState(false)
    const handleCommentSubmit = async () => {
        if (!content.trim()) return toast.warning("Vui lòng nhập nội dung bình luận!");

        setLoading(true);
        try {
            await axiosClient.post(`lessons/${lesson_id}/comments`, { content: content });
            toast.success("Bình luận thành công");
            setContent("");
            setRefresh(!refresh)
        } catch (error) {
            console.error("Gửi bình luận thất bại", error);
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        const fetchComment = async () => {
            try {
                const res = await axiosClient.get(`/lessons/${lesson_id}/comments`)
                setComments(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchComment()
    }, [lesson_id, refresh])

    return (
        <> {/* Canvas của comment */}
            <div className="offcanvas offcanvas-end tw-w-[700px] tw-bg-white" tabIndex="-1" id="offcanvasCommentRight" aria-labelledby="offcanvasCommentRightLabel">
                <div className="offcanvas-header pb-1">
                    <div className='d-flex flex-column'>
                        <h3 id="offcanvasGhiChuRightLabel m-0">Hỏi đáp</h3>
                        <small className=''>Hãy để lại thắc mắc của bạn để chúng ta cùng nhau xử lý</small>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-start">
                            <div className="me-2">
                                <img
                                    src={"https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"}
                                    alt="avatar"
                                    className="rounded-circle"
                                    width="40"
                                    height="40"
                                />
                            </div>
                            <div className="flex-grow-1">
                                <textarea name="" className="form-control" id="" placeholder="Nhập nội dung tại đây..." onChange={(e) => setContent(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mt-2">
                            {loading ? (<button className="btn btn-sm btn-primary" type="button" disabled>
                                <span
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                            </button>) : (<button className="btn btn-sm btn-primary" onClick={handleCommentSubmit}>Bình luận</button>)}
                        </div>
                    </div>
                    <div className="mt-4">
                        {comments && comments.length ? comments.length : 0} Bình luận
                        {comments && comments.length > 0 ? (
                            comments.map(comment => <CommentItem key={comment.id} comment={comment} lesson_id={lesson_id} phanhoi={true} setRefresh={setRefresh} refresh={refresh} />)
                        ) : (
                            <p className="text-muted text-center">Chưa có bình luận nào.</p>
                        )}
                    </div>
                </div>
            </div >
        </>
    )
}
