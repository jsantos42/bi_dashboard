import { ChartData, ChartOptions } from 'chart.js/auto';

const textColor = 'rgba(200, 200, 200, 0.5)';
const titleColor = 'rgba(200, 200, 200, 0.8)';
const gridColor = 'rgba(200, 200, 200, 0.05)';

//==============================================================================
// LINE CHART
//==============================================================================
export const chartjsLineData: ChartData = {
	datasets: [
		{
			label: 'Sample 1',
			data: Array.from({ length: 100 }, () => {
				const x = Math.random() * 100;
				const y = x * 1.4;

				return { ...{ x, y } };
			}),
		},
		{
			label: 'Sample 2',
			data: Array.from({ length: 100 }, () => {
				const x = Math.random() * 100;
				const y = x / 2;

				return { ...{ x, y } };
			}),
		},
	],
};

export const chartjsLineOptions: ChartOptions = {
	scales: {
		x: {
			type: 'linear',
			position: 'bottom',
			max: 100,
			ticks: {
				stepSize: 25,
				color: textColor,
			},
			grid: {
				display: false,
			},
		},
		y: {
			type: 'linear',
			position: 'left',
			max: 150,
			ticks: {
				stepSize: 25,
				color: textColor,
			},
			grid: {
				display: false,
			},
		},
	},
	plugins: {
		legend: {
			display: true,
			position: 'bottom',
			labels: {
				padding: 40,
				color: titleColor,
				font: {
					size: 14,
				},
			},
		},
		title: {
			display: true,
			text: 'Some Line Chart',
			color: titleColor,
			font: {
				size: 16,
				family: 'Inter, sans-serif',
				weight: 600,
			},
			padding: { bottom: 20 },
		},
	},
	elements: {
		point: {
			radius: 1,
			borderWidth: 2,
		},
	},
	aspectRatio: 1,
};

//==============================================================================
// SCATTER CHART
//==============================================================================
export const chartjsScatterData: ChartData = {
	datasets: [
		{
			label: 'Sample 1',
			data: Array.from({ length: 100 }, () => {
				const x = Math.cos(Math.random()) * 150;
				const y = Math.random() * 100 * 1.25;

				return { ...{ x, y } };
			}),
		},
		{
			label: 'Sample 2',
			data: Array.from({ length: 100 }, () => {
				const x = Math.random() * 100 * 1.25;
				const y = Math.random() * 100;

				return { ...{ x, y } };
			}),
		},
		{
			label: 'Sample 3',
			data: Array.from({ length: 100 }, () => {
				const x = Math.sqrt(Math.random()) * 50;
				const y = Math.sqrt(x) * Math.random() * 10;

				return { ...{ x, y } };
			}),
		},
	],
};

export const chartjsScatterOptions: ChartOptions = {
	scales: {
		x: {
			type: 'linear',
			position: 'bottom',
			max: 150,
			ticks: {
				stepSize: 25,
				color: textColor,
			},
			grid: {
				display: true,
				color: gridColor,
			},
		},
		y: {
			type: 'linear',
			position: 'left',
			max: 150,
			ticks: {
				stepSize: 25,
				color: textColor,
			},
			grid: {
				display: true,
				color: gridColor,
			},
		},
	},
	plugins: {
		legend: {
			display: true,
			position: 'bottom',
			labels: {
				padding: 20,
				color: titleColor,
				font: {
					size: 14,
				},
			},
		},
		title: {
			display: true,
			text: 'Some Scatter Chart',
			color: titleColor,
			font: {
				size: 16,
				family: 'Inter, sans-serif',
				weight: 600,
			},
			padding: { bottom: 20 },
		},
	},
	elements: {
		point: {
			radius: 1,
			borderWidth: 2,
		},
	},
	aspectRatio: 1,
};
