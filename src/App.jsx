import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Summary } from "./pages/Summary";
import { KeyPoints } from "./pages/KeyPoints";
import { Quiz } from "./pages/Quiz";
import { Questions } from "./pages/Question";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/keypoints" element={<KeyPoints />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/questions" element={<Questions />} />
    </Routes>
  );
}

export default App;