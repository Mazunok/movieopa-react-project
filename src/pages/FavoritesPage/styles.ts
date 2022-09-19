import styled from "styled-components";
import { Color } from "ui";

const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const LikeButton = styled.button`
  width: 250px;
  height: 56px;
  background-color: ${Color.Graphite};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export { FavoritesContainer, LikeButton };
