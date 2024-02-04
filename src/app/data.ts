import { ChartData, ChartOptions } from 'chart.js/auto';

//==============================================================================
// LINE CHART
//==============================================================================
export const lineData: ChartData = {
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

export const lineOptions: ChartOptions = {
	scales: {
		x: {
			type: 'linear',
			position: 'bottom',
			max: 100,
			ticks: {
				stepSize: 25,
				color: 'rgba(255, 255, 255, 0.5)',
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
				color: 'rgba(255, 255, 255, 0.5)',
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
				color: 'rgba(255, 255, 255, 0.8)',
				font: {
					size: 14,
				},
			},
		},
		title: {
			display: true,
			text: 'Some Line Chart',
			color: 'rgba(255, 255, 255, 0.8)',
			font: {
				size: 20,
			},
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
export const scatterData: ChartData = {
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

export const scatterOptions: ChartOptions = {
	scales: {
		x: {
			type: 'linear',
			position: 'bottom',
			max: 150,
			ticks: {
				stepSize: 25,
				color: 'rgba(255, 255, 255, 0.5)',
			},
			grid: {
				display: true,
				color: 'rgba(255, 255, 255, 0.05)',
			},
		},
		y: {
			type: 'linear',
			position: 'left',
			max: 150,
			ticks: {
				stepSize: 25,
				color: 'rgba(255, 255, 255, 0.5)',
			},
			grid: {
				display: true,
				color: 'rgba(255, 255, 255, 0.05)',
			},
		},
	},
	plugins: {
		legend: {
			display: true,
			position: 'bottom',
			labels: {
				padding: 20,
				color: 'rgba(255, 255, 255, 0.8)',
				font: {
					size: 14,
				},
			},
		},
		title: {
			display: true,
			text: 'Some Scatter Chart',
			color: 'rgba(255, 255, 255, 0.8)',
			font: {
				size: 20,
			},
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
