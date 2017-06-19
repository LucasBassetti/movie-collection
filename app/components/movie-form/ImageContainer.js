import styled from 'styled-components';

export default styled.div`
  background: ${props => `url(${props.image}) no-repeat center center`};
  background-size: cover;
  height: 150px;
  width: 252px;
  display: inline-block;
  margin: 2px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: calc(100% - 4px);
  }
`;
