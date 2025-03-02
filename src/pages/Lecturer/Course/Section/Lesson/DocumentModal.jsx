/* eslint-disable react/prop-types */
import { Modal } from 'antd';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import axiosClient from '../../../../../api/axios';

const DocumentModal = ({ showModal, closeModal, section_id, setLessons }) => {
  const { course_id } = useParams();
  const [documentPreviewUrl, setDocumentPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const { updateCheckData } = useOutletContext();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      document_url: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Tiêu đề không được để trống"),
      description: Yup.string(),
      document_url: Yup.mixed().required("Tài liệu không được để trống").test(
        "fileType",
        "Chỉ chấp nhận file PDF, DOC, DOCX",
        (value) =>
          !value ||
          ["application/pdf", "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(value.type)
      ),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const createLesson = { title: values.title, description: values.description, type: 'document' }
        const uploadDocument = {document_url: values.document_url}

        const res = await axiosClient.post(`lecturer/courses/${course_id}/sections/${section_id}/lessons`, createLesson)
        const lesson_id = res.data.lesson.id
        console.log(uploadDocument);
        
        await axiosClient.post(`lecturer/courses/${course_id}/sections/${section_id}/lessons/${lesson_id}/documents`, uploadDocument, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        updateCheckData()
        // console.log(response);
        toast.success("Tạo tài liệu thành công");
        setLessons(prevLesson => [...prevLesson, res.data.lesson]);
        closeModal();
        formik.resetForm();
        setDocumentPreviewUrl(null);
      } catch (error) {
        console.error("Lỗi khi tạo tài liệu:", error);
        toast.error("Tạo tài liệu thất bại");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleDocumentChange = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue("document_url", file);

    // Tạo URL preview cho document
    const supportedTypes = ["application/pdf"];
    if (supportedTypes.includes(file.type)) {
      const url = URL.createObjectURL(file);
      setDocumentPreviewUrl(url);
    } else {
      setDocumentPreviewUrl(null);
    }
  };
  return (
    <Modal
      width={1000}
      open={showModal}
      onCancel={() => {
        closeModal();
        formik.resetForm();
        setDocumentPreviewUrl(null);
      }}

      footer={null}
    >
      <h3 className="mb-3">Tạo tài liệu</h3>
      <form className="row" onSubmit={formik.handleSubmit}>
        <div className="col-lg-6 col-12">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Tiêu đề
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Nhập tiêu đề tài liệu"
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
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Nhập mô tả tài liệu"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            {formik.errors.description && formik.touched.description && (
              <div className="text-danger">{formik.errors.description}</div>
            )}
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="mb-3">
            <label htmlFor="document_url" className="form-label">
              Tải lên tài liệu
            </label>
            <input className="form-control"
              onChange={handleDocumentChange}
              type="file"
              name="document_url"
              id="document_url" />
            {formik.errors.document_url && formik.touched.document_url && (
              <div className="text-danger">{formik.errors.document_url}</div>
            )}
          </div>
          {documentPreviewUrl && (
            <div className="mb-3">
              {["application/pdf"].includes(
                formik.values.document_url?.type
              ) && (
                  <iframe
                    src={documentPreviewUrl}
                    title="Document Preview"
                    width="100%"
                    height="300px"
                  />
                )}
              {["application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              ].includes(formik.values.document_url?.type) && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<iframe src='https://view.officeapps.live.com/op/embed.aspx?src=${documentPreviewUrl}' width='100%' height='600px' frameborder='0'> </iframe>`,
                    }}
                  />
                )}
            </div>
          )}
        </div>
        <div className="d-flex justify-content-end">
          {loading ? (<><button className="btn btn-primary" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button></>) : (<><button type="submit" className="btn btn-primary">
            Hoàn tất
          </button></>)}
        </div>
      </form>
    </Modal>
  );
};

export default DocumentModal;
