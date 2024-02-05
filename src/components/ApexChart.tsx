'use client';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export default function Chart({
	type,
	series,
	options,
	width,
}: {
	type: ApexChart['type'];
	series: any; //review this
	options: ApexOptions;
	width?: string;
}) {
	return (
		<div className="w-full h-full flex justify-center">
			<ReactApexChart {...{ type, series, options }} />
		</div>
	);
}
