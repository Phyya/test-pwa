import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import style from './Button.module.css';

const PrimaryButton = ({ text, onClick, loading }) => {
	return (
		<button
			className={`${style.btn} ${style.primaryButton} `}
			onClick={onClick}
		>
			{loading ? <FaSpinner className={style.spinner} /> : text}
		</button>
	);
};

export default PrimaryButton;
