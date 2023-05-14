import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiLockOpenAlt } from 'react-icons/bi';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import logo from '../../images/Optimus_Logo.svg';
import right_logo from '../../images/right_image_logo.png';
import left_logo from '../../images/left_image_logo.png';
import style from './Login.module.css';
import { useNavigate } from 'react-router';

const Login = () => {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate('/home');
	};
	return (
		<section className={style.section}>
			<img className={style.right_image} src={right_logo} alt="right_logo" />
			<img className={style.left_image} src={left_logo} alt="left_logo" />

			<header>
				<img src={logo} alt="optimus_logo" />
			</header>

			<div className={style.main_content}>
				<p className={style.heading}>
					Welcome to
					<h1>
						Opti<span>Verse</span>
					</h1>
				</p>
				<div>
					<Input placeholder="Email/Phone number" icon={<AiOutlineUser />} />
					<Input
						placeholder="Enter password"
						icon={<BiLockOpenAlt />}
						type="password"
					/>
					<div style={{ marginTop: '25px' }}>
						<Button text="Sign In" onClick={() => handleLogin()} />
					</div>
				</div>
				<div className={style.login_content}>
					<p>
						Forgot Password? <span>Reset Now</span>
					</p>
					<p>
						Don't have an account? <span>Sign Up</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Login;
