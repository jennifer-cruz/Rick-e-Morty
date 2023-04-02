import Portal from "assets/images/rick-and-morty-portal.png";
import styles from "./index.module.scss";

const Hero = () => (
	<picture>
		<source media="(min-width: 800px)" srcSet={`${Portal} 1x, ${Portal} 2x`} />
		<source media="(min-width: 400px)" srcSet={`${Portal} 1x, ${Portal} 2x`} />
		<img className={styles.hero} src={Portal} alt="Rick and Morty logo" width={800} height={251} />
	</picture>
);

export default Hero;
