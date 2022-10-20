import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ButtonWrap = styled.div`
  .buttonContainer {
    cursor: pointer;
  }
`;

interface ButtonProps {
  name: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  const { t } = useTranslation();
  return (
    <ButtonWrap>
      <div className="buttonContainer" onClick={onClick}>
        {t(name)}
      </div>
    </ButtonWrap>
  );
};

export default Button;
