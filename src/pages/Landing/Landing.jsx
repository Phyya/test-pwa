import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Landing = () => {
	const navigate = useNavigate();
	const [deferredPrompt, setDeferredPrompt] = useState('');

	useEffect(() => {
		console.log('just mounted');
		window.addEventListener('appinstalled', (event) => {
			navigate('/optiverse');
		});
		window.addEventListener('beforeinstallprompt', (event) => {
			console.log(event, 'eventlistener here');
			event.preventDefault();
			setDeferredPrompt(event);
			// Show the install button or custom UI element
		});
	}, [navigate]);

	const handleInstallButtonClick = () => {
		console.log('button clicked');
		if (deferredPrompt) {
			deferredPrompt.prompt();
			deferredPrompt.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === 'accepted') {
					console.log('User accepted the install prompt');
				} else {
					console.log('User dismissed the install prompt');
				}
			});
		} else console.log('No defereed prompt');
	};

	return (
		<div>
			<h1>SAVESTAR</h1>
			<button onClick={handleInstallButtonClick}>Install App</button>
		</div>
	);
};

export default Landing;
