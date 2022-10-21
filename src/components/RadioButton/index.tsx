import { useTranslation } from 'react-i18next';
import React from 'react';
import { RadioButtonWrap } from './RadioButtonWrap';

interface SubmitButtonProps {
  label: string;
  checked: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const RadioButton: React.FC<SubmitButtonProps> = ({
  label,
  checked,
  onClick,
}) => {
  const { t } = useTranslation();
  return (
    <RadioButtonWrap>
      <div className="radioButtonContainer" onClick={onClick}>
        <div className="radioContainer">
          {checked && <div className="radio" />}
        </div>
        <span className="labelSpan">{t(label)}</span>
      </div>
    </RadioButtonWrap>
  );
};

export default RadioButton;
