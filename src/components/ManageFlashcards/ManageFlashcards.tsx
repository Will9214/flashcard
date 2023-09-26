import { useEffect } from "react";
import styled from "styled-components";
import { getFlashcards } from "../../redux/flashcards/flashcardActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ListFlashcards from "./ListFlashcards";

function ManageFlashcards() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFlashcards());
  }, []);

  const { flashcards } = useAppSelector(state => state.flashcardReducer);

  const handleHomeClick = (): void => {
    window.location.pathname = "/";
  }

  return (
    <ManageElement>

      <ListTitle>Flashcards
        <HomeButton onClick={handleHomeClick}>Home</HomeButton>
      </ListTitle>

      <FlashcardList>
        {flashcards.map((flashcard: any, i) => (
          <ListFlashcards key={i} name={flashcard.name} info={flashcard.info} />
        ))}
      </FlashcardList>

      <a href="/manage/add" style={{ padding: "5px 10px" }}>Add</a>

    </ManageElement>
  )
};

export default ManageFlashcards;

const ManageElement = styled.div`
  padding: 40px 0;
  padding-bottom: 80px;
`;

const ListTitle = styled.div`
  display: flex;
  font-family: bangers;
  font-weight: 700;
  font-size: 2rem;
  padding-bottom: 5px;
  text-align: left;
  margin-left: 12%;
`;

const HomeButton = styled.div`
  margin-left: 70%;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media(max-width: 576px) {
    margin-left: 25%;
  }
`;

const FlashcardList = styled.div`
  border: 1px solid;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: white;
  text-align: left;
`;
