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
        <Link to={logoLink} className="flex items-center gap-2 font-bold no-underline text-foreground hover:no-underline hover:text-foreground">
          {logoSrc && <img src={logoSrc} alt={logo?.alt} className="h-8 w-8" />}
          <span>{navbar.title ?? siteConfig.title}</span>
        </Link>

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
