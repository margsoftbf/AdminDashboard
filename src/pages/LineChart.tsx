import { ResponsiveLine } from '@nivo/line';
import { motion } from 'framer-motion';
const data = [
	{
		id: 'Japan',
		color: 'hsl(344, 70%, 50%)',
		data: [
			{
				x: 'Plane',
				y: 67,
			},
			{
				x: 'Helicopter',
				y: 263,
			},
			{
				x: 'Boat',
				y: 26,
			},
			{
				x: 'Train',
				y: 259,
			},
			{
				x: 'Subway',
				y: 184,
			},
			{
				x: 'Bus',
				y: 298,
			},
			{
				x: 'Car',
				y: 148,
			},
			{
				x: 'Moto',
				y: 135,
			},
			{
				x: 'Bicycle',
				y: 23,
			},
			{
				x: 'Horse',
				y: 107,
			},
			{
				x: 'Skateboard',
				y: 3,
			},
			{
				x: 'Others',
				y: 47,
			},
		],
	},
	{
		id: 'France',
		color: 'hsl(168, 70%, 50%)',
		data: [
			{
				x: 'Plane',
				y: 215,
			},
			{
				x: 'Helicopter',
				y: 263,
			},
			{
				x: 'Boat',
				y: 243,
			},
			{
				x: 'Train',
				y: 244,
			},
			{
				x: 'Subway',
				y: 39,
			},
			{
				x: 'Bus',
				y: 248,
			},
			{
				x: 'Car',
				y: 210,
			},
			{
				x: 'Moto',
				y: 67,
			},
			{
				x: 'Bicycle',
				y: 45,
			},
			{
				x: 'Horse',
				y: 178,
			},
			{
				x: 'Skateboard',
				y: 247,
			},
			{
				x: 'Others',
				y: 105,
			},
		],
	},
	{
		id: 'USA',
		color: 'hsl(145, 70%, 50%)',
		data: [
			{
				x: 'Plane',
				y: 244,
			},
			{
				x: 'Helicopter',
				y: 111,
			},
			{
				x: 'Boat',
				y: 285,
			},
			{
				x: 'Train',
				y: 159,
			},
			{
				x: 'Subway',
				y: 145,
			},
			{
				x: 'Bus',
				y: 63,
			},
			{
				x: 'Car',
				y: 254,
			},
			{
				x: 'Moto',
				y: 32,
			},
			{
				x: 'Bicycle',
				y: 67,
			},
			{
				x: 'Horse',
				y: 34,
			},
			{
				x: 'Skateboard',
				y: 226,
			},
			{
				x: 'Others',
				y: 252,
			},
		],
	},
	{
		id: 'Germany',
		color: 'hsl(96, 70%, 50%)',
		data: [
			{
				x: 'Plane',
				y: 162,
			},
			{
				x: 'Helicopter',
				y: 199,
			},
			{
				x: 'Boat',
				y: 243,
			},
			{
				x: 'Train',
				y: 284,
			},
			{
				x: 'Subway',
				y: 287,
			},
			{
				x: 'Bus',
				y: 182,
			},
			{
				x: 'Car',
				y: 235,
			},
			{
				x: 'Moto',
				y: 216,
			},
			{
				x: 'Bicycle',
				y: 46,
			},
			{
				x: 'Horse',
				y: 199,
			},
			{
				x: 'Skateboard',
				y: 25,
			},
			{
				x: 'Others',
				y: 15,
			},
		],
	},
	{
		id: 'Norway',
		color: 'hsl(117, 70%, 50%)',
		data: [
			{
				x: 'Plane',
				y: 58,
			},
			{
				x: 'Helicopter',
				y: 199,
			},
			{
				x: 'Boat',
				y: 128,
			},
			{
				x: 'Train',
				y: 97,
			},
			{
				x: 'Subway',
				y: 146,
			},
			{
				x: 'Bus',
				y: 31,
			},
			{
				x: 'Car',
				y: 30,
			},
			{
				x: 'Moto',
				y: 113,
			},
			{
				x: 'Bicycle',
				y: 247,
			},
			{
				x: 'Horse',
				y: 295,
			},
			{
				x: 'Skateboard',
				y: 198,
			},
			{
				x: 'Others',
				y: 204,
			},
		],
	},
];
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
				data={data}
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
