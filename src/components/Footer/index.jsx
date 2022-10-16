import React from "react";

import { Container, Content } from "./style";
import { WhatsApp, LinkedIn, GitHub, Feed, Mail } from "@mui/icons-material";

function Footer() {
  return (
    <Container>
      <Content>
        <LinkedIn sx={{ fontSize: 35 }} />
        <GitHub sx={{ fontSize: 35 }} />
        <Mail sx={{ fontSize: 35 }} />
        <Feed sx={{ fontSize: 35 }} />
        <WhatsApp sx={{ fontSize: 35 }} />
      </Content>
    </Container>
  );
}

export default Footer;
