import Plot from '@/app/components/Plot';
import { lineData, lineOptions, scatterData, scatterOptions } from '@/app/data';

export default function Home() {
	return (
		<div
			className="w-full grid grid-cols-mobile
		min-[500px]:grid-cols-desktop gap-20 sm:gap-4 justify-center items-center"
		>
			<Plot type={'line'} data={lineData} options={lineOptions} />
			<Plot
				type={'scatter'}
				data={scatterData}
				options={scatterOptions}
			/>
		</div>
	);
}
