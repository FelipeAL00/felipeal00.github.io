import styled from "styled-components";

export const Fixed = styled.div`
  position: fixed;
  width: 100%;

  &:-webkit-scrollbar {
    background: #fff;
    color: #fff;
  }
`;

export const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem;
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

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const MenuOption = styled.li`
  list-style: none;
  padding: 0 1rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.3;
  }
`;
