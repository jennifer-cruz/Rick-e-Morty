import styles from "./index.module.scss";

import { Social } from "config";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__rights}>
				<p>
					Projeto criado com o uso {" "}
					<a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
						Rick and Morty API
					</a>{" "}
					e baseado no porfólio de {" "}
					<a href="https://github.com/BrandonArgel/rick-and-morty" target="_blank" rel="noreferrer">Brandon Argel</a>
				</p>

			</div>
			<div className={styles.footer__social}>
				{Social.map(({ link, icon, title }) => (
					<a href={link} key={link} target="_blank" rel="noreferrer" title={title}>
						{icon}
					</a>
				))}
			</div>
		</footer>
	);
};

export default Footer;
