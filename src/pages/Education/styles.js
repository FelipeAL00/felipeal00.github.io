import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem auto;
  margin-bottom: 2rem;
`;

export const EducationList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.6rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0.4rem;
  padding: 1.2rem;
  text-align: center;
  margin: 0 0.6rem;
`;

export const EducationHeader = styled.div`
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

  img {
    width: 2.5rem;
    border-radius: 50%;
  }
`;

export const EducationBody = styled.div`
  display: flex;
  flex-direction: column;
`;
