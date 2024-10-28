import { useParams } from "react-router-dom";
import styled from "styled-components";
import { spacing } from "../GlobalStyled";
import { datas } from "../data";

const Section = styled.div`
  padding: 100px ${spacing.mainPadding};
  display: flex;
  justify-content: space-between;
`;
const Bg = styled.div`
  width: 50%;
  height: 700px;
  background: #808080 url(${(props) => props.$bgImg}) no-repeat center / cover;
`;
const Container = styled.div`
  width: 45%;
  h3 {
    font-size: 50px;
    font-weight: 700;
  }

  h5 {
    font-size: 18px;
    font-weight: 400;
    margin: 20px 0;
  }

  p {
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    li {
      color: #555;
      padding: 5px 12px;
      background-color: #dbdbdb;
      margin-right: 5px;
      border-radius: 5px;
    }
  }
`;

const Sub = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Section>
      <Bg $bgImg={datas[id].coverImg} />
      <Container>
        <h3>{datas[id].title}</h3>
        <h5>{datas[id].author}</h5>
        <p>{datas[id].desc}</p>
        <ul>
          {datas[id].hashTags.map((hashTag, index) => (
            <li key={index}>{hashTag}</li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Sub;
