import { useState } from "react";
import "../App.css";

import { Header } from "../components/Header";
import { Upload } from "../components/Upload";
import { Documents } from "../components/Documents";
import { KeyPoints } from "./KeyPoints";
import { Actions } from "../components/Actions";


export const Home = () => {
  const [documents, setDocuments] = useState([]);

  const removeDocument = (indexToRemove) => {
  console.log("Removing:", indexToRemove);

  setDocuments(
    documents.filter(
      (_, index) => index !== indexToRemove
    )
  );
};

  return (
    <div className="main">
      <Header />

      <Upload setDocuments={setDocuments} />

      <Documents
        documents={documents}
        removeDocument={removeDocument}
      />

      <Actions />
    </div>
  );
};