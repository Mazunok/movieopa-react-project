import styled from "styled-components";
import { Color } from "../../ui/colors";
import { MEDIA } from "../../ui/media";
import { H2, S3 } from "../../ui/typography";

const StyledForm = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 574px;
  padding: 30px 0;
  background: ${Color.Dark};
  border-radius: 10px;
  ${MEDIA.SM} {
    gap: 5px;
    width: 320px;
    padding: 20px 0;
  }
`;

const Text = styled.p`
  padding-bottom: 5px;
  ${S3};
  font-family: "Exo 2";
  color: ${Color.White};
  ${MEDIA.SM} {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Input = styled.input`
  width: 494px;
  height: 56px;
  padding-left: 20px;
  ${S3};
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 500;
  color: ${Color.Secondary};
  background: ${Color.Graphite};
  border: none;
  border-radius: 10px;
  ${MEDIA.SM} {
    width: 224px;
  }
`;

const Title = styled.h2`
  align-self: flex-start;
  padding-left: 40px;
  ${H2};
  font-family: "Exo 2";
  font-style: normal;
  color: ${Color.White};
  background: none;
`;

const Button = styled.button`
  width: 494px;
  height: 56px;
  margin: 20px 0;
  ${S3}
  font-family: "Exo 2";
  font-style: normal;
  color: ${Color.White};
  background: ${Color.Primary};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  ${MEDIA.SM} {
    width: 225px;
  }
`;

const Span = styled.span`
  color: ${Color.Error};
`;

export { StyledForm, Text, Input, Title, Button, Span };
