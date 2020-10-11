import Head from 'next/head';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default class Home extends React.Component {
	render() {
		return (
				<div className={styles.hero}>
					<div className={styles.content}>
						<h1>⚡️ SparkPetition</h1>
						<h2>Change what matters to you.</h2>
					</div>
				</div>
		);
	}
}
