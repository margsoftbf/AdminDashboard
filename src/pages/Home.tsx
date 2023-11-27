import HomeBoxes from '../components/HomePage/HomeBoxes';
import HomeCharts from '../components/HomePage/HomeCharts';
import HomeStats from '../components/HomePage/HomeStats';
import PersonsScore from '../components/HomePage/PersonsScore';

const Home = () => {
	return (
		<div>
			<PersonsScore />
			<HomeCharts />
			<HomeBoxes />
			<HomeStats />
		</div>
	);
};

export default Home;
