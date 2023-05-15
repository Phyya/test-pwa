import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiLockOpenAlt } from 'react-icons/bi';
import { FaRegEyeSlash } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import logo from '../../images/Optimus_Logo.svg';
import right_logo from '../../images/right_image_logo.png';
import left_logo from '../../images/left_image_logo.png';
import style from './Login.module.css';
import { useNavigate } from 'react-router';
import Modal from '../../components/Modal/Modal';

const Login = () => {
	const navigate = useNavigate();
	const [modalOpen, setModalOpen] = useState(false);
	const [deferredPrompt, setDeferredPrompt] = useState('');
	const handleLogin = () => {
		navigate('/home');
	};

	useEffect(() => {
		let isInstalled = localStorage.getItem('savestar_installed');
		if (!isInstalled) {
			setTimeout(() => {
				setModalOpen(true);
			}, 2000);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('beforeinstallprompt', (event) => {
			event.preventDefault();
			setDeferredPrompt(event);
		});
	});

	const handleInstall = () => {
		if (deferredPrompt) {
			deferredPrompt.prompt();
			deferredPrompt.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === 'accepted') {
					localStorage.setItem('savestar_installed', true);
					setModalOpen(false);
				} else {
					console.log('User dismissed the install prompt');
				}
			});
		} else console.log('No deferred prompt');
	};

	return (
		<section className={style.section}>
			<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
				<h1>Do you want to install this app?</h1>
				<Button text="Yes" onClick={handleInstall} />
				<Button text="No" onClick={() => setModalOpen(false)} />
			</Modal>
			<img className={style.right_image} src={right_logo} alt="right_logo" />
			<img className={style.left_image} src={left_logo} alt="left_logo" />

			<header>
				<img src={logo} alt="optimus_logo" />
			</header>

			<div className={style.main_content}>
				<p className={style.heading}>
					Welcome to
					<span>
						Opti<span>Verse</span>
					</span>
				</p>
				<div>
					<Input placeholder="Email/Phone number" icon={<AiOutlineUser />} />
					<Input
						placeholder="Enter password"
						icon={<BiLockOpenAlt />}
						type="password"
						icon2={<FaRegEyeSlash />}
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
