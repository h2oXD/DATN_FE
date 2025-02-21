/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { Segmented } from 'antd';
import { useState } from "react";
import UploadImage from "./UploadImage";
import { useFormik } from "formik";
// import * as Yup from "yup";


export default function AddQuizModal({ showAddQuizModal, setShowAddQuizModal, lesson_id, section_id, course_id }) {
    const formik = useFormik({
        initialValues: {
            question_text: "",
            is_multiple_choice: "0",
            answers: [{}, {}, {}, {}],
        },
        onSubmit: (values) => {
            console.log(values);

        }
    })

    const [inputs, setInputs] = useState([{}, {}, {}, {}]);
    const [showButton, setShowButton] = useState(true);
    const maxInputs = 5;
    // console.log(lesson_id, section_id, course_id);

    const handleAddInput = () => {
        if (inputs.length < maxInputs) {
            setInputs([...inputs, { id: Math.random() }]);
            formik.setFieldValue("answers", [
                ...formik.values.answers,
                { id: Math.random() },
            ]); // Sử dụng formik.setFieldValue để thêm answer
        }
        if (inputs.length + 1 === maxInputs) {
            setShowButton(false);
        }
    };

    const handleRemoveInput = (index) => {
        if (inputs.length > 2) {
            const newInputs = [...inputs];
            newInputs.splice(index, 1);
            setInputs(newInputs);
            setShowButton(true);

            // Xóa answer tương ứng trong Formik
            const newAnswers = [...formik.values.answers];
            newAnswers.splice(index, 1);
            formik.setFieldValue("answers", newAnswers);
        }
    };

    const handleImageUpload = (index, image) => {
        const newInputs = [...inputs];
        newInputs[index].image = URL.createObjectURL(image);
        newInputs[index].showUpload = false; // Ẩn nút upload sau khi upload
        setInputs(newInputs);

        // Cập nhật answer tương ứng trong Formik
        const newAnswers = [...formik.values.answers];
        newAnswers[index].image = URL.createObjectURL(image);
        formik.setFieldValue("answers", newAnswers);
    };

    const renderInputs = () => {
        return inputs.map((input, index) => (
            <div key={index} style={{ position: 'relative', display: 'inline-block', marginBottom: '10px' }}>
                {input.image ? ( // Nếu có ảnh, hiển thị ảnh
                    <img src={input.image} alt="Uploaded" className="p-5 border rounded" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                ) : ( // Ngược lại, hiển thị input text
                    <input
                        style={{ height: "200px", paddingLeft: "30px" }}
                        type="text"
                        name={`answers[${index}].text`} // Sử dụng name theo format của Formik
                        className="form-control text-center"
                        placeholder={`Nhập câu trả lời ${index + 1}`}
                        onChange={formik.handleChange} // Sử dụng formik.handleChange
                        value={formik.values.answers[index].text || ""}
                    />
                )}
                <i
                    className="fe fe-trash-2 cursor-pointer p-1 rounded border"
                    style={{ position: 'absolute', left: '5px', top: '5px' }}
                    onClick={() => handleRemoveInput(index)}
                ></i>
                {isMulti ? (
                    <input
                        value={1}
                        type="checkbox"
                        name={`answers[${index}].is_correct`} // Sử dụng name theo format của Formik
                        className="tw-size-5"
                        style={{ position: "absolute", top: "5px", right: "5px" }}
                        onChange={formik.handleChange} // Sử dụng formik.handleChange
                    />
                ) : (
                    <input
                        value={1}
                        type="radio"
                        name={`is_correct`} // Sử dụng name theo format của Formik
                        className="tw-size-5"
                        style={{ position: "absolute", top: "5px", right: "5px" }}
                        onChange={formik.handleChange} // Sử dụng formik.handleChange
                    />
                )}
                <UploadImage
                    onUpload={(image) => handleImageUpload(index, image)}
                    index={index}
                    showUpload={input.showUpload !== false} // Truyền prop showUpload
                />
            </div>
        ));
    };

    const [isMulti, setIsMulti] = useState(false);
    const [questionType, setQuestionType] = useState('0');

    const handleQuestionTypeChange = (value) => {
        setQuestionType(value);
        setIsMulti(value === '1');
        formik.setFieldValue("is_multiple_choice", value);
    };
    return (
        <>
            <Modal
                width={1000}
                open={showAddQuizModal}
                onCancel={() => {
                    setShowAddQuizModal(false)
                }}
                footer={null}
            >
                <h3 className="text-center">Tạo mới câu hỏi</h3>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow-none">
                                <input
                                    type="text"
                                    name="question_text" // Sử dụng name theo format của Formik
                                    id="question_text"
                                    value={formik.values.question_text}
                                    onChange={formik.handleChange}
                                    placeholder="Nhập câu hỏi vào đây"
                                    className="form-control d-flex fs-4 text-center p-5"
                                    style={{ height: "200px" }}
                                >

                                </input>
                            </div>
                        </div>
                        <div className="col-12 d-flex gap-3 mt-3 align-items-center">
                            {renderInputs()}
                            {showButton && (
                                <div>
                                    <button className="btn btn-sm border p-0 m-0 px-2 pb-1" type="button" onClick={handleAddInput}>
                                        +
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="col-12 mt-2">
                            <Segmented
                                options={[
                                    { label: 'Câu trả lời đúng duy nhất', value: '0' },
                                    { label: 'Nhiều câu trả lời đúng', value: '1' },
                                ]}
                                value={questionType}
                                onChange={handleQuestionTypeChange}
                            />
                            <button className="btn btn-primary" type="submit">Lưu</button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    )
}
