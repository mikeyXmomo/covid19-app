import { StyledH1, StyledH2, Subtitle } from './GlobalStyle';
import 'twin.macro'

const Contagion = () => {
	return (
		<div tw="w-full h-auto flex justify-center py-12">
			<div tw="w-4/5 flex flex-col justify-center items-center">
				<div tw="md:w-1/2 w-full flex flex-col justify-center items-center">
					<StyledH2 smaller>Covid-19</StyledH2>
					<StyledH1 smaller>Contagion</StyledH1>
					<Subtitle>
						Corona viruses are a type of virus. There are many different kinds, and some cause disease. A
						newly identified type
					</Subtitle>
				</div>
				<div tw="flex flex-col md:flex-row justify-between items-center py-5">
					<div tw="md:w-1/3 w-full h-auto flex flex-col border-b-4 justify-center items-center shadow-2xl mx-4 p-8 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:border-red-999 hover:scale-110">
						<img src="/air-transmission.svg" tw="w-1/2 h-64" alt="air transmission" />
						<h3 tw="text-2xl text-green-999 font-bold leading-normal">Air Transmission</h3>
						<Subtitle>Objectively evolve tactical expertise before extensible initiatives.</Subtitle>
					</div>
					<div tw="md:w-1/3 w-full h-auto flex flex-col border-b-4 justify-center items-center shadow-2xl mx-4 p-8 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:border-red-999 hover:scale-110">
						<img src="/human-contacts.svg" tw="w-1/2 h-64" alt="human-contact" />
						<h3 tw="text-2xl text-green-999 font-bold leading-normal">Human Contacts</h3>
						<Subtitle>Washing your hands is one of thesimplest ways you can protect</Subtitle>
					</div>
					<div tw="md:w-1/3 w-full h-auto flex flex-col border-b-4 justify-center items-center shadow-2xl mx-4 p-8 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:border-red-999 hover:scale-110">
						<img src="/contained-object.svg" tw="w-1/2 h-64" alt="contained-object" />
						<h3 tw="text-2xl text-green-999 font-bold leading-normal">Contained Objects</h3>
						<Subtitle>Use the tissue while sneezing,In this way, you can protect your droplets.</Subtitle>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contagion;
