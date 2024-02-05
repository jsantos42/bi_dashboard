import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });
const degular = localFont({
	src: '../fonts/DegularVariable.ttf',
	display: 'swap',
});

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
					<span
						className={`hidden sm:block mt-2 place-self-center ${degular.className}`}
					>
						aimed analytics
					</span>
				</nav>
				<main className="flex justify-center items-center p-5 mt-8 md:p-4">
					{children}
				</main>
			</body>
		</html>
	);
}
