import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';


const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Team = lazy(() => import('./pages/Team'));
const Customers = lazy(() => import('./pages/Customers'));
const Products = lazy(() => import('./pages/Products'));
const Orders = lazy(() => import('./pages/Orders'));
const Invoices = lazy(() => import('./pages/Invoices'));
const Crypto = lazy(() => import('./pages/Crypto'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Kanban = lazy(() => import('./pages/Kanban'));
const BarChart = lazy(() => import('./pages/BarChart'));
const PieChart = lazy(() => import('./pages/PieChart'));
const LineChart = lazy(() => import('./pages/LineChart'));
const Faq = lazy(() => import('./pages/Faq'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
	return (
		<Router>
			<Sidebar
				classes={[]}
				renderRoutes={() => (
					<Suspense fallback={<div>Loading...</div>}>
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
					</Suspense>
				)}
			/>
		</Router>
	);
}

export default App;
