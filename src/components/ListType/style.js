import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 2rem;

  h2 {
    margin: 0 0 0 2rem;
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 2rem;
`;

export const List = styled.div`
  transition: all ease 0.5s;
`;

export const Content = styled.div`
  display: inline-block;
  width: 9.3rem;
  cursor: pointer;

  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.3s;

    &:hover {
      transform: scale(1);
    }
  }
`;

export const ArrowLeft = styled.div`
  position: absolute;
  height: 225px;
  width: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.3s;
  left: 0;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 760px) {
    opacity: 1;
  }
`;

export const ArrowRight = styled.div`
  position: absolute;
  height: 225px;
  width: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.3s;
  right: 0;

  &:hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    opacity: 1;
  }
`;
