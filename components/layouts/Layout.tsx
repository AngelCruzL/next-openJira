import { FC, PropsWithChildren, ReactElement } from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';
import { Navbar, Sidebar } from '../ui';

interface LayoutProps extends PropsWithChildren {
  title?: string;
}

export const Layout: FC<LayoutProps> = ({
  title = 'Open Jira',
  children,
}): ReactElement => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box sx={{ paddingBlock: '1rem', paddingInline: '2rem' }}>{children}</Box>
    </Box>
  );
};
