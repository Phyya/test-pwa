import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineClockCircle, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineSavings } from 'react-icons/md';
import { BsCreditCard } from 'react-icons/bs';
import style from './Navbar.module.css';

const Navbar = () => {
	const data = {
		username: 'Feefee',
		password: 'MyPassword',
	};

	const queryString = new URLSearchParams(data).toString();
	const url = `http://feefee-angular2.netlify.app/login?${queryString}`;
	return (
		<section className={style.navbar}>
			<div className={style.navbar_item}>
				<BiHomeAlt />
				Home
			</div>
			<div className={style.navbar_item}>
				<AiOutlineClockCircle />
				History
			</div>
			<div className={style.navbar_item}>
				<MdOutlineSavings />
				<a href={url}>Savings</a>
			</div>
			<div className={style.navbar_item}>
				<BsCreditCard />
				<a href="https://www.nairaland.com" rel="noreferrer" target="_blank">
					Card
				</a>
			</div>
			<div className={style.navbar_item}>
				<AiOutlineUser />
				Profile
			</div>
		</section>
	);
};

export default Navbar;
