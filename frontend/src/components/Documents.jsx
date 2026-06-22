export const Documents = ({
  documents,
  removeDocument,
  selectedId,
  setSelectedId,
}) => {
  return (
    <div className="documents">
      {documents.length === 0 ? (
        <div className="empty-documents">
          <h3>📄 No PDFs Uploaded Yet</h3>
          <p>
            Upload a PDF to generate summaries, quizzes, key points and ask
            questions.
          </p>
        </div>
      ) : (
        documents.map((doc, index) => (
          <li
            key={doc.id}
            className={
              Number(selectedId) === doc.id
                ? "document-item active-document"
                : "document-item"
            }
          >
            <span
              onClick={() => {
                localStorage.setItem("currentDocumentId", doc.id);

                setSelectedId(doc.id);

                window.location.reload();
              }}
            >
              📄 {doc.name}
              {Number(selectedId) === doc.id && (
                <span className="current-badge"> • (Active)</span>
              )}
            </span>

            <button onClick={() => removeDocument(index)}>Remove</button>
          </li>
        ))
      )}
    </div>
  );
};
