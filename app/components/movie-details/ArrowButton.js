import styled from 'styled-components';

export default styled.a`
  align-items: center;
  background: ${props => props.isNext ? 'linear-gradient(to left, #000, transparent);' : 'linear-gradient(to right, #000, transparent);'};
  background-size: cover;
  cursor: pointer;
  display: flex;
  fill: #eee;
  height: 300px;
  justify-content: center;
  left: ${props => props.isNext ? '' : '0'};
  opacity: .7;
  position: absolute;
  right: ${props => props.isNext ? '0' : ''};
  top: 0;
  width: 50px;

  &:hover {
    fill: #fff;
  }
`;
