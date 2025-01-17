import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientLayout from "./components/ClientLayout";
import Home from "./pages/Home";
import SignupModal from "./pages/SignupModal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/signup" element={<SignupModal />} />
      </Routes>
    </>
  );
}

export default App;
