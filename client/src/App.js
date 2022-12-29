import { Routes, Route } from "react-router-dom";
import ImageUploader from "./screens/ImageUploader";
import ImageViewer from "./screens/ImageViewer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ImageViewer />} />
        <Route path="/upload" element={<ImageUploader />} />
      </Routes>
    </div>
  );
}

export default App;
