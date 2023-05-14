import { useEffect } from 'react';
import RoutesComponent from './routes/routes';
import './App.css';

function App() {
	useEffect(() => {
		window.addEventListener('appinstalled', (event) => {
			navigate('/optiverse');
		});
	});
	return (
		<div className="App">
			<RoutesComponent />
		</div>
	);
}

export default App;
