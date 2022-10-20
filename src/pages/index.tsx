import PageContainer, { TabItem } from '@/containers/PageContainer';
import SideBarContainer, { ListItem } from '@/containers/SideBarContainer';

const Index = () => {
  const listItems: ListItem[] = [
    {
      self: {
        name: 'Module',
        id: 'Model',
        onClick: () => {
          // todo
        },
      },
      child: [
        {
          name: 'home',
          id: 'home',
          onClick: () => {
            // todo
          },
        },
        {
          name: 'recommond',
          id: 'recommond',
          onClick: () => {
            // todo
          },
        },
        {
          name: 'analyze',
          id: 'analyze',
          onClick: () => {
            // todo
          },
        },
        {
          name: 'folder',
          id: 'folder',
          onClick: () => {
            // todo
          },
        },
      ],
    },
  ];
  const topTabs: TabItem[] = [
    {
      name: '测试',
      content: <SideBarContainer listItems={listItems} selectId={'folder'} />,
    },
  ];
  return (
    <PageContainer width={'100%'} topSidebarTabs={topTabs}>
      <></>
    </PageContainer>
  );
};

export default Index;
