import { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addFlashCard } from "../../redux/flashcards/flashcardActions";


function AddFlashcards() {
  const dispatch = useAppDispatch();
  
  // Need to work on this. Trying to display a message to user that the flashcard was added successfully. 
  const { loading } = useAppSelector(state => state.flashcardReducer);
  const [showSuccessfulAdd, setShowSuccessfulAdd] = useState(false);
  
  const handleAddFlashcard = (e: any) => {
    e.preventDefault();
    const flashcardData = new FormData(e.target);
    const flashcardObject = Object.fromEntries(flashcardData.entries());
    
    dispatch(addFlashCard(flashcardObject));

    e.currentTarget[0].value = "";
    e.currentTarget[1].value = "";

    if (!loading) {
      setShowSuccessfulAdd(true);
      setTimeout(() => {
        setShowSuccessfulAdd(false);
      }, 3000);
    }
  }

  return (
    <AddFlashcardsElement>
      <form onSubmit={handleAddFlashcard}>
        <NameInput>
          <NameInputLabel>Enter Flashcard Name:
          </NameInputLabel>
          <input type="text" name="name" placeholder="Enter Flashcard Name"/>
        </NameInput>
        <InfoInput>
          <InfoInputLabel>Enter Flashcard Information:</InfoInputLabel>
          <textarea name="info" placeholder="Enter Flashcard Info"/>
        </InfoInput>
        <button type="submit">Save</button>
        <a href="/manage" style={{ padding: "6.7px 10px", marginLeft: "15%" }}>Back</a>
      </form>
      {showSuccessfulAdd ? (
        <AddSuccess>&#10003; Successfully Added Flashcard!</AddSuccess>
      ) : (
        <></>
      )}

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

const AddSuccess = styled.div`
  margin: 20px 0;
  margin-left: 30%;
  font-weight: 700;
  width: fit-content;
  color: green;
`;