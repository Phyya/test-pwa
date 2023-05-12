import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [deferredPrompt, setDeferredPrompt] = useState('');

	useEffect(() => {
		console.log('just mounted');
		window.addEventListener('beforeinstallprompt', (event) => {
			console.log('eventlistener here');
			event.preventDefault();
			setDeferredPrompt(event);
			// Show the install button or custom UI element
		});
	}, []);

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
				deferredPrompt = null;
			});
		} else console.log('No defereed prompt');
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<button onClick={handleInstallButtonClick}>Install App</button>
			</header>
		</div>
	);
}

export default App;
