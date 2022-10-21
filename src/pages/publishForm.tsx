import { Helmet } from '@modern-js/runtime/head';
import React, { useState } from 'react';
import Form from '@/components/Form';
import SidebarContainer, {
  SidebarListItem,
} from '@/containers/SidebarContainer';
import RadioButton from '@/components/RadioButton';
import {
  CuratedPublishContent,
  TopSharedContent,
} from '@/props/_PublishFormProps';

const NORMAL_FOLDER = 'normal folder';
const CURATE_FOLDER = 'curate folder';
const PublishForm = () => {
  const [selectedOption, setSelectedOption] = useState(NORMAL_FOLDER);
  const [selectedContent, setSelectedContent] = useState<React.ReactNode>(
    <></>,
  );
  const sidebarListItems: SidebarListItem[] = [
    {
      self: {
        name: 'Folder Type',
        id: 'Folder Type',
        onClick: () => {
          // todo
        },
      },
      children: [
        {
          name: NORMAL_FOLDER,
          id: NORMAL_FOLDER,
          customOptionElement: (
            <RadioButton
              label={NORMAL_FOLDER}
              checked={selectedOption === NORMAL_FOLDER}
              onClick={() => {
                setSelectedOption(NORMAL_FOLDER);
                setSelectedContent(<></>);
              }}
            />
          ),
        },
        {
          name: CURATE_FOLDER,
          id: CURATE_FOLDER,
          customOptionElement: (
            <RadioButton
              label={CURATE_FOLDER}
              checked={selectedOption === CURATE_FOLDER}
              onClick={() => {
                setSelectedOption(CURATE_FOLDER);
                setSelectedContent(<CuratedPublishContent />);
              }}
            />
          ),
          content: <CuratedPublishContent />,
        },
      ],
    },
  ];
  return (
    <>
      <Helmet>
        <title>Publish</title>
      </Helmet>
      <Form
        nextGoto="ContentEditor"
        cancelGoto="/"
        customTopSideBar={
          <SidebarContainer
            listItems={sidebarListItems}
            defaultSelectId={NORMAL_FOLDER}
            content={selectedContent}
            topSharedContent={<TopSharedContent />}
            fix={false}
          />
        }
      />
    </>
  );
};

export default PublishForm;
