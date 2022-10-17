import styled from "styled-components";

export const Container = styled.footer`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  a {
    text-decoration: none;
    color: #aaa;
    margin: 0 0.5rem;
    transition: all 0.2s;
    &:hover {
      color: #fff;
    }
  }
`;
