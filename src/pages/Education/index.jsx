import React from "react";

import {
  Container,
  Content,
  EducationBody,
  EducationHeader,
  EducationList,
} from "./styles";

import fecaf from "../../assets/images/fecaf_logo.jpg";

function Education() {
  return (
    <Container>
      <EducationList>
        <Content>
          <EducationHeader>
            <strong>Análise e desenvolvimento de sistemas</strong>
            <img src={fecaf} alt="" />
          </EducationHeader>
          <EducationBody></EducationBody>
        </Content>
        <Content>
          <EducationHeader>
            <strong></strong>
          </EducationHeader>
        </Content>
        <Content>
          <EducationHeader>
            <strong></strong>
          </EducationHeader>
        </Content>
        <Content>
          <EducationHeader>
            <strong></strong>
          </EducationHeader>
        </Content>
      </EducationList>
    </Container>
  );
}

export default Education;
