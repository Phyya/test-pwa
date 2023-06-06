import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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
	const [user] = useState(JSON.parse(localStorage.getItem('opti-user-detail')));
	const [showBalance, setShowBalance] = useState(false);
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);

	const balanceValue = searchParams.get('balance');

	return (
		<div style={{ position: 'relative', height: '100vh' }}>
			<section className={style.home_page}>
				<header className={style.header}>
					<div>NF</div>
					<p>
						Hello, {user.firstname} {user.lastname}
					</p>
					<FiBell />
				</header>
				<div className={style.balance_overview}>
					<p>Account Balance</p>
					<div>
						<p>
							{showBalance
								? balanceValue
									? user.balance - balanceValue
									: `₦${user.balance.toLocaleString('en-US')}`
								: '***********'}
						</p>
						{showBalance ? (
							<AiOutlineEye onClick={() => setShowBalance(false)} />
						) : (
							<FaRegEyeSlash onClick={() => setShowBalance(true)} />
						)}
					</div>
					<p>Account Number: {user.accountNumber}</p>
					<button>
						<Link to="/fund-account">+ Fund Account</Link>
					</button>
				</div>
				<p className={style.underline}></p>
				<div className={style.home_products_container}>
					{data.map((item) => (
						<div key={item.text} style={{ backgroundColor: item.bgColor }}>
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
