'use client';
import Chart, { ChartData, ChartOptions, ChartType } from 'chart.js/auto'; // review this to reduce bundle size
import { useEffect, useRef } from 'react';

export default function ChartJS({
	type,
	data,
	options,
	classes,
}: {
	type: ChartType;
	data: ChartData;
	options: ChartOptions;
	classes: string;
}) {
	let chartInstance: Chart | null = null;
	const chartRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (chartRef.current) {
			chartInstance?.destroy();
			chartInstance = new Chart(chartRef.current, {
				...{ type, data, options },
			});
		}
		return () => chartInstance?.destroy();
	});

	return (
		<div className={classes}>
			<canvas className="w-full" ref={chartRef}></canvas>
		</div>
	);
}
