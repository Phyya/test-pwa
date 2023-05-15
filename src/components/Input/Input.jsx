import React from 'react';
import style from './Input.module.css';

const Input = ({ icon, icon2, type, onChange, placeholder }) => {
	return (
		<div className={style.input_container}>
			<span>{icon}</span>
			<input placeholder={placeholder} />
			<span>{icon2}</span>
		</div>
	);
};

export default Input;
