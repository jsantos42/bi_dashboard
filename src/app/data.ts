import { ChartData, ChartOptions } from 'chart.js/auto';

//==============================================================================
// LINE CHART
//==============================================================================
export const lineData: ChartData = {
	datasets: [
		{
			label: 'Line Dataset',
			data: Array.from({ length: 100 }, () => {
				const x = Math.random() * 100;
				const y = x * 2;

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
		},
		y: {
			type: 'linear',
			position: 'left',
		},
	},
};

//==============================================================================
// SCATTER CHART
//==============================================================================
export const scatterData: ChartData = {
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

export const scatterOptions: ChartOptions = {
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
