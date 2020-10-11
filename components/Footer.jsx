import styles from '../styles/Footer.module.css';

export default class Footer extends React.Component {
	render() {
		return (
			<div className={styles.footer}>
                <p><a href="/terms-of-service">Terms of Service</a> - <a href="/privacy-policy">Privacy Policy</a></p>
			</div>
		);
	}
}
