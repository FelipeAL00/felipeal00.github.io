import React from "react";

import { Container, Content } from "./style";
import { WhatsApp, LinkedIn, GitHub, Feed } from "@mui/icons-material";

import pdf from "../../assets/pdfs/FelipeAlmeidadaSilva.pdf";

function Footer() {
  return (
    <Container>
      <Content>
        <a
          href="https://www.linkedin.com/in/felipe-almeida-da-silva-34a114150/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn sx={{ fontSize: 35 }} />
        </a>
        <a
          href="https://github.com/felipeal00"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub sx={{ fontSize: 35 }} />
        </a>
        <a href={pdf} target="_blank" rel="noreferrer">
          <Feed sx={{ fontSize: 35 }} />
        </a>
        <a href="https://wa.me/5511953701433" target="_blank" rel="noreferrer">
          <WhatsApp sx={{ fontSize: 35 }} />
        </a>
      </Content>
    </Container>
  );
}

export default Footer;
