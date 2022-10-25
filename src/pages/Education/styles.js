import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem auto;
  margin-bottom: 2rem;

  h3 {
    margin: 1rem 0.6rem;
  }

  strong {
    font-size: 1rem;
    line-height: 1.2rem;
    margin-top: 0.8rem;
    padding-bottom: 0.3rem;
  }
`;

export const EducationList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.6rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Content = styled.a`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0.4rem;
  padding: 1.2rem;
  text-align: center;
  margin: 0 0.6rem;
  transition: all 0.2s;
  text-decoration: none;
  color: var(--text);
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #000;
    border-color: #000;
  }
`;

export const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 0.1rem solid #fff;

  strong {
    margin-bottom: 0.5rem;
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
`;

export const EducationBody = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    text-align: justify;
  }

  label {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    text-align: justify;

    div {
      margin-left: 0.1rem;
    }
  }

  p {
    opacity: 0.8;
    text-align: justify;
    font-size: 0.6rem;
  }
`;
