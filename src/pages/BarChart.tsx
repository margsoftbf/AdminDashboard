import { ResponsiveBar } from '@nivo/bar';
import { motion } from 'framer-motion';
import { BarChartData } from '../data/data';

const BarChart = () => {
	return (
		<motion.div
			className='w-full h-[80vh] bg-lightGray rounded-md'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<h2 className='text-left ml-4 mt-4 font-semibold text-white'>
				Bar Chart
			</h2>
			<ResponsiveBar
				data={BarChartData}
				keys={['pizza', 'pasta', 'burger', 'Sushi', 'Fries', 'Ice cream']}
				indexBy='country'
				margin={{ top: 50, right: 130, bottom: 80, left: 60 }}
				padding={0.3}
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
				valueScale={{ type: 'linear' }}
				indexScale={{ type: 'band', round: true }}
				colors={{ scheme: 'nivo' }}
				defs={[
					{
						id: 'dots',
						type: 'patternDots',
						background: 'inherit',
						color: '#38bcb2',
						size: 4,
						padding: 1,
						stagger: true,
					},
					{
						id: 'lines',
						type: 'patternLines',
						background: 'inherit',
						color: '#eed312',
						rotation: -45,
						lineWidth: 6,
						spacing: 10,
					},
				]}
				fill={[
					{
						match: {
							id: 'Fries',
						},
						id: 'dots',
					},
					{
						match: {
							id: 'sandwich',
						},
						id: 'lines',
					},
				]}
				borderColor={{
					from: 'color',
					modifiers: [['darker', 1.6]],
				}}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Country',
					legendPosition: 'middle',
					legendOffset: 32,
					truncateTickAt: 0,
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Food',
					legendPosition: 'middle',
					legendOffset: -40,
					truncateTickAt: 0,
				}}
				labelSkipWidth={12}
				labelSkipHeight={12}
				labelTextColor={{
					from: 'color',
					modifiers: [['darker', 1.6]],
				}}
				legends={[
					{
						dataFrom: 'keys',
						anchor: 'bottom-right',
						direction: 'column',
						justify: false,
						translateX: 120,
						translateY: 0,
						itemsSpacing: 2,
						itemWidth: 100,
						itemHeight: 20,
						itemDirection: 'left-to-right',
						itemOpacity: 0.85,
						symbolSize: 20,
						effects: [
							{
								on: 'hover',
								style: {
									itemOpacity: 1,
								},
							},
						],
					},
				]}
				role='application'
				ariaLabel='Nivo bar chart demo'
				barAriaLabel={(e) =>
					e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
				}
			/>
		</motion.div>
	);
};

export default BarChart;
