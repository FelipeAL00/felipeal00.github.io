import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.6rem;
  list-style: none;
  margin: 1rem;

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

  strong {
    font-size: 1rem;
    line-height: 1.2rem;
    margin-top: 0.8rem;
  }

  span {
    font-size: 0.7rem;
    margin: auto 0;
    color: #ddd;
  }

  label {
    font-size: 0.5rem;
    color: #ccc;
    margin: auto 0;
  }
`;

export const Button = styled(Link)`
  background: #f5f5f5;
  color: #000;
  border: none;
  overflow: hidden;
  border-radius: 0.2rem;
  display: flex;
  margin-top: auto;
  align-items: center;
  transition: all 0.2s;
  height: 1.5rem;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }

  span {
    flex: 1;
    text-align: center;
    font-weight: 600;
    color: #333;
    transition: all 0.2s;

    color: #000;
    &:hover {
    }
  }
`;
