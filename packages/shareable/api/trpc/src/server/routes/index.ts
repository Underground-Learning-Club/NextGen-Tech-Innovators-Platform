import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { greetingsRouter } from './greetingsRouter';
import { router } from '../trpc';

export const appRouter = router({
	greetings: greetingsRouter,
});

export type AppRouter = typeof appRouter;
export { fetchRequestHandler };
