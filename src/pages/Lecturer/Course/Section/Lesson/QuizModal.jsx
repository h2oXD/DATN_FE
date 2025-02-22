/* eslint-disable react/prop-types */
import { Modal } from 'antd';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import axiosClient from '../../../../../api/axios';
import { toast } from 'react-toastify';

const QuizModal = ({ showFormQuiz, setShowFormQuiz, setLessons, section_id }) => {
  const [loading, setLoading] = useState(false)
  const { course_id } = useParams()
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      type: "quiz",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Tiêu đề không được để trống"),
      description: Yup.string(),
    }),
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const res = await axiosClient.post(`lecturer/courses/${course_id}/sections/${section_id}/lessons`, values)
        setLessons(prevLesson => [...prevLesson, res.data.lesson]);
        formik.resetForm()
        formik.setFieldValue("description", '');
        toast.success('Thao tác thành công')
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
  })

  return (
    <Modal
      open={showFormQuiz}
      onCancel={() => setShowFormQuiz(false)}
      footer={null}
    >
      <h3 className="mb-3">Tạo bài tập trắc nghiệm</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Tiêu đề
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Nhập tiêu đề"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title && formik.touched.title && (
            <div className="text-danger">{formik.errors.title}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Mô tả
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="1"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            placeholder="Nhập mô tả"
          ></textarea>
          {formik.errors.description && formik.touched.description && (
            <div className="text-danger">{formik.errors.description}</div>
          )}
        </div>

        <div className="d-flex justify-content-end align-items-center">
          {loading ? (<><button className="btn btn-primary" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button></>) : (<><button type="submit" className="btn btn-primary">
            Tạo bộ câu hỏi mới
          </button></>)}
        </div>
      </form>
    </Modal>
  );
};

export default QuizModal;
