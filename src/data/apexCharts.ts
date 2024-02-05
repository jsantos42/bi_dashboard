import { ApexOptions } from 'apexcharts';

//==============================================================================
// LINE CHART
//==============================================================================

export const apexchartsLineSeries = [
	{
		name: 'Sample 1',
		data: Array.from({ length: 100 }, () => {
			const x = Math.random() * 100;
			const y = x * 1.4;

			return { ...{ x, y } };
		}),
	},
	{
		name: 'Sample 2',
		data: Array.from({ length: 100 }, () => {
			const x = Math.random() * 100;
			const y = x / 2;

			return { ...{ x, y } };
		}),
	},
];

export const apexchartsLineOptions: ApexOptions = {
	chart: {
		type: 'line',
		width: '100%',
		height: '100%',
		toolbar: {
			show: false,
		},
	},
	stroke: {
		width: 2,
		curve: 'straight',
	},
	xaxis: {
		type: 'numeric',
		title: {
			text: 'X-axis',
			style: {
				color: 'rgba(255, 255, 255, 0.5)',
			},
		},
		stepSize: 25,
		decimalsInFloat: 0,
		min: 0,
		labels: {
			style: {
				colors: 'rgba(255, 255, 255, 0.5)',
			},
		},
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
	},
	yaxis: {
		stepSize: 25,
		decimalsInFloat: 0,
		title: {
			text: 'Y-axis',
			style: {
				color: 'rgba(255, 255, 255, 0.5)',
			},
		},
		labels: {
			style: {
				colors: 'rgba(255, 255, 255, 0.5)',
			},
		},
	},
	grid: {
		show: true,
		borderColor: '#FFFFFF11',
		position: 'front',
		xaxis: {
			lines: {
				show: true,
			},
		},
		yaxis: {
			lines: {
				show: true,
			},
		},
	},
	legend: {
		show: true,
		position: 'bottom',
		labels: {
			useSeriesColors: true,
		},
		itemMargin: {
			vertical: 10,
			horizontal: 15,
		},
	},
	title: {
		text: 'Sample Line Chart',
		align: 'center',
		style: {
			color: 'rgba(255, 255, 255, 0.8)',
		},
	},
	tooltip: {
		enabled: true,
	},
};

//==============================================================================
// SCATTER CHART
//==============================================================================
