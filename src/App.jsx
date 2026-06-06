import { useState } from "react";
import "./App.css";

function App() {

  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="main">
      <div className="heading">
        <h1>AI Learning Assistant</h1>
        <p>
          Upload notes, generate summaries, key points, quizzes, and ask
          questions.
        </p>
      </div>




      <input type="file" accept=".pdf" onChange={(event) => { setSelectedFile(event.target.files[0]) }} />

      <div className="documents">
        <h2>Uploaded Documents</h2>
        {selectedFile ? (
          <p>{selectedFile.name}</p>
        ) : (
          <p>Upload a PDF to get started.</p>
        )}
      </div>


      <div className="action">
        <h1>Actions</h1>
        <button>Generate Summary</button>
        <button>Generate Key Points</button>
        <button>Generate Quiz</button>
        <button>Ask Questions</button>
      </div>



    </div>
  );
}

export default App;