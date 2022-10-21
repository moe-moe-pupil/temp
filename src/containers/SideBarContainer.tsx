import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { uuid } from '@/utils/uuid';

export enum SidebarListType {
  DropDown = 'DropDown',
  Label = 'Label',
}
export interface SidebarListItemProps {
  name: string;
  id: string;
  onClick?: (...args: any) => void;
  customOptionElement?: React.ReactNode;
  content?: React.ReactNode;
  type?: SidebarListType;
}

export interface SidebarListItem {
  self: SidebarListItemProps;
  children?: SidebarListItemProps[];
}

const TitleWrap = styled.div<{ show: boolean }>`
  .title${SidebarListType.Label} {
    display: flex;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.3);
    justify-content: flex-start;
    margin: 5px 0;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .title${SidebarListType.DropDown} {
    display: flex;
    font-size: 12px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.3);
    justify-content: flex-start;
    margin: 5px 0;
    flex-direction: column;
    flex-wrap: nowrap;
    ${props => (props.show ? '' : '.childContainer{ display: none}')}
  }
`;

export const SidebarWrap = styled.div<{ fix: boolean }>`
  display: flex;
  position: ${props => (props.fix ? 'fixed' : 'content')};
  top: 50px;
  flex-direction: column;
  width: 150px;
  left: 20px;
`;

const SelectWrap = styled.div<{ select: boolean }>`
  .childContainer {
    background: ${props => (props.select ? '#f6f6f6 ' : ' rgba(0, 0, 0, 0)')};
  }
`;

const ChildWrap = styled.div`
  .childContainer:hover {
    background: #f6f6f6 !important;
  }
  .childContainer {
    position: relative;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: start !important;
    -ms-flex-pack: start !important;
    -webkit-justify-content: flex-start !important;
    justify-content: flex-start !important;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 135px;
    height: 37px;
    border-radius: 10px;
    margin: 5px 0;
    width: 149px;
    padding-left: 5px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
  }

  .child {
    max-width: calc(100% - 10px);
    height: 21px;
    line-height: 21px;
    font-size: 14px;
    margin-left: 5px;
    font-family: Poppins-SemiBold;
    color: #000000;
  }
`;

const SidebarContainer: React.FC<{
  listItems: SidebarListItem[];
  defaultSelectId: string;
  content: React.ReactNode;
  topSharedContent?: React.ReactNode;
  fix?: boolean;
}> = ({
  listItems,
  defaultSelectId,
  content,
  topSharedContent,
  fix = true,
}) => {
  const { t } = useTranslation();
  const [selectId, setSelectId] = useState(listItems[0].self.id);
  return (
    <SidebarWrap fix={fix}>
      {
        // left options
        listItems.map(item => {
          return (
            <TitleWrap
              key={`listItem${uuid()}`}
              show={item.self.id === selectId}
            >
              <div
                className={`title${
                  item.self.type ? item.self.type : SidebarListType.Label
                }`}
                onClick={() => {
                  item.self.onClick?.();
                  setSelectId(item.self.id);
                }}
              >
                {item.self.name}
                <ChildWrap>
                  {item.children?.map(cItem => {
                    return cItem.customOptionElement ? (
                      cItem.customOptionElement
                    ) : (
                      <SelectWrap
                        select={defaultSelectId === cItem.id}
                        key={`SelectWrap${uuid()}`}
                      >
                        <div
                          className="childContainer"
                          onClick={() => {
                            cItem.onClick?.(cItem.id);
                          }}
                        >
                          <div className="child">{t(cItem.name)}</div>
                        </div>
                      </SelectWrap>
                    );
                  })}
                </ChildWrap>
              </div>
            </TitleWrap>
          );
        })
      }
      <div className="sidebarContentContainer">
        {topSharedContent}
        {content}
      </div>
    </SidebarWrap>
  );
};

export default memo(SidebarContainer);
