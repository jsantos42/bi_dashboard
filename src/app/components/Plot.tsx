'use client';
import Chart, { ChartData, ChartOptions, ChartType } from 'chart.js/auto'; // review this to reduce bundle size
import { useEffect, useRef } from 'react';

// Needed to rename the component to avoid conflicts with the Chart type
export default function Plot({
	type,
	data,
	options,
}: {
	type: ChartType;
	data: ChartData;
	options: ChartOptions;
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

	return <canvas ref={chartRef}></canvas>;
}
