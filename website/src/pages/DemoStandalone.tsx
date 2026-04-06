import React, { Suspense, lazy, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Spin } from 'antd';

import { demoLoaders } from '../generated/demoLoaders';

const fallback = (
  <div style={{ padding: 48, textAlign: 'center' }}>
    <Spin size="large" />
  </div>
);

export const DemoStandalone: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const loader = id ? demoLoaders[id] : undefined;

  const Comp = useMemo(() => {
    if (!loader) return null;
    return lazy(loader);
  }, [loader]);

  if (!id || !Comp) {
    return <div style={{ padding: 24 }}>Demo not found</div>;
  }

  return (
    <Suspense fallback={fallback}>
      <Comp />
    </Suspense>
  );
};
