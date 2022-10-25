import React from "react";

import { Container, Content, Component, Header, Body } from "./styles";

function List({ data }) {
  return (
    <Container>
      <Content>
        {data.map((d) => {
          return (
            <Component key={d.id} href={d.url_credential} target="_blank">
              <Header>
                <img src={d.logo} alt="" />
                <strong>{d.organization}</strong>
              </Header>

              <Body>
                <label>{d.name}</label>
                <label>Finalizado: {d.date_issue}</label>
              </Body>
            </Component>
          );
        })}
      </Content>
    </Container>
  );
}

export default List;
