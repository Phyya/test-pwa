import React, { useState } from 'react';
import style from './Input.module.css';

const Input = ({ icon, icon2, type, onChange, placeholder }) => {
	const [showPassword, setShowPassword] = useState(false);
	const [inputType, setInputType] = useState(type);
	const handleIconClick = () => {
		if (inputType != 'password') {
			setInputType('text');
		} else {
			setInputType('password');
		}
	};
	return (
		<div className={style.input_container}>
			<span>{icon}</span>
			<input
				type={inputType}
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
			/>
			<span onClick={handleIconClick}>{icon2}</span>
		</div>
	);
};

export default Input;
