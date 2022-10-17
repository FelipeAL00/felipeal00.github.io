import React from "react";

import { Container, Content } from "./style";
import { WhatsApp, LinkedIn, GitHub, Feed } from "@mui/icons-material";

function Footer() {
  return (
    <Container>
      <Content>
        <a
          href="https://www.linkedin.com/in/felipe-almeida-da-silva-34a114150/"
          target="_blank"
        >
          <LinkedIn sx={{ fontSize: 35 }} />
        </a>
        <a href="https://github.com/felipeal00" target="_blank">
          <GitHub sx={{ fontSize: 35 }} />
        </a>
        <a href="../../assets/pdfs/Felipe Almeida da Silva.pdf">
          <Feed sx={{ fontSize: 35 }} />
        </a>
        <a href="https://wa.me/5511953701433" target="_blank">
          <WhatsApp sx={{ fontSize: 35 }} />
        </a>
      </Content>
    </Container>
  );
}

export default Footer;
