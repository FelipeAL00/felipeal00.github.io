import styled from "styled-components";
import { darken } from "polished";
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

  > strong {
    font-size: 1rem;
    line-height: 1.2rem;
    color: #000;
    margin-top: 0.8rem;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
    color: #333;
  }
`;

export const Button = styled(Link)`
  background: #fff;
  color: #000;
  border: none;
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  margin-top: auto;
  align-items: center;
  transition: all 0.2s;
  text-decoration: none;
  &:hover {
    background: ${darken(0.05, "#fff")};
  }

  span {
    flex: 1;
    text-align: center;
    font-weight: 600;
  }
`;
