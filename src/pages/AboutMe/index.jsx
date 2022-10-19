import React from "react";
import { AvatarImage, Container, Content, Header, Body } from "./styles";

import logo_image from "../../assets/images/logo_image.jpg";
import pdf from "../../assets/pdfs/FelipeAlmeidadaSilva.pdf";

export default function AboutMe() {
  return (
    <Container>
      <Content>
        <Header>
          <AvatarImage src={logo_image} />
          <strong>Felipe Almeida da Silva</strong>
        </Header>
        <Body>
          <p>
            Desenvolvedor e QA, apaixonado por tecnologia desde o primeiro
            contato com um computador. Atualmente trabalhando como Analista de
            Qualidade Pleno. Algumas tecnologias que uso e pratico:
          </p>
          <li>Selenium</li>
          <li>Cucumber</li>
          <li>Java</li>
          <li>Python</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Node</li>
          <li>Cypress</li>
          <li>Maven</li>

          <p>Experiências:</p>
          <li>
            Internacional Games Solution/Ortiz Gaming - Empresa multinacional
            voltada para o ramo de jogos 2D para cassinos atuando na América,
            Europa e Ásia
          </li>
          <li>
            RSI Informática - Empresa nacional de testes trabalhando como
            terceirizado para o Santander
          </li>
          <li>
            Keeggo - Empresa multinacional de desenvolvimento(Antiga RSI)
            trabalhando como terceirizado para a Zurich - Santander{" "}
          </li>

          <p>Avalie meu curriculo: </p>
          <a href={pdf} target="_blank" rel="noreferrer">
            Ver mais
          </a>
        </Body>
      </Content>
    </Container>
  );
}
