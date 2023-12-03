import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { salesData, circleData } from '../../data/data';
import { motion } from 'framer-motion';
const HomeCharts = () => {
	return (
		<motion.div
			className='flex flex-col lg:flex-row items-center gap-4'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<div className='w-full h-96 lg:w-2/3 bg-lightGray rounded-md '>
				<h2 className='text-left ml-2 mt-2 font-semibold'>Line Chart</h2>
				<ResponsiveLine
					data={salesData}
					colors={['#763b25', '#2bde3c']}
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
					margin={{ top: 20, right: 20, bottom: 60, left: 40 }}
					xScale={{ type: 'point' }}
					yScale={{
						type: 'linear',
						min: 'auto',
						max: 'auto',
						stacked: true,
						reverse: false,
					}}
					yFormat=' >-.2f'
					axisTop={null}
					axisRight={null}
					enableGridY={false}
					enableGridX={false}
					pointSize={6}
					pointColor={{ from: 'color', modifiers: [] }}
					pointBorderWidth={2}
					pointBorderColor={{ from: 'serieColor' }}
					pointLabelYOffset={-15}
					enableArea={true}
					areaOpacity={0.35}
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
			</div>
			<div className='w-full h-96 lg:w-1/3 bg-lightGray rounded-md'>
				<h2 className='text-left ml-2 mt-2 font-semibold'>Circle Chart</h2>
				<ResponsivePie
					data={circleData}
					margin={{ top: 20, right: 20, bottom: 50, left: 20 }}
					innerRadius={0.5}
					colors={['#de6d2b', '#2bde3c', '#ded52b', '#2bdea5', '#2b79de']}
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
					padAngle={0.7}
					cornerRadius={3}
					activeOuterRadiusOffset={8}
					borderWidth={1}
					borderColor={{
						from: 'color',
						modifiers: [['darker', 0.2]],
					}}
					defs={[
						{
							id: 'dots',
							type: 'patternDots',
							background: 'inherit',
							color: 'rgba(255, 255, 255, 0.3)',
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
								id: 'ruby',
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
								id: 'elixir',
							},
							id: 'lines',
						},
						{
							match: {
								id: 'javascript',
							},
							id: 'lines',
						},
					]}
					enableArcLinkLabels={false}
					legends={[]}
				/>
			</div>
		</motion.div>
	);
};

export default HomeCharts;
