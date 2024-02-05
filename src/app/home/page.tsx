import dynamic from 'next/dynamic';
import ChartJS from '@/components/ChartJS';
import {
	chartjsLineData,
	chartjsLineOptions,
	chartjsScatterData,
	chartjsScatterOptions,
} from '@/data/chartJs';
import { apexchartsLineOptions, apexchartsLineSeries } from '@/data/apexCharts';
import Patients from '@/components/Patients';

const ApexChart = dynamic(() => import('@/components/ApexChart'), {
	ssr: false,
});

export default function Home() {
	const classes =
		'w-full h-full max-h-[500px] max-w-[500px] aspect-square p-5 ' +
		'justify-self-center bg-highlight rounded-md';

	return (
		<div
			className="w-full h-full grid aspect-square grid-cols-mobile auto-rows-min
		min-[500px]:grid-cols-desktop gap-16 sm:gap-10 justify-center"
		>
			<Patients classes={classes} />
			<ApexChart
				type={'line'}
				series={apexchartsLineSeries}
				options={apexchartsLineOptions}
				classes={classes}
			/>
			<ChartJS
				type={'line'}
				data={chartjsLineData}
				options={chartjsLineOptions}
				classes={classes}
			/>
			<ChartJS
				type={'scatter'}
				data={chartjsScatterData}
				options={chartjsScatterOptions}
				classes={classes}
			/>
		</div>
	);
}
