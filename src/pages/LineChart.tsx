import { ResponsiveLine } from '@nivo/line';
import { motion } from 'framer-motion';
import { lineChartData } from '../data/data';

const LineChart = () => {
	return (
		<motion.div
			className='w-full h-[80vh] bg-lightGray rounded-md'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<h2 className='text-left ml-4 mt-4 font-semibold text-white'>
				Line Chart
			</h2>
			<ResponsiveLine
				data={lineChartData}
				margin={{ top: 50, right: 110, bottom: 80, left: 60 }}
				xScale={{ type: 'point' }}
				yScale={{
					type: 'linear',
					min: 'auto',
					max: 'auto',
					stacked: true,
					reverse: false,
				}}
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
				yFormat=' >-.2f'
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'transportation',
					legendOffset: 36,
					legendPosition: 'middle',
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'count',
					legendOffset: -40,
					legendPosition: 'middle',
				}}
				pointSize={10}
				pointColor={{ theme: 'background' }}
				pointBorderWidth={2}
				pointBorderColor={{ from: 'serieColor' }}
				pointLabelYOffset={-12}
				useMesh={true}
				legends={[
					{
						anchor: 'bottom-right',
						direction: 'column',
						justify: false,
						translateX: 100,
						translateY: 0,
						itemsSpacing: 0,
						itemDirection: 'left-to-right',
						itemWidth: 80,
						itemHeight: 20,
						itemOpacity: 0.75,
						symbolSize: 12,
						symbolShape: 'circle',
						symbolBorderColor: 'rgba(0, 0, 0, .5)',
						effects: [
							{
								on: 'hover',
								style: {
									itemBackground: 'rgba(0, 0, 0, .03)',
									itemOpacity: 1,
								},
							},
						],
					},
				]}
			/>
		</motion.div>
	);
};

export default LineChart;
