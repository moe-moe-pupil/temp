import { Helmet } from '@modern-js/runtime/head';
import { useTranslation } from 'react-i18next';
import PageContainer from '@/containers/PageContainer';
import SidebarContainer, {
  SidebarListItem,
  SidebarListType,
} from '@/containers/SidebarContainer';

const ContentEditor = () => {
  const { t } = useTranslation();
  const sidebarListItems: SidebarListItem[] = [
    {
      self: {
        name: 'curated to be pubish/update',
        id: 'curated to be pubish/update',
        type: SidebarListType.DropDown,
        onClick: () => {
          // todo
        },
      },
    },
    {
      self: {
        name: 'owned nfts',
        id: 'owned nfts',
        type: SidebarListType.DropDown,
        onClick: () => {
          // todo
        },
      },
    },
    {
      self: {
        name: 'my folders',
        id: 'my folders',
        type: SidebarListType.DropDown,
        onClick: () => {
          // todo
        },
      },
      children: [
        {
          name: 'public folder1',
          id: 'public folder1',
        },
        {
          name: 'private folder1',
          id: 'private folder1',
        },
      ],
    },
    {
      self: {
        name: 'upload files',
        id: 'upload files',
        type: SidebarListType.DropDown,
        onClick: () => {
          // todo
        },
      },
    },
  ];
  return (
    <>
      <Helmet>
        <title>Content Editor</title>
      </Helmet>
      <PageContainer
        width={'100%'}
        customTopSidebar={<div>{t('Folder Name')}</div>}
      >
        <SidebarContainer
          listItems={sidebarListItems}
          defaultSelectId={sidebarListItems[0].self.id}
          content={sidebarListItems[0].self.content}
        />
      </PageContainer>
    </>
  );
};

export default ContentEditor;
