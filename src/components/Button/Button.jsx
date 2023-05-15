import React from 'react';
import style from './Button.module.css';

const PrimaryButton = ({ text, onClick }) => {
	return (
		<button
			className={`${style.btn} ${style.primaryButton} `}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default PrimaryButton;
