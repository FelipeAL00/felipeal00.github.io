import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  position: fixed;
  background: #141419;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Content = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0.5rem auto;
  max-height: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackgroundImageLogo = styled.img`
  width: 2rem;
  height: 2rem;
  background: #d9d9d9;
  border-radius: 50%;
  transition: all 0.2s;
  &:hover {
    opacity: 0.3;
  }
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
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }

  &:hover {
    opacity: 0.3;
  }
`;
