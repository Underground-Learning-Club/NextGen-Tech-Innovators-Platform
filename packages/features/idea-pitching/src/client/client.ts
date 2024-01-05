import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from 'trpc/src/server/routes';

export const trpc = createTRPCReact<AppRouter>({});
