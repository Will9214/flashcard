import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getFlashcards } from "../redux/flashcards/flashcardActions";
import { AppDispatch, RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";



function ManageFlashcards() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFlashcards());
  }, []);

  const { flashcards } = useAppSelector(state => state.flashcardReducer);

  const renderFlashcards = () => {
    if (flashcards) {
      return flashcards.map((flashcard) => (
        <FlashcardList key={flashcard["_id"]}>
          <div style={{ paddingBottom: "5px" }}><strong>Name: </strong>{flashcard["name"]}</div>
          <div><strong>Info: </strong>{flashcard["info"]}</div>
          <hr />
        </FlashcardList>
      ))
    }
  }

  const handleHomeClick = (): void => {
    window.location.pathname = "/";
  }

  return (
    <ManageElement>
      <ListTitle>Flashcards

        <HomeButton onClick={handleHomeClick}>Home</HomeButton>
      </ListTitle>
      {renderFlashcards()}
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
