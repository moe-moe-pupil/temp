import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useHistory } from '@modern-js/runtime/runtime-router';

const ButtonWrap = styled.div`
  .buttonContainer {
    cursor: pointer;
    appearance: auto;
    user-select: none;
    white-space: pre;
    align-items: flex-start;
    text-align: center;
    box-sizing: border-box;
    background-color: buttonface;
    color: buttontext;
    padding: 1px 6px;
    border-width: 1px;
    border-style: outset;
    border-color: buttonborder;
    border-image: initial;
  }
`;

interface ButtonProps {
  label: string;
  onClick?: () => void;
  clickGoto?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, clickGoto }) => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <ButtonWrap>
      <div
        className="buttonContainer"
        onClick={() => {
          onClick?.();
          if (clickGoto) {
            history.push(clickGoto);
          }
        }}
      >
        {t(label)}
      </div>
    </ButtonWrap>
  );
};

export default Button;
