import { Outlet, useParams, useSearchParams } from "react-router-dom";
import ListLesson from "./Paritals/ListLesson";
import Header from "./Paritals/Header";
import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast } from "react-toastify";
import axiosClient from "../../../api/axios";

export default function Course() {
    const { course_id } = useParams();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('lesson');
    const [refresh, setRefresh] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [content, setContent] = useState('');

    const handleAddNote = async () => {
        if (!content.trim()) {
            toast.warning('Nội dung ghi chú không được để trống')
            return;
        }

        try {
            const lesson_id = id
            const data = {
                duration: currentTime,
                content: content
            };
            const response = await axiosClient.post(`/learning/lesson/${lesson_id}/notes`, data)
            console.log("Ghi chú đã được thêm:", response.data);
            toast.success('Tạo ghi chú thành công')
            setRefresh(!refresh)
            setContent(""); // Reset nội dung sau khi gửi thành công
        } catch (error) {
            console.error("Lỗi khi thêm ghi chú:", error);
        }
    };
    return (
        <>
            {/* Header */}
            <Header course_id={course_id} refresh={refresh} setRefresh={setRefresh} />
            <div className="d-flex">
                <div className="flex-grow-1 tw-fixed ">
                    <Outlet context={{ lesson_id: id, course_id: course_id, refresh, setRefresh, setCurrentTime, currentTime }} />
                </div>

                {/* ListLesson */}
                <ListLesson lesson_id={id} refresh={refresh} />
            </div >
            <div className="tw-fixed tw-bottom-0 tw-left-0 tw-w-full tw-bg-[#f0f0f0] tw-text-center tw-p-3" style={{ boxShadow: '#0000001a 0 -2px 3px' }}>
                <div className="d-flex justify-content-center">
                    <div className="d-flex gap-4">
                        <button className="btn btn-sm btn-outline-dark d-flex align-items-center tw-rounded-3xl">
                            <i className="fe fe-chevron-left ms-2"></i>
                            <span className="me-2">Bài trước</span>
                        </button>
                        <button className="btn btn-sm btn-outline-dark d-flex align-items-center tw-rounded-3xl">
                            <span className="ms-2">Bài tiếp theo</span>
                            <i className="fe fe-chevron-right me-2"></i>
                        </button>
                    </div>
                    <div className="tw-absolute tw-top-0 tw-right-0 tw-bottom-0 tw-w-[30%] tw-flex tw-items-center tw-justify-end tw-cursor-pointer">
                        <button className="btn btn-primary tw-rounded-3xl me-3 btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCommentRight" aria-controls="offcanvasCommentRight"><i className="fe fe-message-circle me-1"></i>Hỏi đáp</button>
                    </div>
                </div>
            </div>
            {/* Canvas của comment */}
            <div className="offcanvas offcanvas-end tw-w-[700px] tw-bg-white" tabIndex="-1" id="offcanvasCommentRight" aria-labelledby="offcanvasCommentRightLabel">
                <div className="offcanvas-header">
                    <div className='d-flex flex-column'>
                        <h3 id="offcanvasGhiChuRightLabel m-0">Hỏi đáp</h3>
                        <small className=''>Hãy để lại thắc mắc của bạn để chúng ta cùng nhau xử lý</small>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                </div>
            </div>

            {/* Canvas của Note */}
            <div className="offcanvas offcanvas-bottom w-auto tw-bg-white" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header pt-3 pb-1">
                    <h3 className="offcanvas-title" id="offcanvasBottomLabel">Thêm ghi chú tại <span className="bg-primary text-light p-1 rounded fs-5">{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span></h3>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body small pt-1">
                    <CKEditor
                        editor={ClassicEditor}
                        data={content}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setContent(data)
                        }}
                        config={{
                            toolbar: [
                                "bold",
                                "italic",
                            ],
                            placeholder: "Nhập nội dung tại đây...",

                        }}
                    />
                    <div className="d-flex gap-3 mt-2 justify-content-end">
                        <button type="button" className="btn btn-sm btn-warning" data-bs-dismiss="offcanvas" aria-label="Close">Huỷ</button>
                        <button className="btn btn-sm btn-primary" data-bs-dismiss="offcanvas" onClick={handleAddNote}>Thêm ghi chú</button>
                    </div>
                </div>
            </div>
        </>
    )
}
