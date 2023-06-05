import { Routes, Route } from 'react-router-dom';
import FundAccount from '../pages/FundAcc/FundAcc';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

function RoutesComponent() {
	return (
		<Routes>
			{/* <Route path="/" element={<Landing />} /> */}
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<Home />} />
			<Route path="/fund-account" element={<FundAccount />} />
		</Routes>
	);
}

export default RoutesComponent;
