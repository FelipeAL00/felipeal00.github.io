import styled from "styled-components";

export const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackgroundImageLogo = styled.div`
  width: 3rem;
  height: 3rem;
  background: #d9d9d9;
  opacity: 0.3;
  border-radius: 50%;
`;

export const Menu = styled.menu`
  display: flex;
  justify-content: space-between;
  li {
    padding: 1rem;
    list-style: none;
  }
`;
