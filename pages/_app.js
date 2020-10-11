import '../styles/globals.css';
import Error from 'next/error';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps, res }) {
	if (pageProps.error) {
		return <Error statusCode={pageProps.error.code} title={pageProps.error.message} />;
	}
	return (
		<div className="app">
			<Head />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;
