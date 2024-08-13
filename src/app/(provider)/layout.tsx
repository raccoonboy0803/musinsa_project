import QueryProvider from '@/providers/QueryProvider';

import { PropsWithChildren } from 'react';

const ProviderLayout = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <div className="max-w-[600px] mx-auto border-r border-l">{children}</div>
    </QueryProvider>
  );
};

export default ProviderLayout;
