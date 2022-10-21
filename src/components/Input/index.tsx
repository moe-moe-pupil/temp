import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface InputProps {
  label: string;
  value?: string;
  placeholder?: string;
  content?: React.MutableRefObject<string>;
}

/**
 * A ez way to handle input correctly
 * @param placeholder {string} 默认占位符
 * @param content {string} 默认值
 * @returns
 */
const Input: React.FC<InputProps> = ({
  placeholder,
  content,
  label,
  value,
}) => {
  const { t } = useTranslation();
  const _content = useRef<string>('');
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    _content.current = e.currentTarget.value;
    if (content) {
      content.current = e.currentTarget.value;
    }
  };
  return (
    <div className="RegInputContainer">
      <div className="inputLabel">{t(label)}</div>
      <input
        placeholder={placeholder}
        onInput={handleChange}
        style={{ width: '100%' }}
        value={value}
      />
    </div>
  );
};

export default Input;
