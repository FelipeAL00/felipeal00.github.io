import React, { useState } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

import {
  Container,
  ArrowLeft,
  ArrowRight,
  ListArea,
  List,
  Content,
} from "./style";

export default function ListType({ title, content }) {
  const [scrollX, setScrollX] = useState(0);
  const clickArrowLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const clickArrowRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let fullSizeList = content.data.length * 150;
    if (window.innerWidth - fullSizeList > x) {
      x = window.innerWidth - fullSizeList - 60;
    }
    setScrollX(x);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <ArrowLeft onClick={clickArrowLeft}>
        <ArrowBackIosNew sx={{ fontSize: 30 }} />
      </ArrowLeft>
      <ArrowRight onClick={clickArrowRight}>
        <ArrowForwardIos sx={{ fontSize: 30 }} />
      </ArrowRight>

      <ListArea>
        <List style={{ marginLeft: scrollX }}>
          {content.data.length > 0 &&
            content.data.map((data, key) => (
              <Content key={key}>
                <img src={data.logo} alt={data.organization} />
              </Content>
            ))}
        </List>
      </ListArea>
    </Container>
  );
}
