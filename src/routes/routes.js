import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Login/Login';

function RoutesComponent() {
	return (
		<div className="Routes">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/optiverse" element={<Login />} />
			</Routes>
		</div>
	);
}

export default RoutesComponent;
