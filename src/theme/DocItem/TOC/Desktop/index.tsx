import React, { type ReactNode } from 'react';
import Desktop from '@theme-original/DocItem/TOC/Desktop';
import type DesktopType from '@theme/DocItem/TOC/Desktop';
import type { WrapperProps } from '@docusaurus/types';
import { Separator } from '@/components/ui/separator';

type Props = WrapperProps<typeof DesktopType>;

export default function DesktopWrapper(props: Props): ReactNode {
  return (
    <div className="py-10 pr-6 pl-4 hidden lg:block fixed">
      <Separator orientation='vertical' />
      <h3 className="font-semibold text-sm mb-3">On This Page</h3>
      <div className="text-sm text-muted-foreground">
        <Desktop {...props} />
      </div>
    </div>
  );
}
