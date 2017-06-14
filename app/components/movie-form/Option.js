import styled from 'styled-components';

export default styled.a`
  cursor: ${props => props.isCover ? 'default' : 'pointer'};
  border: ${props => props.isCover ? '0' : '1px solid #fff'};
  border-radius: 10px;
  padding: 2px 6px;

  &:hover {
    background: ${props => props.isCover ? 'transparent' : '#fff'};
    color: ${props => props.isCover ? '#fff' : '#000'};
  }
`;
