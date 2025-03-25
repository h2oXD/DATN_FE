import { useOutletContext } from "react-router-dom"

export default function GoalsView() {
    const course = useOutletContext()
    const learningOutcomes = JSON.parse(course.courseData.learning_outcomes)
    const prerequisites = JSON.parse(course.courseData.prerequisites)
    const targetStudents = JSON.parse(course.courseData.target_students)
    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <div>
                        <h3 className="m-0">Mục tiêu học viên</h3>
                    </div>
                </div>
                <div className="card-body">
                    <div className="col-12 mb-3">
                        <label htmlFor="" className="fw-bold">
                            Học viên sẽ học được gì trong khóa học của bạn?
                        </label>
                        <p>
                            Bạn phải nhập ít nhất 4 mục tiêu hoặc kết quả học tập mà học
                            viên có thể mong đợi đạt được sau khi hoàn thành khóa học.
                        </p>
                        {learningOutcomes.map((outcome, index) => (
                            <div key={index} className="d-flex align-items-center mt-2">
                                <input
                                    type="text"
                                    placeholder="Ví dụ: Xác định vai trò và trách nhiệm của người quản lý dự án"
                                    className="form-control"
                                    value={outcome}
                                    disabled
                                    readOnly
                                />
                            </div>
                        ))}
                    </div>
                    <div className="col-12 mb-3 mt-4">
                        <label htmlFor="" className="fw-bold">
                            Yêu cầu hoặc điều kiện tiên quyết để tham gia khóa học của bạn là gì?
                        </label>
                        <p>
                            Liệt kê các kỹ năng, kinh nghiệm, công cụ hoặc thiết bị mà học viên bắt buộc phải có trước khi tham gia khóa học.
                            Nếu bạn không có yêu cầu nào, hãy tận dụng phần này và coi đây là cơ hội để bạn hạ thấp tiêu chuẩn cho người mới bắt đầu.
                        </p>
                        {prerequisites.map((prerequisite, index) => (
                            <div key={index} className="d-flex align-items-center mt-2">
                                <input
                                    type="text"
                                    placeholder="Ví dụ: Không cần kinh nghiệm lập trình. Bạn sẽ học mọi thứ mà bạn cần biết"
                                    className="form-control"
                                    value={prerequisite}
                                    readOnly
                                    disabled
                                />
                            </div>
                        ))}
                    </div>
                    <div className="col-12 mb-3 mt-4">
                        <label htmlFor="" className="fw-bold">
                            Khóa học này dành cho đối tượng nào?
                        </label>
                        <p>
                            Viết mô tả rõ ràng về học viên mục tiêu cho khóa học, tức là
                            những người sẽ thấy nội dung khóa học có giá trị. Điều này sẽ
                            giúp bạn thu hút học viên phù hợp tham gia khóa học.
                        </p>
                        {targetStudents.map((targetStudent, index) => (
                            <div key={index} className="d-flex align-items-center mt-2">
                                <input
                                    type="text"
                                    placeholder="Ví dụ: Các nhà phát triển Python có trình độ sơ cấp muốn tìm hiểu về khoa học dữ liệu"
                                    className="form-control"
                                    value={targetStudent}
                                    disabled
                                    readOnly
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
