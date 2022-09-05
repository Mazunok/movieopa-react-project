import styled from "styled-components";
import { Color } from "../../ui/colors";
import { MEDIA } from "../../ui/media";
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
  background: ${Color.Dark};
  border-radius: 10px;
  ${MEDIA.SM} {
    width: 320px;
    gap: 5px;
    padding: 20px 0;
  }
`;

const Text = styled.p`
  font-family: "Exo 2";
  ${S3};
  color: ${Color.White};
  padding-bottom: 5px;
  ${MEDIA.SM} {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Input = styled.input`
  background: ${Color.Graphite};
  border-radius: 10px;
  border: none;
  width: 494px;
  height: 56px;
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 500;
  padding-left: 20px;
  ${S3};
  color: ${Color.Secondary};
  ${MEDIA.SM} {
    width: 224px;
  }
`;

const Title = styled.h2`
  font-family: "Exo 2";
  font-style: normal;
  ${H2};
  color: ${Color.White};
  background: none;
  align-self: flex-start;
  padding-left: 40px;
`;

const Button = styled.button`
  border: none;
  background: ${Color.Primary};
  margin: 20px 0;
  border-radius: 10px;
  width: 494px;
  height: 56px;
  font-family: "Exo 2";
  font-style: normal;
  ${S3}
  color: ${Color.White};
  cursor: pointer;
  ${MEDIA.SM} {
    width: 225px;
  }
`;

const Span = styled.span`
  color: ${Color.Error};
  ${MEDIA.SM} {
  }
`;

export { StyledForm, Text, Input, Title, Button, Span };
