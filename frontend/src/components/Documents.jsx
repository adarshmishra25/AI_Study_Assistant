import { SectionTitle } from "./SectionTitle";
export const Documents = ({ documents, removeDocument }) => {

    return (
        <div className="documents">
            <SectionTitle title="Uploaded Documents" />
            <p className="doc-count">
                📚 Documents :{documents.length} 
            </p>
            {documents.length > 0 ? (
                <ul>
                    {documents.map((doc, index) => (
                        <li key={index}>
                            <span>📄{doc.name}</span>

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