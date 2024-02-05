'use client';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useEffect, useRef, useState } from 'react';

export default function Chart({
	type,
	series,
	options,
	classes,
}: {
	type: ApexChart['type'];
	series: any; //review this
	options: ApexOptions;
	classes: string;
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [chartHeight, setChartHeight] = useState(0);

	const resizeChart = () => {
		const PADDING = 40;
		if (containerRef.current) {
			setChartHeight(containerRef.current.offsetWidth - PADDING);
		}
	};

	useEffect(() => {
		resizeChart();
		window.addEventListener('resize', resizeChart);

		return () => {
			window.removeEventListener('resize', resizeChart);
		};
	});

	return (
		<div ref={containerRef} className={classes}>
			<ReactApexChart
				{...{ type, series, options }}
				width={'100%'}
				height={chartHeight}
			/>
		</div>
	);
}
