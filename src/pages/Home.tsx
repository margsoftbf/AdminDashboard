import HomeBoxes from '../components/HomePage/HomeBoxes';
import HomeCharts from '../components/HomePage/HomeCharts';
import PersonsScore from '../components/HomePage/PersonsScore';

const Home = () => {
	return (
		<div>
			<PersonsScore />
			<HomeCharts />
			<HomeBoxes />
		</div>
	);
};

export default Home;
