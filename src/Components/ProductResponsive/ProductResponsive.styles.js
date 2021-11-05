import styled from 'styled-components';

export const Image = styled.img`
  width: 90%;
  height: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateMovieThumb 0.5s;
  margin-bottom:30px;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateMovieThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Wrapper = styled.button`
  display: block;
  background: crimson;
  width: 25%;
  min-width: 200px;
  height: 40px;
  border-radius: 30px;
  color: white;
  border: 0;
  font-size: 15px;
  margin: auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  margin-bottom:20px;

  :hover {
    opacity: 0.8;
  }
`;
export const Content = styled.div`
  display:none;
  @media screen and (max-width: 768px) {
    display:block;
 }
`;