import React from 'react';
import { FiBell } from 'react-icons/fi';
import { FaRegEyeSlash } from 'react-icons/fa';
import { GiRollingDices } from 'react-icons/gi';
import { BiPaperPlane, BiWalletAlt } from 'react-icons/bi';
import { MdOutlineLaptop } from 'react-icons/md';
import { TbCoins } from 'react-icons/tb';
import { BsPhone } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import advert from '../../images/advert.jpg';
import Navbar from '../../components/Navbar/Navbar';
import style from './Home.module.css';

const data = [
	{
		icon: <BiPaperPlane />,
		text: 'Send money',
		bgColor: '#DCFCE7',
		iconColor: '#00DA5A',
	},
	{
		icon: <BsPhone />,
		text: 'Airtime & Data',
		bgColor: '#FEF3C6',
		iconColor: '#D9B328',
	},
	{
		icon: <MdOutlineLaptop />,
		text: 'Cable TV',
		bgColor: '#D1F3FF',
		iconColor: '#5882FF',
	},
	{
		icon: <TbCoins />,
		text: 'Utilities',
		bgColor: '#E6DDFC',
		iconColor: '#7853BC',
	},
	{
		icon: <GiRollingDices />,
		text: 'Sports & Betting',
		bgColor: '#E7ECFF',
		iconColor: '#667489',
	},
	{
		icon: <BiWalletAlt />,
		text: 'Loan',
		bgColor: '#FFEEE7',
		iconColor: '#E1A78D',
	},
];
const Home = () => {
	return (
		<div style={{ position: 'relative', height: '100vh' }}>
			<section className={style.home_page}>
				<header className={style.header}>
					<div>NF</div>
					<p>Hello, Nafisat Faruk</p>
					<FiBell />
				</header>
				<div className={style.balance_overview}>
					<p>Account Balance</p>
					<div>
						<p>***********</p>
						<FaRegEyeSlash />
					</div>
					<p>Account Number: 2000076874</p>
					<button>+ Fund Account</button>
				</div>
				<p className={style.underline}></p>
				<div className={style.home_products_container}>
					{data.map((item) => (
						<div key={item.icon} style={{ backgroundColor: item.bgColor }}>
							<span style={{ backgroundColor: item.iconColor }}>
								{item.icon}
							</span>
							<p>{item.text}</p>
						</div>
					))}
				</div>

				<div className={style.home_other}>
					<p>Show more</p>
					<IoIosArrowDown />
					<img src={advert} alt="optiverse advert" className={style.img} />
				</div>
			</section>

			<Navbar />
		</div>
	);
};

export default Home;
