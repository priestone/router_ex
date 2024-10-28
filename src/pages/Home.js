import { Link } from "react-router-dom";
import styled from "styled-components";
import { spacing } from "../GlobalStyled";
import { datas } from "../data";

const Banner = styled.div`
  height: 600px;
  background: url(https://image.fnnews.com/resource/media/image/2023/03/29/202303291111318751_l.jpg)
    no-repeat center / cover;
`;
const Section = styled.div`
  padding: 100px ${spacing.mainPadding};
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 19%;
`;

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Section>
        {datas.map((data) => (
          <Con key={data.id}>
            <Link to={`/sub/${data.id}`}>
              <img src={data.imgUrl} alt={data.title} />
            </Link>
          </Con>
        ))}
      </Section>
    </div>
  );
};

export default Home;
