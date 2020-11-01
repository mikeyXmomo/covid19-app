import { StyledH1, StyledH2, StyledP } from "./GlobalStyle";
import 'twin.macro'

const Hero = () => {
	return (
		<div tw="w-full absolute h-full flex justify-center items-center">
			<div tw="w-4/5 h-auto flex flex-row justify-center items-center">
				<div tw="flex flex-col justify-center items-start">
					<StyledH2>COVID-19 Alert</StyledH2>
					<StyledH1>Stay at Home quarantine To stop Corona virus</StyledH1>
                    <StyledP>There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to .</StyledP>
                    <button tw="px-10 py-2 border border-red-999 bg-red-999 text-white text-lg rounded-full">Let Us Help</button>
				</div>
				<div>
                    <img src="/Illustration.svg" alt="Illustration Image" tw="w-full h-full" />
                </div>
			</div>
		</div>
	);
};

export default Hero;
