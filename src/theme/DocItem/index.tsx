import React, { type ReactNode } from 'react';
import DocItem from '@theme-original/DocItem';
import type DocItemType from '@theme/DocItem';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): ReactNode {
  return (
    <div className="container mx-auto max-w-4xl py-10 px-6 font-sans">
      <DocItem {...props} />
    </div>
  );
}
