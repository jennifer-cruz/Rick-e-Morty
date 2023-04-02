import * as React from "react";
import { UserContext } from "context";
import { Controls, Favorites, Footer, Hero, Modal, Pagination, Loader } from "components";
import imgError from "assets/images/error.jpg";
import styles from "./Home.module.scss";

const Characters = React.lazy(() => import("components/Characters"));

const Home = () => {
	const { error, loading } = React.useContext(UserContext);

	return (
		<main>
			<Hero />
			<Controls />
			<Favorites />
			<React.Suspense fallback={<Loader />}>
				{!loading && error && (
					<div className={styles.error}>
						<img src={imgError} alt="Error" />
						<p aria-live="assertive">{error}</p>
					</div>
				)}
				
				<Characters />
				<Pagination />
				<Footer />
				<Modal />
			</React.Suspense>
		</main>
	);
};

export default Home;
