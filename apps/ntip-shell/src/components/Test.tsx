'use client';

import { trpc } from '../client/client';
import IdeaGreeting from 'idea-pitching/src/components/IdeaGreeting';
// import { Button } from '../../../../packages/shareable/api/ui/components/ui/button';
import { Button } from 'ui/components/ui/button';

export default function Test() {
	const { data: greetings } = trpc.greetings.getGreetings.useQuery({
		name: 'Stefan Ihle',
	});

	return (
		<div>
			<h1 className='text-7xl text-indigo-500 font-bold'>Some greetings</h1>

			<div>
				<p className='text-2xl font-semibold'>{greetings?.greetings}</p>
				{/* <p>{hello}</p> */}
				<Button>Click Me</Button>
			</div>
			<IdeaGreeting />
		</div>
	);
}
