import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientLayout from "./components/ClientLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
