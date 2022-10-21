import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectWrap } from './SelectWrap';
import { uuid } from '@/utils/uuid';

interface OptionProps {
  name: string;
  value: string;
}

interface SelectProps {
  defaultOption?: OptionProps;
  Options: OptionProps[];
  onChange: (data: OptionProps) => void;
  usei18: boolean;
}

const Select: React.FC<SelectProps> = ({
  defaultOption,
  Options,
  onChange,
  usei18 = false,
}) => {
  const { t } = useTranslation();

  return (
    <SelectWrap>
      <div
        className="selectContainer"
        onClick={(e: any) => {
          e.stopPropagation();
        }}
      >
        <select
          onChange={e => {
            onChange({
              name: e.currentTarget.name,
              value: e.currentTarget.value,
            });
          }}
          defaultValue={defaultOption?.value}
        >
          {Options.map(option => (
            <option value={option.value} key={`option${uuid()}`}>
              {usei18 ? t(option.name) : option.name}
            </option>
          ))}
        </select>
      </div>
    </SelectWrap>
  );
};
export default memo(Select);
