import styled from "styled-components";
import { Color } from "../../ui/colors";
import { S2 } from "../../ui/typography";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 260px;
  height: 350px;
`;

const Poster = styled.img`
  border-radius: 20px;
  width: 260px;
`;

const Title = styled.title`
  ${S2}
  color: ${Color.white};
`;

const Type = styled.p`
  ${S2}
  font-weight: 500;
  color: ${Color.light};
`;

const Year = styled.p`
  ${S2}
  font-weight: 500;
  color: ${Color.light};
`;

export { Title, Type, Poster, Year, CardContainer };
