import { useHistory } from '@modern-js/runtime/runtime-router';
import Button from '@/components/Button';
import PageContainer, { TabItem } from '@/containers/PageContainer';
import SidebarContainer, {
  SidebarListItem,
} from '@/containers/SidebarContainer';

const Index = () => {
  const history = useHistory();
  const sidebarListItems: SidebarListItem[] = [
    {
      self: {
        name: 'Module',
        id: 'Model',
        onClick: () => {
          // todo
        },
      },
      children: [
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
      content: (
        <SidebarContainer
          listItems={sidebarListItems}
          defaultSelectId={'Folder'}
          content={<></>}
        />
      ),
    },
  ];
  const rightContents: React.ReactNode[] = [
    <Button
      key="right btn"
      label="publish curation"
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
