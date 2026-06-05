import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="heading">
        <h1>AI Learning Assistant</h1>
      <p>
        Upload notes, generate summaries, key points, quizzes, and ask
        questions.
      </p>
      </div>


      
      <button>Upload PDF</button>

      <div className="documents">
        <h2>Uploaded Documents</h2>
        <p>No PDF uploaded yet.</p>
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