import { StyledH2, StyledH1, Subtitle } from './GlobalStyle';
import 'twin.macro'
import PreventionInfo from './PreventionInfo';
import { firstPrevention, fourthPrevention, secondPrevention, thirdPrevention } from '../data/data';

const Prevention = () => {
	return (
		<div tw="w-full h-auto flex justify-center items-center py-12">
			<div tw="w-4/5 flex flex-col justify-center items-center">
				<div tw="w-1/2 flex flex-col justify-center items-center">
					<StyledH2 smaller>COVID-19</StyledH2>
					<StyledH1 smaller>What Should We Do</StyledH1>
					<Subtitle>
						Corona viruses are a type of virus. There are many different kinds, and some cause disease. A
						newly identified type has caused
					</Subtitle>
				</div>
				<PreventionInfo {...firstPrevention} />
				<PreventionInfo {...secondPrevention} />
				<PreventionInfo {...thirdPrevention} />
				<PreventionInfo {...fourthPrevention} />
			</div>
		</div>
	);
};

export default Prevention;
