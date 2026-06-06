import { useState } from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Upload } from "./components/Upload";
import { Documents } from "./components/Documents";
import { Actions } from "./components/Actions";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="main">
      <Header />

      <Upload setSelectedFile={setSelectedFile} />

      <Documents selectedFile={selectedFile} />

      <Actions />
    </div>
  );
}

export default App;