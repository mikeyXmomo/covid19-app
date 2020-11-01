import Head from 'next/head';
import Contagion from '../components/Contagion';
import { GlobalStyle } from '../components/GlobalStyle';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Nav from '../components/Nav';
import Prevention from '../components/Prevention';
import Symptomps from '../components/Symptomps';

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
			<Info />
			<Contagion />
			<Symptomps />
			<Prevention />
		</>
	);
};

export default index;
