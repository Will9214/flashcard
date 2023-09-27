import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getRandomFlashcard } from "../redux/flashcards/flashcardActions";
import { useEffect, useState } from "react";

// Need to figure out. Trying to set up typescript for randomFlashcard from useAppSelector. 
interface RandomFlashcardProps {
  _id: string,
  name: string,
  info: string
}

function Flashcards() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRandomFlashcard());
  }, []);

  const [showFlashcardInfo, setShowFlashcardInfo] = useState(false);
  
  const handleNewCardClick = () => {
    dispatch(getRandomFlashcard());
    setShowFlashcardInfo(false);
  };
  
  const handleRevealInfoClick = () => {
    setShowFlashcardInfo(true);
  }
  
  const { loading }: any = useAppSelector(state => state.flashcardReducer)
  const { randomFlashcard }: any = useAppSelector(state => state.flashcardReducer)

  return(
    <ParentElement>
      <FlashcardElement>

        {loading ? (
          <FlashcardName>
            <Spinner />
          </FlashcardName>
        ) : (
          <FlashcardName>
            {randomFlashcard.name}
          </FlashcardName>
        )}
  
        {showFlashcardInfo ? (
          <FlashcardInfo>
            {randomFlashcard.info}
          </FlashcardInfo>
        ) : (
          <FlashcardInfo>
            ???
          </FlashcardInfo>
        )}
      
      </FlashcardElement>
      <ButtonElement>
        <Button onClick={handleNewCardClick}>New Card</Button>
        
        <Button onClick={handleRevealInfoClick}>Reveal Card</Button>
      </ButtonElement>
    </ParentElement>
  )
};

export default Flashcards;

const ParentElement = styled.div`
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 576px) {
    padding-top: 10px;
  }
`;

const ButtonElement = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 30%;
  padding-right: 5%;

  @media (max-width: 576px) {
    margin-top: 50%;
    margin-bottom: 0;
    padding-right: 0;
  }
  
`;

const Button = styled.div`
  font-family: bangers;
  font-size: 3rem;
  border: 5px solid black;
  margin: auto;
  width: fit-content;
  height: 50px;
  padding: 10px 15px;
  box-shadow: 0px 0px 15px;
  margin-bottom: 50px;

  &:hover {
    background-color: rgba(21, 21, 21, 0.3)
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
    width: 70%;
    height: fit-content;
    margin: auto;
    margin-bottom: 20px;
    padding: 5px 5px;
  }
`;

const FlashcardElement = styled.div`
  width: 70%;
  margin-bottom: 40px;

  @media (max-width: 576px) {
    margin: 10px 0;
  }
`;

const FlashcardName = styled.div`
  font-family: bangers;
  border: 5px solid black;
  height: fit-content;
  width: 35%;
  margin: auto;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 500;
  padding: 20px 5px;
  box-shadow: 0px 0px 15px;

  @media (max-width: 576px) {
    width: 70%;
    font-size: 1.5rem;
    padding: 5px 0;
  }
`;

const FlashcardInfo = styled.div`
  border: 5px solid black;
  height: fit-content;
  width: 70%;
  margin: auto;
  padding: 30px 15px;
  font-weight: 500;
  font-size: 1.1rem;
  white-space: pre-wrap;
  box-shadow: 0px 0px 15px;

  @media (max-width: 576px) {
    width: 85%;
    margin: auto;
    padding: 5px 5px;
    font-size: 1rem;
  }
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin: auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;