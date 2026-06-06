export const Documents = ({ selectedFile }) => {
  return (
    <div className="documents">
      <h2>Uploaded Documents</h2>

      {selectedFile ? (
        <ul>
          <li>{selectedFile.name}</li>
        </ul>
      ) : (
        <p>Upload a PDF to get started.</p>
      )}
    </div>
  );
};