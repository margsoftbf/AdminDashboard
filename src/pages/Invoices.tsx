import { motion } from 'framer-motion';

const Invoices = () => {
	return (
		<motion.div
			className='w-full h-auto bg-lightGray rounded-md'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<h2 className='text-left ml-4 mt-4 font-semibold text-white'>Invoices App</h2>
		</motion.div>
	);
};

export default Invoices;
