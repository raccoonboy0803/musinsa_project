import QueryProvider from '@/providers/QueryProvider';

import { PropsWithChildren } from 'react';

const ProviderLayout = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <div>{children}</div>
    </QueryProvider>
  );
};

export default ProviderLayout;
