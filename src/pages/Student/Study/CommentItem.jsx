/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";

export default function CommentItem({ comment, lesson_id, phanhoi, setRefresh, refresh }) {
    const [commentCon, setConmmentCon] = useState(false);
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false)

    const handleCommentCon = async (parent_id) => {
        if (!content.trim()) return toast.warning("Vui lòng nhập nội dung bình luận!");
        setLoading(true)
        try {
            const res = await axiosClient.post(`lessons/${lesson_id}/comments`, { content: content, parent_id: parent_id })
            console.log(res);
            setRefresh(!refresh)
            toast.success('Bình luận thành công')
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <div className="mb-2">
                <div className="py-2">
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
                        <div className="flex-grow-1 alert m-0 p-2 alert-light">
                            <strong>{comment.user.name}</strong>
                            <p className="m-0">{comment.content}</p>
                        </div>
                    </div>
                </div>
                {phanhoi && <>
                    <div className="d-flex align-items-center justify-content-between tw-cursor-pointer mb-4" onClick={() => { setConmmentCon(!commentCon) }}>
                        <div>
                            <small className="me-2">{formatDistanceToNow(new Date(comment.created_at), { addSuffix: true, locale: vi })}</small>
                        </div>
                        <div className="d-flex align-items-center">
                            <BsChatDots className="me-1" />
                            <small className="m-0">Phản hồi ({comment.replies.length ?? 0})</small>
                        </div>
                    </div>
                </>}

                {commentCon && <>
                    <div className="d-flex flex-column mt-2">
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
                            <button className="btn btn-sm btn-light me-2" onClick={() => { setConmmentCon(!commentCon) }}>Huỷ</button>
                            {loading ? (<button className="btn btn-sm btn-primary" type="button" disabled>
                                <span
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                            </button>) : (<button className="btn btn-sm btn-primary" onClick={() => { handleCommentCon(comment.id) }}>Bình luận</button>)}

                        </div>
                    </div>
                    {/* Hiển thị replies nếu có */}
                    {comment.replies.length > 0 && (
                        <div className="border-bottom  ms-4 mt-0 mb-5">
                            {comment.replies.map(reply => <CommentItem key={reply.id} comment={reply} phanhoi={false} />)}
                        </div>
                    )}
                </>}
            </div>
        </>
    )
}
