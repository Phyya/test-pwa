import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import style from './FundAcc.module.css';

const url = 'https://savestar.azurewebsites.net/Transaction/create-transaction';

const FundAccount = () => {
	const [amount, setAmount] = useState(0);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [loading, setLoading] = useState(false);

	const handleFunding = () => {
		setError('');
		const transactionData = {
			amount: amount,
			transactionType: 0,
			bankAccountId: JSON.parse(localStorage.getItem('opti-user-detail'))
				.bankAccountID,
		};
		if (!amount) {
			setError('Please enter an amount');
			return;
		}
		setLoading(false);
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(transactionData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data, 'funded');
				setSuccess(true);
				setAmount(0);
				setInterval(() => {
					setSuccess(false);
				}, 2000);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	return (
		<section className={style.fund_section}>
			<header>
				<Link to="/home">
					<HiOutlineArrowNarrowLeft />
				</Link>
				<p>Fund Account</p>
			</header>
			<div>
				<Input
					placeholder="Enter amount"
					type="number"
					onChange={(val) => setAmount(val)}
				/>
			</div>
			{error && <p className={style.errorText}>{error}</p>}
			{success && (
				<p className={style.successText}>Account successfully funded</p>
			)}
			<Button text="Fund" loading={loading} onClick={() => handleFunding()} />
		</section>
	);
};

export default FundAccount;
