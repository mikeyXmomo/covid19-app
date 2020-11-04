import Head from 'next/head';
import Contagion from '../components/Contagion';
import Footer from '../components/Footer';
import { GlobalStyle } from '../components/GlobalStyle';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Nav from '../components/Nav';
import Prevention from '../components/Prevention';
import Question from '../components/Question';
import Report from '../components/Report';
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
			<Report />
			<Question />
			<Footer />
		</>
	);
};

export default index;
