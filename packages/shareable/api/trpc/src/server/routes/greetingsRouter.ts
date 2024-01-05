import { publicProcedure, router } from '../trpc';
import { z } from 'zod';

export const greetingsRouter = router({
	getGreetings: publicProcedure
		.input(
			z.object({
				name: z.string(),
			}),
		)
		.query(({ input }) => {
			const { name } = input;

			const greetings = `Hello ${name} what's up!`;

			return { greetings };
		}),
});
