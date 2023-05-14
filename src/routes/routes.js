import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Login/Login';

function RoutesComponent() {
	return (
		<div className="Routes">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/optiverse" element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default RoutesComponent;
