export const Upload = ({ setSelectedFile }) => {
  return (
    <input
      type="file"
      accept=".pdf"
      onChange={(event) => {
        setSelectedFile(event.target.files[0]);
      }}
    />
  );
};