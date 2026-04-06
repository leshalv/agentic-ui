import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App as AntdApp, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { StyleProvider } from '@ant-design/cssinjs';

import { DocLayout } from './components/DocLayout';
import { DocPage } from './components/DocPage';
import { DemoStandalone } from './pages/DemoStandalone';

export const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <StyleProvider hashPriority="high">
        <AntdApp>
          <BrowserRouter>
            <Routes>
              <Route path="/~demos/:id" element={<DemoStandalone />} />
              <Route element={<DocLayout />}>
                <Route path="*" element={<DocPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AntdApp>
      </StyleProvider>
    </ConfigProvider>
  );
};
