import Head from 'next/head';
import { GlobalStyle } from '../components/GlobalStyle';
import Hero from '../components/Hero';
import Nav from '../components/Nav';

const index = () => {
	return (
		<>
			<Head>
				<title>COVID 19 Landing Page</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<GlobalStyle />
      <Nav />
      <Hero />
		</>
	);
};

export default index;
