import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem auto;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 900px;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0.4rem;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    max-width: 500px;
    width: 80%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 0.1rem solid #fff;

  strong {
    max-width: 900px;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
    padding-bottom: 0.3rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  p {
    font-size: 0.9rem;
    opacity: 0.8;
    width: 100%;
    text-align: justify;
  }

  li {
    font-size: 0.8rem;
    margin-left: 1rem;
  }

  label {
    font-size: 0.8rem;
    margin-left: 1rem;
  }

  a {
    background: #f5f5f5;
    color: #000;
    border: none;
    overflow: hidden;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    transition: all 0.2s;
    text-decoration: none;
    margin-top: 0.3rem;
    padding: 0.1rem;
    &:hover {
      opacity: 0.5;
    }

    span {
      text-align: center;
      flex: 1;
      font-weight: 600;
      color: #333;
      transition: all 0.2s;
    }
  }
`;

export const AvatarImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
