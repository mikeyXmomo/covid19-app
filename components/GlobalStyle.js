import { createGlobalStyle } from 'styled-components';
import tw, { styled } from 'twin.macro';

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Red Hat Display', sans-serif;
    }
`;


export const StyledH2 = styled.h2(({smaller}) => [tw`text-red-999 font-bold leading-relaxed `, smaller ? tw`text-2xl py-1` : tw`text-3xl py-4`])

export const StyledH1 = styled.h1(({smaller}) => [tw`text-green-999 font-bold leading-tight `, smaller ? tw`text-3xl py-1` : tw`text-4xl py-4`])

export const StyledP = styled.p(({smaller}) => [tw`text-gray-999 leading-normal text-justify`, smaller ? tw`text-xl py-1` : tw` text-2xl py-4`])

export const Subtitle= tw.p`text-gray-999 leading-normal text-center text-sm py-1`
