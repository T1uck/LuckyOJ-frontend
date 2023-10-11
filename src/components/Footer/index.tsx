import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = 'Lucky';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Lucky API',
          title: 'Lucky API',
          href: 'http://localhost:8101',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/T1uck',
          blankTarget: true,
        },
        {
          key: 'T1uck',
          title: 'T1uck',
          href: 'https://github.com/T1uck',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
