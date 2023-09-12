import styled from "styled-components";

function Flashcards() {

  return(
    <ParentElement>
      <StartButton>Start</StartButton>

      <FlashcardElement>
        <FlashcardName />
        <FlashcardInfo />
      </FlashcardElement>

      <NextButton>Next</NextButton>

    </ParentElement>
  )
};

export default Flashcards;

const ParentElement = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 576px) {
    padding-top: 20px;
  }
`;

const StartButton = styled.div`
  font-family: bangers;
  font-size: 3rem;
  border: 5px solid black;
  width: 15%;
  margin-left: 42.5%;
  height: 50px;
  padding: 10px 0;
  box-shadow: 0px 0px 15px;

  &:hover {
    background-color: rgba(21, 21, 21, 0.3)
  }

  @media (max-width: 576px) {
    width: 30%;
    margin-left: 35%;
    padding: 5px 0;
  }
`;

const FlashcardElement = styled.div`
  display: flex;
  margin: 40px 0;

  @media (max-width: 576px) {
    margin: 20px 0;
  }
`;

const FlashcardName = styled.div`
  border: 5px solid black;
  height: 200px;
  width: 15%;
  margin-left: 30%;

  @media (max-width: 576px) {
    width: 35%;
    margin-left: 10%;
  }
`;

const FlashcardInfo = styled.div`
  border: 5px solid black;
  height: 200px;
  width: 15%;
  margin-left: 10%;

  @media (max-width: 576px) {
    margin-left: 10%;
    width: 35%;
  }
`;

const NextButton = styled.div`
  font-family: bangers;
  font-size: 3rem;
  border: 5px solid black;
  width: 15%;
  margin-left: 42.5%;
  height: 50px;
  padding: 10px 0;
  box-shadow: 0px 0px 15px;
  margin-bottom: 40px;

  &:hover {
    background-color: rgba(21, 21, 21, 0.3)
  }

  @media (max-width: 576px) {
    width: 30%;
    margin-left: 35%;
    padding: 5px 0;
  }
`;