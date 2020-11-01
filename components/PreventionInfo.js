import { StyledH2, StyledH1, Subtitle, StyledP } from './GlobalStyle';
import tw, {css} from 'twin.macro'

const PreventionInfo = ({number, title, subtitle, imageUrl, imageStart}) => {
	return (
		<div tw="w-full h-auto flex justify-center items-center py-8">
			<div css={tw`w-4/5 h-auto justify-center items-center`, imageStart ? tw`flex flex-row-reverse` : tw`flex flex-row`}>
				<div tw="w-2/3 flex flex-row justify-start items-start">
					<div tw="w-12 bg-red-200 mt-4 h-auto rounded-full flex justify-center items-center">
						<StyledH2 smaller>{number}</StyledH2>
					</div>
					<div tw="w-5/6 px-4 flex flex-col justify-start items-start">
						<StyledH1>{title}</StyledH1>
						<StyledP smaller>
							{subtitle}
						</StyledP>
					</div>
				</div>
				<div tw="w-1/3 flex justify-center items-center">
                    <img src={imageUrl} tw="w-full h-full" />
                </div>
			</div>
		</div>
	);
};

export default PreventionInfo;
