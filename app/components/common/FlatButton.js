import styled from 'styled-components';

export default styled.a`
  color: ${props => props.danger ? '#E57373' : '#fff'};
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  opacity: .8;
  padding: 8px 16px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
  }
`;
