import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BI Dashboard',
	description: 'Dashboard with analytics on several parameters',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="px-5 pt-8">
					<Image
						src={
							'https://aimed-analytics.com/assets/images/aimedanalytics-logo.svg'
						}
						alt={'Aimed Analytics logo'}
						width={112}
						height={33}
					/>
				</nav>
				<main className="flex justify-center items-center p-5 mt-8 md:p-4">
					{children}
				</main>
			</body>
		</html>
	);
}
