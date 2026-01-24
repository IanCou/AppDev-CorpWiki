import React, { type ReactNode } from 'react';
import Desktop from '@theme-original/DocItem/TOC/Desktop';
import type DesktopType from '@theme/DocItem/TOC/Desktop';
import type { WrapperProps } from '@docusaurus/types';
import { Separator } from '@/components/ui/separator';

type Props = WrapperProps<typeof DesktopType>;

export default function DesktopWrapper(props: Props): ReactNode {
  return (
    <div className="sticky top-16 py-10 pr-6 pl-4 hidden lg:block max-h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="relative pl-4 border-l border-border">
        <h3 className="font-semibold text-sm mb-3">On This Page</h3>
        <div className="text-sm text-muted-foreground">
          <Desktop {...props} />
        </div>
      </div>
    </div>
  );
}
