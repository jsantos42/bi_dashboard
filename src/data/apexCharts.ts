import { ApexOptions } from 'apexcharts';

const textColor = 'rgba(200, 200, 200, 0.5)';
const titleColor = 'rgba(200, 200, 200, 0.8)';

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
		toolbar: {
			show: false,
		},
		background: 'none',
	},
	colors: ['#e33d69', '#247BA0'],
	stroke: {
		width: 2,
		curve: 'straight',
	},
	theme: {
		mode: 'dark',
	},
	xaxis: {
		type: 'numeric',
		title: {
			text: 'X-axis',
			offsetY: 5,
			style: {
				color: titleColor,
			},
		},
		stepSize: 25,
		decimalsInFloat: 0,
		min: 0,
		labels: {
			style: {
				colors: textColor,
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
			offsetX: -5,
			style: {
				color: titleColor,
			},
		},
		labels: {
			style: {
				colors: textColor,
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
			colors: titleColor,
		},
		itemMargin: {
			vertical: 10,
			horizontal: 15,
		},
		offsetY: 10,
		fontSize: '14px',
	},
	title: {
		text: 'Sample Line Chart',
		align: 'center',
		style: {
			fontSize: '16px',
			fontFamily: 'Inter, sans-serif',
			fontWeight: 600,
			color: titleColor,
		},
	},
	tooltip: {
		enabled: true,
	},
};

//==============================================================================
// SCATTER CHART
//==============================================================================
