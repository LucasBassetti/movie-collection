import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  float: left;
  padding: 12px;
  width: calc(50% - 24px);

  @media screen and (max-width: 768px) {
    padding: 6px;
    width: calc(100% - 12px);
  }
`;
