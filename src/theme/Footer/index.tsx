import React, { type ReactNode } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

function FooterLink({ item }: { item: any }) {
  const { to, href, label, prependBaseUrlToHref, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

  return (
    <Link
      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
      {...(href
        ? {
          href: prependBaseUrlToHref ? normalizedHref : href,
        }
        : {
          to: toUrl,
        })}
      {...props}>
      {label}
    </Link>
  );
}

export default function CustomFooter(): ReactNode {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;

  return null; // Temporarily hidden
}
