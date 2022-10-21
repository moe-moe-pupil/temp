import styled from 'styled-components';

export const SelectWrap = styled.div`
  .selectContainer {
    position: relative;
    width: 100%;
    cursor: pointer;
  }
  .selectDropdownImg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 12px;
    margin: auto;
    transform: 0;
    transition: all 0.3s;
  }
  .down {
    transform: rotate(180deg);
  }
`;
