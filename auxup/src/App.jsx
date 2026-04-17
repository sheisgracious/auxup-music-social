import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={<div className="p-8">Dashboard coming soon</div>}
        />
        <Route
          path="/room/:code"
          element={<div className="p-8">Room coming soon</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
