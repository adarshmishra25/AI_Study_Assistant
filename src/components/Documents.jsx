export const Documents = ({ documents }) => {

    // console.log("Documents:", documents);
    return (
        <div className="documents">
            <h2>Uploaded Documents</h2>
            {documents.length > 0 ? (
                <ul>
                    {documents.map((doc, index) => (
                        <li key={index}>
                            {doc.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Upload a PDF to get started.</p>
            )}
        </div>
    );
};