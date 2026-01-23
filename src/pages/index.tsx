import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';

import styles from './index.module.css';
import { Button } from '@/components/ui/button';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      hi
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
    </Layout>
  );
}
