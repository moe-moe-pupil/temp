import React from 'react';
import styled from 'styled-components';
import { uuid } from '@/utils/uuid';

const ContentWrap = styled.div`
  .contentItem {
  }

  .contentContainer {
    display: flex;
  }
`;

const RightContent: React.FC<{ contents: React.ReactNode[] }> = ({
  contents,
}) => {
  return (
    <ContentWrap>
      <div className="contentContainer">
        {contents.map(item => (
          <div className="contentItem" key={`RightContent${uuid()}`}>
            {item}
          </div>
        ))}
      </div>
    </ContentWrap>
  );
};

export default RightContent;
