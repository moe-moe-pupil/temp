import React from 'react';
import Input from '../components/Input';
import Select from '@/components/Select';

const CuratedPublishContent: React.FC = () => {
  return (
    <div>
      <Input label="price" placeholder="e.g: 20" />
      <Select
        Options={[{ name: 'WMATIC', value: 'WMATIC' }]}
        onChange={() => {
          // todo
        }}
        usei18={false}
      />
      <Input label="max supply" placeholder="e.g: 20" />
      <Input label="payee address" />
      <Input label="topic" />
    </div>
  );
};

const TopSharedContent: React.FC = () => {
  return (
    <div>
      <Input label="name" />
      <Input label="description" />
    </div>
  );
};

export { TopSharedContent, CuratedPublishContent };
