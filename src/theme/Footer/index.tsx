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

  return (
    <footer className="border-t bg-[#f4f4f5] dark:bg-[#18181b] py-12 font-sans">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* Left Column: Brand & Legal (40%) */}
        {/* md:col-span-2 = 2 out of 5 columns = 40% */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Logo & Title */}
          <div className="flex flex-col gap-4">
            {logo && (
              <div className="flex items-center gap-2">
                <img
                  src={useBaseUrl(logo.src)}
                  alt={logo.alt || ''}
                  className="h-8 w-auto"
                />
                <span className="font-bold text-xl tracking-tight text-foreground">Wiki</span>
              </div>
            )}
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Technology Documentation, Internal Resources and the central Wiki for
              App Dev Club Operations!
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-auto pt-4">
            {copyright ? (
              <div
                className="text-muted-foreground text-xs"
                dangerouslySetInnerHTML={{
                  __html: copyright,
                }}
              />
            ) : (
              <div className="text-muted-foreground text-xs">
                © {new Date().getFullYear()} AppDev Club. All rights reserved.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Links (60%) */}
        {/* md:col-span-3 = 3 out of 5 columns = 60% */}
        <div className="md:col-span-3">
          {links && links.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {links.map((column: any, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <h3 className="font-semibold text-foreground text-sm tracking-tight">
                    {column.title}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {column.items.map((item: any, j: number) => (
                      <FooterLink key={j} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground/50 text-sm italic border border-dashed border-border/50 rounded-lg p-8 bg-muted/20">
              No footer links configured. Add them in docusaurus.config.ts
            </div>
          )}
        </div>

      </div>
    </footer>
  );
}
