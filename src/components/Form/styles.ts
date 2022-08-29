import styled from "styled-components";
import { Color } from "../../ui/colors";
import { H2, S3 } from "../../ui/typography";

const StyledForm = styled.form`
  width: 574px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: ${Color.dark};
  border-radius: 10px;
`;

const Text = styled.p`
  font-family: "Exo 2";
  ${S3};
  color: ${Color.white};
  padding-bottom: 5px;
`;

const Input = styled.input`
  background: ${Color.graphite};
  border-radius: 10px;
  border: none;
  width: 494px;
  height: 56px;
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 500;
  padding-left: 20px;
  ${S3};
  color: ${Color.secondary};
`;

const Title = styled.h2`
  font-family: "Exo 2";
  font-style: normal;
  ${H2};
  color: ${Color.white};
  background: none;
  align-self: flex-start;
  padding-left: 40px;
`;

const Button = styled.button`
  border: none;
  background: ${Color.primary};
  margin: 20px 0;
  border-radius: 10px;
  width: 494px;
  height: 56px;
  font-family: "Exo 2";
  font-style: normal;
  ${S3}
  color: ${Color.white};
  cursor: pointer;
`;

const Span = styled.span`
  color: red;
`;

export { StyledForm, Text, Input, Title, Button, Span };
