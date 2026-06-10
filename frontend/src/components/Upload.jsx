export const Upload = ({ setDocuments }) => {
  return (
    <label className="upload-btn">
      📄 Upload PDF

      <input
        type="file"
        accept=".pdf"
        hidden
        onChange={(event) => {
          const file = event.target.files[0];

          setDocuments((prevDocs) => [
            ...prevDocs,
            file
          ]);
        }}
      />
    </label>
  );
};