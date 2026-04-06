import React from 'react';

export interface DemoBlockProps {
  demoId: string;
  iframeHeight: number;
  background: string;
}

export const DemoBlock: React.FC<DemoBlockProps> = ({
  demoId,
  iframeHeight,
  background,
}) => {
  const base = import.meta.env.BASE_URL || '/';
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;
  const src = `${prefix}/~demos/${encodeURIComponent(demoId)}`;

  return (
    <div
      style={{
        background,
        marginBottom: 24,
        borderRadius: 8,
        overflow: 'hidden',
      }}
    >
      <iframe
        title={demoId}
        src={src}
        height={iframeHeight}
        width="100%"
        style={{
          border: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          display: 'block',
        }}
      />
    </div>
  );
};
