import { useState } from "react";
import styled from "styled-components";


function AddFlashcards() {
  const [flashcardName, setFlashcardName] = useState("");
  const [flashcardInfo, setFlashcardInfo] = useState("");

  const handleAddFlashcard = (e: any) => {
    
  }

  return (
    <AddFlashcardsElement>
      <form onSubmit={handleAddFlashcard}>
        <NameInput>
          <NameInputLabel>Enter Flashcard Name:
          </NameInputLabel>
          <input name="flashcardName" />
        </NameInput>
        <InfoInput>
          <InfoInputLabel>Enter Flashcard Information:</InfoInputLabel>
          <textarea name="flashcardInfo" />
        </InfoInput>
        <button>Save</button>
        <a href="/manage" style={{ padding: "6.7px 10px", marginLeft: "15%" }}>Back</a>
      </form>

    </AddFlashcardsElement>
  )
};

export default AddFlashcards;

const AddFlashcardsElement = styled.div`
  padding: 40px 0;
  padding-bottom: 80px;
`;

const NameInput = styled.div`
  padding-bottom: 40px;
`;

const NameInputLabel = styled.div`
  font-weight: 700;
  width: fit-content;
  margin-left: 30%;
  padding-bottom: 10px;

  @media (max-width: 576px) {
    margin-left: 18%;
  }
`;

const InfoInput = styled.div`
  margin-bottom: 20px;
`;

const InfoInputLabel = styled.div`
  font-weight: 700;
  width: fit-content;
  margin-left: 30%;
  padding-bottom: 10px;

  @media (max-width: 576px) {
    margin-left: 18%;
  }
`;