import Plot from '@/app/components/Plot';
import { lineData, lineOptions, scatterData, scatterOptions } from '@/app/data';

export default function Home() {
	return (
		<>
			<Plot type={'line'} data={lineData} options={lineOptions} />
			<Plot
				type={'scatter'}
				data={scatterData}
				options={scatterOptions}
			/>
		</>
	);
}
