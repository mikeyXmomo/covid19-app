import 'twin.macro';
const Report = () => {
	return (
		<div tw="w-full h-auto flex justify-center items-center md:-mt-12">
			<div tw="w-4/5 h-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
				<div tw="w-full md:w-2/3 h-auto">
					<img src="/Map.png" alt="Maps Covid-19" tw="w-full h-full" />
				</div>
				<div tw="w-full md:w-1/3 flex h-auto">
					<img src="/Report.svg" alt="Reports Covid-19" tw="w-full h-full" />
				</div>
			</div>
		</div>
	);
};

export default Report;
