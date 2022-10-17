import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  position: fixed;
  background: #141419;
  border-bottom: 0.1rem solid #fff;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0.5rem auto;
  max-height: 3rem;

  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackgroundImageLogo = styled.div`
  width: 2rem;
  height: 2rem;
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
