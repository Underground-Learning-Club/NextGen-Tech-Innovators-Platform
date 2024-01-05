import { trpc } from '@/client/client';

export default function IdeaGreeting() {
	const { data: greetings } = trpc.greetings.getGreetings.useQuery({
		name: 'Hello from the idea-pitching package',
	});

	return (
		<div>
			<p className='text-2xl font-semibold'>{greetings?.greetings}</p>
		</div>
	);
}
