import HomeInvoices from './HomeBoxes/HomeInvoices';
import HomeProjects from './HomeBoxes/HomeProjects';
import HomeTeam from './HomeBoxes/HomeTeam';
import HomeTestimonals from './HomeBoxes/HomeTestimonals';
import { motion } from 'framer-motion';
const HomeBoxes = () => {
	return (
		<motion.div
			className='border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5 my-4'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<div className='mx-auto grid max-w-10xl gap-4 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 lg:px-2 xl:px-0'>
				<HomeTeam />
				<HomeProjects />
				<HomeTestimonals />
				<HomeInvoices />
			</div>
		</motion.div>
	);
};

export default HomeBoxes;
