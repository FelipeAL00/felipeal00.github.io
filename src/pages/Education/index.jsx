import React from "react";
import {
  Container,
  Content,
  EducationBody,
  EducationHeader,
  EducationList,
} from "./styles";

import fecaf from "../../assets/images/logo_fecaf.jpg";
import etec from "../../assets/images/logo_etec.jpg";

function Education() {
  return (
    <Container>
      <EducationList>
        <Content
          href="https://www.fecaf.com.br/cursos/analise-e-desenvolvimento-de-sistemas"
          target="_blank"
          rel="noreferrer"
        >
          <EducationHeader>
            <strong>Análise e desenvolvimento de sistemas</strong>
            <img src={fecaf} alt="" />
          </EducationHeader>
          <EducationBody>
            <strong>Instituição: FECAF</strong>
            <label>Duração: 2 anos e 6 meses</label>
            <label>Status: Cursando</label>
            <label>Nível: Técnologo</label>
            <p>
              O curso visa ensinar na prática e na teoria como ser um Analista
              de sistemas e/ou Desenvolvedor de software. Dentre os conteúdos
              aprendidos temos: Python, Java, Ágil e MySQL
            </p>
          </EducationBody>
        </Content>
        <Content
          href="https://www.etecdeembu.com.br/Cursos/curso/3"
          target="_blank"
          rel="noreferrer"
        >
          <EducationHeader>
            <strong>Desenvolvimento de Software</strong>
            <img src={etec} alt="" />
          </EducationHeader>
          <EducationBody>
            <strong>Instituição: CPS - Etec de Embu das Artes</strong>
            <label>Duração: 1 ano e 6 meses</label>
            <label>Status: Concluído</label>
            <label>Nível: Técnico</label>
            <p>
              O curso visa ensinar na prática como ser Desenvolvedor de
              software. Dentre os conteúdos aprendidos temos: Python, Java, BDD,
              TDD, C#, PHP e Javascript
            </p>
          </EducationBody>
        </Content>
        <Content>
          <EducationHeader>
            <strong>Redes de Computadores</strong>
            <img src={etec} alt="" />
          </EducationHeader>
          <EducationBody>
            <strong>Instituição: CPS - Etec de Embu das Artes</strong>
            <label>Duração: 1 ano e 6 meses</label>
            <label>Status: Concluído</label>
            <label>Nível: Técnico</label>
            <p>
              O curso visa ensinar na prática como trabalhar diretamente como um
              técnico em redes de computadores, seja instalando, configurando,
              ou arquitetando uma rede. Algumas das habilidades obtidas neste
              curso:
            </p>
          </EducationBody>
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
