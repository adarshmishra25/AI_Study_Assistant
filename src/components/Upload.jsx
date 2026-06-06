export const Upload = ({ setDocuments }) => {
  return (
    <input
      type="file"
      accept=".pdf"
      onChange={(event) => {
        const file = event.target.files[0];

        // console.log("Selected file:", file);

        setDocuments((prevDocs) => [
          ...prevDocs,
          file
        ]);
      }}
    />
  );
};