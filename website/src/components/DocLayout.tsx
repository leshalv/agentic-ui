import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';

import { navItems } from '../generated/docRoutes';

import '../styles/doc-content.css';

const { Header, Sider, Content } = Layout;

function buildMenuItems(): MenuProps['items'] {
  const byGroup = new Map<string, typeof navItems>();
  for (const item of navItems) {
    const list = byGroup.get(item.group) ?? [];
    list.push(item);
    byGroup.set(item.group, list);
  }

  const items: MenuProps['items'] = [];
  for (const [group, list] of byGroup) {
    items.push({
      type: 'group',
      label: group,
      key: `group-${group}`,
      children: list.map((it) => ({
        key: it.route,
        label: <Link to={it.route}>{it.title}</Link>,
      })),
    });
  }
  return items;
}

export const DocLayout: React.FC = () => {
  const location = useLocation();
  const path =
    location.pathname === '' ? '/' : location.pathname.replace(/\/$/, '') || '/';
  const { token } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingInline: 24,
          background: token.colorBgContainer,
          borderBottom: `1px solid ${token.colorBorderSecondary}`,
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: token.colorText,
          }}
        >
          Agentic UI
        </Link>
      </Header>
      <Layout>
        <Sider
          width={280}
          style={{
            background: token.colorBgContainer,
            borderRight: `1px solid ${token.colorBorderSecondary}`,
          }}
        >
          <div style={{ padding: '12px 0', maxHeight: 'calc(100vh - 64px)', overflow: 'auto' }}>
            <Menu
              mode="inline"
              selectedKeys={[path]}
              style={{ borderInlineEnd: 'none' }}
              items={buildMenuItems()}
            />
          </div>
        </Sider>
        <Content
          style={{
            background: token.colorBgLayout,
            minHeight: 'calc(100vh - 64px)',
            overflow: 'auto',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
