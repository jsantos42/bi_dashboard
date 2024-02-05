import dynamic from 'next/dynamic';
import ChartJS from '@/components/ChartJS';
import {
	chartjsLineData,
	chartjsLineOptions,
	chartjsScatterData,
	chartjsScatterOptions,
} from '@/data/chartJs';
import { apexchartsLineOptions, apexchartsLineSeries } from '@/data/apexCharts';

const ApexChart = dynamic(() => import('@/components/ApexChart'), {
	ssr: false,
});

export default function Home() {
	return (
		<div
			className="w-full h-full grid aspect-square grid-cols-mobile
		min-[500px]:grid-cols-desktop gap-20 sm:gap-4 justify-center items-center"
		>
			<ApexChart
				type={'line'}
				series={apexchartsLineSeries}
				options={apexchartsLineOptions}
				// width={'100%'}
			/>
			<ChartJS
				type={'line'}
				data={chartjsLineData}
				options={chartjsLineOptions}
			/>
			<ChartJS
				type={'scatter'}
				data={chartjsScatterData}
				options={chartjsScatterOptions}
			/>
		</div>
	);
}
