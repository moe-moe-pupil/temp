import { useHistory } from '@modern-js/runtime/runtime-router';
import Button from '@/components/Button';
import PageContainer, { TabItem } from '@/containers/PageContainer';
import SideBarContainer, { ListItem } from '@/containers/SideBarContainer';

const Index = () => {
  const history = useHistory();
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
          name: 'Folder',
          id: 'Folder',
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
      content: <SideBarContainer listItems={listItems} selectId={'Folder'} />,
    },
  ];
  const rightContents: React.ReactNode[] = [
    <Button
      key="right btn"
      name="publish curation"
      onClick={() => {
        history.push('publishForm');
        // to do
      }}
    />,
  ];
  return (
    <PageContainer
      width={'100%'}
      topSidebarTabs={topTabs}
      rightContentItems={rightContents}
    />
  );
};

export default Index;
