import styled from "styled-components";

function ManageFlashcards() {

  const handleHomeClick = (): void => {
    window.location.pathname = "/";
  }

  return (
    <ManageElement>
      <ListTitle>Flashcards

        <HomeButton onClick={handleHomeClick}>Home</HomeButton>
      </ListTitle>
      <FlashcardList>
        <div style={{ paddingBottom: "5px" }}><strong>Name: </strong>JavaScript</div>
        <div><strong>Info: </strong>A programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).</div>
        <hr />
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
