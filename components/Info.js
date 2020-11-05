import { StyledH1, StyledH2, StyledP } from './GlobalStyle';
import 'twin.macro'

const Info = () => {
	return (
		<div tw="w-full h-auto bg-white flex justify-center items-center py-12">
			<div tw="w-4/5 flex md:flex-row flex-col justify-between items-center py-6">
				<div tw="md:w-1/2 w-full flex justify-center items-start">
					<img src="/corona-virus.png" alt="Corona Virus Illustration" tw="w-5/6" />
				</div>
				<div tw="md:w-1/2 w-full flex flex-col flex-wrap justify-start items-start">
					<StyledH2 smaller>What is Covid-19</StyledH2>
					<StyledH1 smaller>CoronaVirus</StyledH1>
					<StyledP smaller>
						Corona viruses are a type of virus. There are many different kinds, and some cause disease. A
						newly identified type has caused a recent outbreak of respiratory illness now called
						COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of
						Critical Event Preparedness and Response
					</StyledP>
				</div>
			</div>
		</div>
	);
};

export default Info;
