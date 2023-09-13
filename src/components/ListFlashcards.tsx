import { useState } from "react";
import styled from "styled-components"

type PropType = {
  name: string,
  info: string,
}

function ListFlashcards({ name, info }: PropType) {

  const [showMore, setShowMore] = useState(false);
  const handleShowMoreClick = () => setShowMore(true);
  const handleShowLessClick = () => setShowMore(false);
  

  return (
    <>
      <div>
        <div style={{ paddingBottom: "5px" }}><strong>Name: </strong>{name}</div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>

          {showMore ? (
            <>
              <AllInfo>
                <strong>Info: </strong>
                {info}
              </AllInfo>
              <ShowButton onClick={handleShowLessClick}>Show Less</ShowButton>
            </>
          ) : (
            <>
              <TruncatedInfo>
                <strong>Info: </strong>
                {info}
              </TruncatedInfo>
              <ShowButton onClick={handleShowMoreClick}>Show More</ShowButton>
            </>
          )}

        </div>
        <hr />
      </div>
    </>
  )
};

export default ListFlashcards;

const AllInfo = styled.div`
  width: 90%;
`;

const TruncatedInfo = styled.div`
  height: 18px;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ShowButton = styled.div`
  width: fit-content;
  padding-left: 10px;
  font-weight: 600;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
