import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientLayout from "./components/ClientLayout";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import SignupModal from "./pages/SignupModal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/course" element={<CourseDetail />} />
        </Route>

        <Route path="/signup" element={<SignupModal />} />
      </Routes>
    </>
  );
}

export default App;
