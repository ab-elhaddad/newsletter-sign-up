import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import EmailContext from "./context/EmailContext";

function App() {
  return (
    <main>
      <EmailContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </BrowserRouter>
      </EmailContext>
    </main>
  );
}

export default App;
