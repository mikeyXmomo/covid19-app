import { StyledH1 } from './GlobalStyle';
import 'twin.macro'

const Question = () => {
	return (
		<div tw="w-full h-auto flex flex-col justify-center items-center my-16">
			<div tw="w-1/3 h-auto flex flex-col justify-center text-center items-center">
				<StyledH1>Have Question in Mind? Let us help you </StyledH1>
			</div>
			<div tw="w-1/2 h-auto flex flex-row justify-center items-center">
				<input
					tw="px-16 py-2 rounded-full border border-gray-400 mx-2"
					placeholder="covid19@gmail.com"
				/>
				<button tw="px-8 py-2 rounded-full bg-red-999 border border-red-999 text-white text-base mx-2">
					Send
				</button>
			</div>
		</div>
	);
};

export default Question;
