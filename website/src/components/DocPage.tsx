import React, { Suspense, lazy, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { Spin } from 'antd';

import { docPages } from '../generated/docRoutes';

const loading = (
  <div style={{ padding: 48, textAlign: 'center' }}>
    <Spin />
  </div>
);

export const DocPage: React.FC = () => {
  const location = useLocation();
  const path =
    location.pathname === '' ? '/' : location.pathname.replace(/\/$/, '') || '/';

  const loader = docPages[path];

  const Comp = useMemo(() => {
    if (!loader) return null;
    return lazy(loader);
  }, [loader]);

  if (!Comp) {
    return (
      <div className="doc-content">
        <p>页面不存在：{path}</p>
      </div>
    );
  }

  return (
    <div className="doc-content">
      <Suspense fallback={loading}>
        <Comp />
      </Suspense>
    </div>
  );
};
