import { createGlobalStyle, } from 'styled-components';
import tw from 'twin.macro'

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Red Hat Display', sans-serif;
    }
`;

export const StyledH2 = tw.h2`text-red-999 text-3xl font-bold leading-relaxed py-4`

export const StyledH1 = tw.h1`text-green-999 text-5xl font-bold leading-tight py-4`

export const StyledP = tw.p`text-gray-999 text-2xl leading-normal py-4`
    
 