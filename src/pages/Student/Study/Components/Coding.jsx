/* eslint-disable react/prop-types */

import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosClient, { executeCode } from "../../../../api/axios";


export default function Coding({ lesson, course_id, setRefresh }) {
    const [code, setCode] = useState(lesson.codings.starter_code)
    const [outPut, setOutPut] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [countdown, setCountdown] = useState(60);
    const [showEditor, setShowEditor] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setIsButtonDisabled(false);
        }
    }, [countdown]);
    const runCode = async () => {
        const sourceCode = code;
        if (!code) {
            toast.warning("Vui lòng nhập mã trước khi chạy!");
            return;
        }
        try {
            setIsLoading(true);
            const { run: result } = await executeCode(lesson.codings.language, sourceCode);
            // Đảm bảo output là một chuỗi, loại bỏ dấu nháy kép dư thừa
            let outputString = result.output;
            if (Array.isArray(outputString)) {
                outputString = outputString.join("\n"); // Nối thành chuỗi nếu là mảng
            }
            outputString = outputString.replace(/^"|"$/g, ''); // Xóa dấu nháy nếu có

            setOutPut(outputString);
        } catch (error) {
            console.log(error);
            toast({
                title: "An error occurred.",
                description: error.message || "Unable to run code",
                status: "error",
                duration: 6000,
            });
        } finally {
            setIsLoading(false);
        }
    };
    const submit = async () => {
        if (outPut == lesson.codings.output) {
            setIsSubmit(true)
            try {
                await axiosClient.post(`student/courses/${course_id}/lessons/${lesson.id}/completes`)
                setRefresh(prev => !prev);
                toast.success('Nộp bài thành công')
            } catch (error) {
                console.log(error);
            } finally {
                setIsSubmit(false)
            }
        } else {
            toast.warning('Bài làm chưa chính xác')
        }
    }

    return (
        <>
            {/* Content */}
            <div className="w-100">
                <div className="d-flex">
                    <div className="w-50">
                        <div className="m-5">
                            <h2>{lesson.codings.problem_title}</h2>
                            <p>Cập nhật {new Date(lesson.codings.updated_at).toLocaleString("vi-VN")}</p>
                            <p>{lesson.codings.problem_description}</p>
                            <button
                                className="btn btn-sm btn-warning mb-2"
                                onClick={() => setShowEditor(!showEditor)}
                                disabled={isButtonDisabled}
                            >
                                {isButtonDisabled ? `Xem gợi ý (${countdown}s)` : "Xem gợi ý"}
                            </button>

                            {showEditor && (
                                <Editor
                                    theme="vs-dark"
                                    height="60vh"
                                    language={lesson.codings.language}
                                    value={lesson.codings.solution_code}
                                />
                            )}
                        </div>
                    </div>
                    <div className="d-flex w-50 flex-column ">
                        <div className="tw-relative">
                            <Editor
                                theme="vs-dark"
                                height="60vh"
                                language={lesson.codings.language}
                                value={code}
                                onChange={(value) => { setCode(value) }}
                            />
                            <div className="d-flex tw-absolute tw-bottom-2 tw-left-2 ms-2">
                                {isLoading ?
                                    (<><button className="btn btn-light btn-sm" ><i className="spinner-border spinner-border-sm"></i></button></>)
                                    :
                                    (<><button className="btn btn-light btn-sm" onClick={runCode}>Chạy mã</button></>)
                                }

                            </div>
                        </div>
                        <div className="tw-relative tw-bg-black text-light tw-h-[170px]">
                            <p className="m-2 fw-bold fs-4 border-bottom">Kết quả</p>
                            <p className="ms-2">{outPut}</p>
                            <div className="tw-absolute tw-bottom-2 tw-right-2">
                                {isSubmit ?
                                    (<><button className="btn btn-primary btn-sm" ><i className="spinner-border spinner-border-sm"></i></button></>)
                                    :
                                    (<><button className="btn btn-primary btn-sm" onClick={submit}>Nộp bài</button></>)
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
