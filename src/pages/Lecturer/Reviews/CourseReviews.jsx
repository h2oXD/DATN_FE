export default function CourseReviews() {
  return (
    <>
      <div className="w-3/4 p-6">
        <h2 className="text-xl font-semibold mb-4">Đánh giá</h2>
        <select className="border p-2 mb-4">
          <option>Lập trình C++ cơ bản, nâng cao</option>
          <option value="">Lập trình JavaScript nâng cao</option>
          <option value="">Thiết kế UI/UX</option>
        </select>

        <div className="rounded shadow-md w-2/3">
          <div className="bg-white border w-20 shadow-sm text-center p-3 rounded mb-3 flex justify-between items-center">
            <div>
              <img
                src="../assets/images/avatar/avatar-1.jpg"
                alt="avatar"
                className="rounded-circle avatar-xl border-white border border-4 position-relative "
              />
              <h4 className="font-semibold">Lê Thị Thùy Linh</h4>
              <p className="text-sm text-gray-500">01/12/2024</p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
              <p className="mt-2">Khóa học rất hay</p>
              <button className="btn btn-primary m-1">Phản hồi</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
