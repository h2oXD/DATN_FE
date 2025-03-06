/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../../../api/axios'
import { Popconfirm } from 'antd'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { toast } from 'react-toastify'

export default function Header({ course_id, refresh, setRefresh }) {
    const [progress, setProgress] = useState(0)
    const [courseTitle, setCourseTitle] = useState('')
    const [certificate, setCertificate] = useState(false)
    const [notes, setNotes] = useState(null)
    const [isEditing, setIsEditing] = useState(false); // Kiểm soát hiển thị CKEditor
    const [content, setContent] = useState(''); // Lưu nội dung
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosClient(`/user/courses/${course_id}`)
                setProgress(res.data.data.progress.progress_percent)
                setCourseTitle(res.data.data.course.title)
                // console.log(res.data.data);
                // const progressPercent = res.data.data.progress.progress_percent;
                // // Nếu hoàn thành 100%, gọi API cấp chứng chỉ

            } catch (error) {
                console.log(error);
            }
        }
        const fetchCerti = async () => {
            try {
                const res = await axiosClient.get(`show/certificates/${course_id}`)
                setCertificate(res.data.data)
                // console.log(res.data.data);

            } catch (error) {
                console.log(error);
                if (progress) {
                    if (progress == 100) {
                        const res2 = await axiosClient.post(`/certificates/student/courses/${course_id}`);
                        // console.log(res2);
                        setCertificate(res2.data.data)
                    }
                }
            }
        }
        fetchCerti()
        fetchData()
    }, [refresh, course_id])

    useEffect(() => {
        const notes = async () => {
            try {
                const res = await axiosClient.get(`/learning/notes`)
                console.log(res.data);
                setNotes(res.data)
            } catch (error) {
                console.log(error);
                setNotes(null)
            }
        }
        notes()
    }, [refresh])
    const handleDeleteNote = async (note_id) => {
        try {
            await axiosClient.delete(`/learning/notes/${note_id}`)
            setRefresh(!refresh)
        } catch (error) {
            console.log(error);
        }
    }
    const handleEditNote = async (content, note_id) => {
        if (!content) {
            toast.warning('Không được để trống nội dung ghi chú')
            return
        }
        const data = {
            content: content,
            _method: 'PUT'
        }
        try {
            await axiosClient.post(`/learning/notes/${note_id}`, data)
            setRefresh(!refresh)
            setIsEditing(!isEditing)
            toast.success('Cập nhật thành công')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top shadow tw-px-5 tw-z-[999] tw-bg-[#29303b] " >
                <div className="container-fluid px-0 d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link to={`/student/MyCourse`} className="text-light py-1">
                            <i className="fe fe-chevron-left ms-2 "></i>
                        </Link>
                        <h4 className="m-0 ms-3 text-light">|{courseTitle}</h4>
                    </div>
                    <div className="d-flex align-items-center">
                        {certificate && (<Link to={`/student/certificate/${certificate.id}`} className='text-light btn btn-sm btn-primary me-2'>Nhận chứng chỉ</Link>)}
                        <div className="p-1">
                            <span className='text-light'>{parseInt(progress)}%</span>
                        </div>
                        <p className="m-0 ms-2 tw-font-semibold fs-5 text-light">0/4 bài học</p>
                        <button className="btn btn-sm ms-2 text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasGhiChuRight" aria-controls="offcanvasGhiChuRight">
                            <i className='fe fe-file me-1'></i>
                            <span>Ghi chú</span>
                        </button>

                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-end tw-w-[600px] tw-bg-white" tabIndex="-1" id="offcanvasGhiChuRight" aria-labelledby="offcanvasGhiChuRightLabel">
                <div className="offcanvas-header">
                    <div className='d-flex flex-column'>
                        <h3 id="offcanvasGhiChuRightLabel m-0">Ghi chú của tôi</h3>
                        <small className=''>Danh sách ghi chú trong khoá học của bạn</small>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {notes &&
                        notes.map((note, index) => (
                            <div className='d-flex flex-column' key={index}>
                                <div className='d-flex align-items-center mb-1 justify-content-between'>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <span className='text-light bg-primary px-2 rounded fs-6'>{Math.floor(note.duration / 60)}:{Math.floor(note.duration % 60).toString().padStart(2, '0')}</span>
                                        <span className='text-primary fw-bold'>{note.lesson.section.title}</span>
                                        <span>{note.lesson.title}</span>
                                    </div>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <span onClick={() => setIsEditing(!isEditing)}><i className='fe fe-edit tw-cursor-pointer'></i></span>
                                        <Popconfirm
                                            title="Bạn có chắc chắn muốn xoá?"
                                            description="Hành động này sẽ không thể hoàn tác"
                                            onConfirm={() => { handleDeleteNote(note.id) }}
                                            // onCancel={cancel}
                                            okText="Xoá"
                                            cancelText="Huỷ bỏ"
                                        >
                                            <span><i className='fe fe-trash-2 tw-cursor-pointer'></i></span>
                                        </Popconfirm>
                                    </div>
                                </div>
                                {!isEditing && (
                                    <div className='alert alert-light' dangerouslySetInnerHTML={{ __html: note.content.replace(/<\/?p>/g, "") }}></div>
                                )}
                                {isEditing && (
                                    <>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={note.content}
                                            onChange={(event, editor) => {
                                                setContent(editor.getData());
                                            }}
                                            config={{
                                                toolbar: ["bold", "italic"],
                                                placeholder: "Nhập nội dung tại đây...",
                                            }}
                                        />
                                        <div className='d-flex gap-2 mt-2 justify-content-end'>
                                            <button onClick={() => setIsEditing(!isEditing)} className='btn btn-sm btn-light'>Huỷ bỏ</button>
                                            <button onClick={() => { handleEditNote(content, note.id) }} className='btn btn-sm btn-primary'>Sửa</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}
