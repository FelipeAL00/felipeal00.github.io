import styled from "styled-components";

export const ProjectList = styled.ul`
  margin: 5rem 1rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.6rem;
  list-style: none;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 0.4rem;
    padding: 1.2rem;
    text-align: center;
    margin: 0 0.6rem;
  }

  span {
    text-align: justify;
    font-size: 0.7rem;
    margin: auto 0;
    color: #ddd;
    margin-bottom: 0.5rem;
  }

  label {
    text-align: justify;
    font-size: 0.5rem;
    color: #ccc;
    margin: auto 0;
    margin-bottom: 0.3rem;
  }
`;

export const AvatarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 0.1rem solid #fff;

  strong {
    font-size: 1rem;
    line-height: 1.2rem;
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
    padding-bottom: 0.3rem;
  }
`;

export const Button = styled.a`
  background: #f5f5f5;
  color: #000;
  border: none;
  overflow: hidden;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }

  span {
    text-align: center;
    flex: 1;
    font-weight: 600;
    color: #333;
    transition: all 0.2s;
    margin-top: 0.3rem;
  }
`;
