import styled from "styled-components";

function Header() {
  return (
    <HeaderElement>FLASHCARD</HeaderElement>
  ) 
};

export default Header;

const HeaderElement = styled.div`
  font-family: bangers;
  font-size: 5rem;
  padding: 40px 0;
  border-bottom: 8px solid;

  @media (max-width: 576px) {
    padding: 5px 0;
    font-size: 4rem;
  }
`;