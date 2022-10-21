import React from 'react';
import Button from '../Button';
import { FormWrap } from './FormWrap';
import PageContainer, { TabItem } from '@/containers/PageContainer';

interface FormProps {
  title?: string;
  customTopSideBar?: React.ReactNode;
  topSideBar?: TabItem[];
  nextGoto: string;
  cancelGoto: string;
}

const Form: React.FC<FormProps> = ({
  title,
  customTopSideBar,
  topSideBar,
  nextGoto,
  cancelGoto,
}) => {
  return (
    <FormWrap>
      <form>
        <PageContainer
          title={title}
          width={'100%'}
          customTopSidebar={customTopSideBar}
          topSidebarTabs={topSideBar}
          fix={false}
        />
        <div className="formButtonContainer">
          <Button label="cancel" clickGoto={cancelGoto} />
          <Button label="next" clickGoto={nextGoto} />
        </div>
      </form>
    </FormWrap>
  );
};

export default Form;
