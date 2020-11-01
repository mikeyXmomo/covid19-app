import 'twin.macro';
import { StyledH1, StyledH2, Subtitle } from './GlobalStyle';

const Symptomps = () => {
	return (
		<div tw="w-full h-auto flex flex-col justify-center items-center py-12">
			<div tw="w-4/5 flex flex-col justify-center items-center">
				<div tw="w-1/2 flex flex-col justify-center items-center">
					<StyledH2 smaller>COVID-19</StyledH2>
					<StyledH1 smaller>Symptomps</StyledH1>
					<Subtitle>
						Corona viruses are a type of virus. There are many different kinds, and some cause disease. A
						newly identified type has caused a recent outbreak of respiratory
					</Subtitle>
				</div>
                <div tw="w-3/5 flex flex-col  justify-center items-center">
                    <img src="/symptomps.svg" alt="Covid-19 Symptomps" />
                </div>
			</div>
		</div>
	);
};

export default Symptomps;
