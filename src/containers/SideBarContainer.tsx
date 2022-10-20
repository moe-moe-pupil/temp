import React, { memo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { uuid } from '@/utils/uuid';

export interface ListItemProps {
  name: string;
  id: string;
  onClick: (...args: any) => void;
}

export interface ListItem {
  self: ListItemProps;
  child: ListItemProps[];
}

const TitleWrap = styled.div`
  .title {
    display: flex;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.3);
    justify-content: flex-start;
    margin: 5px 0;
    flex-direction: column;
    flex-wrap: nowrap;
  }
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

const SideBarContainer: React.FC<{
  listItems: ListItem[];
  selectId: string;
}> = ({ listItems, selectId }) => {
  const { t } = useTranslation();

  return (
    <SideBarWrap>
      {listItems.map(item => {
        return (
          <TitleWrap key={`listItem${uuid()}`}>
            <div
              className="title"
              onClick={() => {
                item.self.onClick();
              }}
            >
              {item.self.name}
              <ChildWrap>
                {item.child.map(cItem => {
                  return (
                    <SelectWrap
                      select={selectId === cItem.id}
                      key={`SelectWrap${uuid()}`}
                    >
                      <div
                        className="childContainer"
                        onClick={() => {
                          cItem.onClick(cItem.id);
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
      })}
    </SideBarWrap>
  );
};

export const SideBarWrap = styled.div`
  display: flex;
  position: fixed;
  top: 50px;
  flex-direction: column;
  width: 150px;
  left: 20px;
`;

export default memo(SideBarContainer);
