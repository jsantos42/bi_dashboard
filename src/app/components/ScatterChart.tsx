'use client';
import Chart, { ChartData, ChartOptions } from 'chart.js/auto'; // review this to reduce bundle size
import { useEffect, useRef } from 'react';

export default function ScatterChart() {
	let chartInstance: Chart | null = null;
	const chartRef = useRef<HTMLCanvasElement>(null);
	const data: ChartData = {
		datasets: [
			{
				label: 'Line Dataset',
				data: Array.from({ length: 100 }, () => {
					const x = Math.random() * 100;
					const y = Math.random() * 100;

					return { ...{ x, y } };
				}),
			},
		],
	};

	const options: ChartOptions = {
		scales: {
			x: {
				type: 'linear',
				position: 'bottom',
			},
			y: {
				type: 'linear',
				position: 'left',
			},
		},
	};

	useEffect(() => {
		if (chartRef.current) {
			chartInstance?.destroy();
			chartInstance = new Chart(chartRef.current, {
				type: 'scatter',
				...{ data, options },
			});
		}
		return () => chartInstance?.destroy();
	});

	return <canvas ref={chartRef}></canvas>;
}
