'use client';

import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from '@/client/client';
import { httpBatchLink } from '@trpc/react-query';

export default function Providers({ children }: PropsWithChildren) {
	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
					fetch(url, options) {
						return fetch(url, {
							...options,
							credentials: 'include',
						});
					},
				}),
			],
		}),
	);

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</trpc.Provider>
	);
}
