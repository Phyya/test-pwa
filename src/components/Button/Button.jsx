import React from 'react';
import style from './Button.module.css';

const PrimaryButton = ({ text }) => {
	return (
		<button className={`${style.btn} ${style.primaryButton} `}>{text}</button>
	);
};

export default PrimaryButton;
