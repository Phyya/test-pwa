import React, { useEffect, useState } from 'react';
import './App.css';
// import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

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
			});
		} else console.log('No defereed prompt');
	};

	return (
		<div className="App">
			<button onClick={handleInstallButtonClick}>Install App</button>
			{/* <Login /> */}
			<Home />
		</div>
	);
}

export default App;
