import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineClockCircle, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineSavings } from 'react-icons/md';
import { BsCreditCard } from 'react-icons/bs';
import style from './Navbar.module.css';

const Navbar = () => {
	return (
		<section className={style.navbar}>
			<div>
				<BiHomeAlt />
				Home
			</div>
			<div>
				<AiOutlineClockCircle />
				History
			</div>
			<div>
				<MdOutlineSavings />
				<a href="https://www.google.com">Savings</a>
			</div>
			<div>
				<BsCreditCard />
				<a
					href="https://</div>www.nairaland.com"
					rel="noreferrer"
					target="_blank"
				>
					Card
				</a>
			</div>
			<div>
				<AiOutlineUser />
				Profile
			</div>
		</section>
	);
};

export default Navbar;
