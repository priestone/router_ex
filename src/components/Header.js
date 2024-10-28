import { Link } from "react-router-dom";
import styled from "styled-components";
import { spacing } from "../GlobalStyled";

const SHeader = styled.div`
  padding: 20px ${spacing.mainPadding};
  border-bottom: 1px solid #dbdbdb;
`;

const Header = () => {
  return (
    <SHeader>
      <h3>
        <Link to={"/"}>Web Toon</Link>
      </h3>
    </SHeader>
  );
};

export default Header;
