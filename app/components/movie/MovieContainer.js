import styled from 'styled-components';

export default styled.a`
  background: ${props => `linear-gradient(to top, #000, transparent), url(${props.image}) no-repeat center center`};
  background-size: cover;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  float: left;
  height: 300px;
  justify-content: flex-end;
  margin: 2px;
  overflow: hidden;
  text-decoration: none;
  width: calc(25% - 4px);

  &:hover {
    opacity: .9;
  }

  @media screen and (max-width: 1824px) {
    width: calc(33.3% - 4px);
  }

  @media screen and (max-width: 1024px) {
    width: calc(50% - 4px);
  }

  @media screen and (max-width: 768px) {
    margin: 2px 0;
    width: 100%;
  }
`;
