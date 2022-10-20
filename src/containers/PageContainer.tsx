import React, { useState } from 'react';
import styled from 'styled-components';
import { uuid } from '@/utils/uuid';
import RightContent from '@/components/RightContent';

const ProLayout = styled.div<{
  width: number | string;
  offset: number;
  top: number;
}>`
  .ProContentLayout {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: ${props =>
      typeof props.width === 'number' ? `${props.width}px` : props.width};
    top: ${props => props.top}px;
    overflow-y: auto;
  }

  .tabsContainer {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: column nowrap;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    width: 100%;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    align-content: center;
  }

  .tab {
    width: 100%;
    text-align: center;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    font-size: 16px;
  }

  .tab a {
    width: 100%;
    display: block;
  }
`;

export interface TabItem {
  name: string;
  content: React.ReactNode;
  onClick?: () => void;
}

export interface PageContainerProps {
  width: number | string;
  children?: React.ReactNode;
  offset?: number; // height subtract offset for small screen
  topSidebarTabs?: TabItem[];
  customTopSidebar?: React.ReactNode; // if this is not undefined it will replace topSidebarTabs
  contentTopOffset?: number; // content top offset from the top of popup
  rightContentItems?: React.ReactNode[];
  onClick?: () => void;
}

const PageContainer: React.FC<PageContainerProps> = ({
  width,
  children,
  offset = 0,
  customTopSidebar,
  topSidebarTabs,
  contentTopOffset = 50,
  rightContentItems,
  onClick,
}) => {
  const [selectTab, setSelectTab] = useState(0);
  return (
    <ProLayout
      width={width}
      offset={offset}
      top={contentTopOffset}
      onClick={() => onClick?.()}
    >
      {customTopSidebar
        ? customTopSidebar
        : topSidebarTabs && (
            <>
              <div className="tabsContainer">
                {topSidebarTabs.map((tab, tIdx) => (
                  <div
                    id={`tabs${tIdx}`}
                    key={`topSidebarTabs${uuid()}`}
                    className="tab"
                    style={{
                      borderBottom:
                        tIdx === selectTab ? '2px solid  #000' : '0px',
                      boxShadow:
                        tIdx === selectTab
                          ? 'none'
                          : '0 2px 0 rgb(135 134 134 / 16%)',
                      fontFamily:
                        tIdx === selectTab ? 'Poppins-SemiBold' : 'Poppins',
                    }}
                    onClick={_e => {
                      setSelectTab(tIdx);
                      tab.onClick?.();
                    }}
                  >
                    {tab.name}
                  </div>
                ))}
                {rightContentItems && (
                  <RightContent contents={rightContentItems} />
                )}
              </div>
              <div className="tabsContetnt">
                {topSidebarTabs[selectTab].content}
              </div>
            </>
          )}
      {React.Children.count(children) > 0 && (
        <div className="ProContentLayout">{children}</div>
      )}
    </ProLayout>
  );
};

export default PageContainer;
