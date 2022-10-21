import styled from 'styled-components';

export const RadioButtonWrap = styled.div`
  .radioButtonContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .radioContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 12px;
    background: #212426;
    border-radius: 50%;
    box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.04),
      6px 6px 12px rgba(0, 0, 0, 0.16), inset 0 14px 14px rgba(0, 0, 0, 0.32);
  }

  .radio {
    width: 10px;
    height: 10px;
    background: #8c8e8f;
    border-radius: 50%;
  }

  .labelSpan {
    margin-left: 12px;
  }
`;
