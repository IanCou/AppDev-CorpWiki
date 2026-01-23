import React, { type ReactNode } from 'react';
import type { WrapperProps } from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ThemeConfig } from '@docusaurus/preset-classic';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Button } from '@/components/ui/button';
import NavbarType from '@theme/Navbar';
import SearchBar from '@theme/SearchBar';

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const themeConfig = siteConfig.themeConfig as ThemeConfig;
  const navbar = themeConfig.navbar;
  const items = navbar?.items ?? [];
  const logo = navbar.logo;

  const leftItems = items.filter(item => item.position === 'left' || !item.position);
  const rightItems = items.filter(item => item.position === 'right');

  const logoLink = useBaseUrl(logo?.href || '/');
  const logoSrc = useBaseUrl(logo?.src);

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b px-4 bg-background">
      <div className="flex items-center gap-6">
        <div className="flex h-14 items-center gap-2 px-4">
          <img className='h-8' src={logoSrc} />
          <div className='flex flex-col'>
            <h1 className='font-semibold'>{navbar.title ?? siteConfig.title}</h1>
            <p className='text-xs text-muted-foreground'>Tech Operations</p>
          </div>
        </div>

        <nav className="flex items-center gap-1">
          {leftItems.map((item, i) => (
            <Button key={i} variant="ghost" asChild size="sm">
              <Link to={(item as any).to} href={(item as any).href} {...item}>
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <SearchBar />
        <nav className="flex items-center gap-1">
          {rightItems.map((item, i) => (
            <Button key={i} variant="ghost" asChild size="sm">
              <Link to={(item as any).to} href={(item as any).href} {...item}>
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
