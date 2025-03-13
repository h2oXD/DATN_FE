// export default function LoginGoogle() {
//   const handleGoogleLogin = () => {
//     window.location.href = `${
//       import.meta.env.VITE_API_BASE_URL
//     }/api/auth/google/redirect`;
//   };

//   return (
//     <a
//       className="btn btn-light border d-flex align-items-center justify-content-center gap-2 mt-2 px-3 py-2 mb-3 w-100 text-dark fw-semibold shadow-sm"
//       onClick={handleGoogleLogin}
//     >
//       <i className="bi bi-google text-danger"></i> Đăng nhập Google
//     </a>
//   );
// }

export default function LoginGoogle() {
  const handleGoogleLogin = () => {
    window.location.href = `${
      import.meta.env.VITE_API_BASE_URL
    }/api/auth/google/redirect`;
  };

  return (
    <button
    type="button"
      className="btn btn-light border d-flex align-items-center justify-content-center gap-2 mt-2 px-3 py-2 mb-3 w-100 text-dark fw-semibold shadow-sm"
      onClick={handleGoogleLogin}
    >
      <i className="bi bi-google text-danger"></i> Đăng nhập Google
    </button>
  );
}
