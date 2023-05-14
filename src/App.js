import { useEffect } from 'react';
import RoutesComponent from './routes/routes';
import { useNavigate } from 'react-router';
import './App.css';

function App() {
	const navigate = useNavigate();
	useEffect(() => {
		console.log('hii from app');
		let isInstalled = localStorage.getItem('pwaInstalled');
		if (isInstalled) navigate('/optiverse');
	}, []);
	return (
		<div className="App">
			<RoutesComponent />
		</div>
	);
}

export default App;
