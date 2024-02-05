export default function Patients({ classes }: { classes: string }) {
	return (
		<div className={`${classes} grid grid-rows-5 items-center`}>
			<h1 className="self-start">Patients enrolled</h1>
			<div className="row-span-3 text-center flex flex-col gap-y-2">
				<p className="text-4xl">2 103 122</p>
				<p className="text-xl text-green-600">+5.4%</p>
			</div>
		</div>
	);
}
