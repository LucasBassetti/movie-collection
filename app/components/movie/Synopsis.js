import styled from 'styled-components';

export default styled.p`
  color: #fff;
  display: -webkit-box;
  font-size: 14px;
  height: 48px;
  margin: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: ${props => props.hover ? 'translateY(0)' : 'translateY(72px)'};
  transition: transform .3s ease;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
