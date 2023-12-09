import { ResponsivePie } from '@nivo/pie';
import { motion } from 'framer-motion';
import { pieChartData } from '../data/data';

const PieChart = () => {
	return (
		<motion.div
			className='w-full h-[80vh] bg-lightGray rounded-md'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<h2 className='text-left ml-4 mt-4 font-semibold text-white'>
				Pie Chart
			</h2>
			<ResponsivePie
				data={pieChartData}
				theme={{
					axis: {
						domain: {
							line: {
								stroke: '#fff',
							},
						},
						legend: {
							text: {
								fill: '#fff',
							},
						},
						ticks: {
							line: {
								stroke: '#fff',
								strokeWidth: 1,
							},
							text: {
								fill: '#fff',
							},
						},
					},
					legends: {
						text: {
							fill: '#fff',
						},
					},
					tooltip: {
						container: {
							color: '#000',
						},
					},
				}}
				margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
				innerRadius={0.5}
				padAngle={0.7}
				cornerRadius={3}
				activeOuterRadiusOffset={8}
				borderWidth={1}
				borderColor={{
					from: 'color',
					modifiers: [['darker', 0.2]],
				}}
				arcLinkLabelsSkipAngle={10}
				arcLinkLabelsTextColor='#fff'
				arcLinkLabelsThickness={2}
				arcLinkLabelsColor={{ from: 'color' }}
				arcLabelsSkipAngle={10}
				arcLabelsTextColor={{
					from: 'color',
					modifiers: [['darker', 2]],
				}}
				defs={[
					{
						id: 'dots',
						type: 'patternDots',
						background: 'inherit',
						color: 'rgba(245, 242, 242, 0.3)',
						size: 4,
						padding: 1,
						stagger: true,
					},
					{
						id: 'lines',
						type: 'patternLines',
						background: 'inherit',
						color: 'rgba(255, 255, 255, 0.3)',
						rotation: -45,
						lineWidth: 6,
						spacing: 10,
					},
				]}
				fill={[
					{
						match: {
							id: 'Ruby',
						},
						id: 'dots',
					},
					{
						match: {
							id: 'c',
						},
						id: 'dots',
					},
					{
						match: {
							id: 'go',
						},
						id: 'dots',
					},
					{
						match: {
							id: 'python',
						},
						id: 'dots',
					},
					{
						match: {
							id: 'scala',
						},
						id: 'lines',
					},
					{
						match: {
							id: 'lisp',
						},
						id: 'lines',
					},
					{
						match: {
							id: 'Elixir',
						},
						id: 'lines',
					},
					{
						match: {
							id: 'Javascript',
						},
						id: 'lines',
					},
				]}
				legends={[
					{
						anchor: 'bottom',
						direction: 'row',
						justify: false,
						translateX: 0,
						translateY: 56,
						itemsSpacing: 0,
						itemWidth: 100,
						itemHeight: 18,
						itemTextColor: '#999',
						itemDirection: 'left-to-right',
						itemOpacity: 1,
						symbolSize: 18,
						symbolShape: 'circle',
						effects: [
							{
								on: 'hover',
								style: {
									itemTextColor: '#000',
								},
							},
						],
					},
				]}
			/>
		</motion.div>
	);
};

export default PieChart;
