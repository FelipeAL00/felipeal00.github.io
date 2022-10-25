import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 2rem;
  margin: 1rem 0.6rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.6rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Component = styled.a`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.4rem;
  text-decoration: none;
  color: var(--text);
  padding: 1rem;

  display: flex;
  flex-direction: column;
  transition: all 0.2s;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  strong {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  label {
    display: flex;
    align-items: center;
    font-size: 0.58rem;
    text-align: justify;
  }
`;
