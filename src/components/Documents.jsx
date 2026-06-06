export const Documents = ({ documents, removeDocument }) => {

    // console.log("Documents:", documents);
    return (
        <div className="documents">
            <h2>Uploaded Documents</h2>
            <p>Total Documents: {documents.length}</p>
            {documents.length > 0 ? (
                <ul>
                    {documents.map((doc, index) => (
                        <li key={index}>
                            <span>{doc.name}</span>

                            <button onClick={() => removeDocument(index)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Upload a PDF to get started.</p>
            )}
        </div>
    );
};