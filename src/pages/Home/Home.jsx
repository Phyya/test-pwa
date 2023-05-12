import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import style from './Home.module.css';

const Home = () => {
	return (
		<section className={style.home_page}>
			Home
			<Navbar />
		</section>
	);
};

export default Home;
