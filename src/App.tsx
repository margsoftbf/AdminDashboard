import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BarChart from './pages/BarChart';
import Calendar from './pages/Calendar';
import Crypto from './pages/Crypto';
import Customers from './pages/Customers';
import Faq from './pages/Faq';
import Invoices from './pages/Invoices';
import Kanban from './pages/Kanban';
import LineChart from './pages/LineChart';
import Orders from './pages/Orders';
import PieChart from './pages/PieChart';
import Products from './pages/Products';
import Settings from './pages/Settings';
import Team from './pages/Team';


function App() {
	return (
		<Router>
			<Sidebar
				classes={[]}
				renderRoutes={() => (
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/team' element={<Team />} />
						<Route path='/customers' element={<Customers />} />
						<Route path='/products' element={<Products />} />
						<Route path='/orders' element={<Orders />} />
						<Route path='/invoices' element={<Invoices />} />
						<Route path='/crypto' element={<Crypto />} />
						<Route path='/calendar' element={<Calendar />} />
						<Route path='/kanban' element={<Kanban />} />
						<Route path='/bar-chart' element={<BarChart />} />
						<Route path='/pie-chart' element={<PieChart />} />
						<Route path='/line-chart' element={<LineChart />} />
						<Route path='/faq' element={<Faq />} />
						<Route path='/settings' element={<Settings />} />
					</Routes>
				)}
			/>
		</Router>
	);
}
export default App;
