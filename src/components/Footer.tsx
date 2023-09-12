import styled from "styled-components";

function Footer() {

  return (
    <FooterElement className="fixed-bottom" />
  )
};

export default Footer;

const FooterElement = styled.div`
  background-color: black;
  height: 40px;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
`;