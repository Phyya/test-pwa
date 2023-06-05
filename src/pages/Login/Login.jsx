import React, { useEffect, useState } from 'react';
import { AiOutlineDownload, AiOutlineUser } from 'react-icons/ai';
import { BiLockOpenAlt } from 'react-icons/bi';
import { FaRegEyeSlash } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import logo from '../../images/Optimus_Logo.svg';
import right_logo from '../../images/right_image_logo.png';
import left_logo from '../../images/left_image_logo.png';
import style from './Login.module.css';
import { useNavigate } from 'react-router';
import { users } from '../../data/users';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState('');
	const [downloadPrompt, setDownloadPrompt] = useState(false);
	const [deferredPrompt, setDeferredPrompt] = useState('');
	const handleLogin = () => {
		setError('');
		if (!email || !password) setError('Please fill all missing fields');
		else {
			let user = users.find(
				(user) => user.email.toLowerCase() === email.toLowerCase()
			);
			if (!user) {
				setError('No user found with this email address/phone number.');
			} else {
				if (password !== user.password) setError('Wrong Password');
				else {
					setLoading(true);
					setTimeout(() => {
						navigate('/home');
						localStorage.setItem('opti-user-detail', JSON.stringify(user));
					}, 2000);
				}
			}
		}
	};

	useEffect(() => {
		let isInstalled = localStorage.getItem('savestar_installed');
		if (!isInstalled) {
			setTimeout(() => {
				setDownloadPrompt(true);
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
					setDownloadPrompt(false);
				} else {
					console.log('User dismissed the install prompt');
				}
			});
		} else console.log('No deferred prompt');
	};

	return (
		<div className={style.loginFull}>
			<section className={style.section}>
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
						<Input
							placeholder="Email/Phone number"
							icon={<AiOutlineUser />}
							onChange={(val) => setEmail(val)}
						/>
						<Input
							placeholder="Enter password"
							icon={<BiLockOpenAlt />}
							type="password"
							icon2={<FaRegEyeSlash />}
							onChange={(val) => setPassword(val)}
						/>
						<div style={{ marginTop: '25px' }}>
							{error && <p className={style.errorText}>{error}</p>}
							<Button
								text="Sign In"
								loading={loading}
								onClick={() => handleLogin()}
							/>
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
				{downloadPrompt && (
					<button onClick={handleInstall} className={style.download_Btn}>
						<AiOutlineDownload />
						Download
					</button>
				)}
			</section>
		</div>
	);
};

export default Login;
