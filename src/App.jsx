import { useState } from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Upload } from "./components/Upload";
import { Documents } from "./components/Documents";
import { Actions } from "./components/Actions";

function App() {
  const [documents, setDocuments] = useState([]);

  return (
    <div className="main">
      <Header />

      <Upload setDocuments={setDocuments} />

      <Documents documents={documents} />

      <Actions />
    </div>
  );
}

export default App;