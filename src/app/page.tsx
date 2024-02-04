import Link from 'next/link';

export default function Root() {
	return (
		<>
			<h1>Welcome</h1>
			<Link href={'/home'}>Dashboard</Link>
		</>
	);
}
