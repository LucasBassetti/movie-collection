import styled from 'styled-components';

export default styled.div`
  background: ${props => `url(${props.image}) no-repeat center center`};
  background-size: cover;
  height: 300px;
  margin: 2px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;
