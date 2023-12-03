import { ResponsiveBar } from '@nivo/bar';
import { motion } from 'framer-motion';

const data = [
	{
		country: 'Poland',
		pizza: 120,
		pizzaColor: 'hsl(180, 70%, 50%)',
		pasta: 25,
		pastaColor: 'hsl(90, 70%, 50%)',
		burger: 150,
		burgerColor: 'hsl(45, 70%, 50%)',
		Sushi: 80,
		SushiColor: 'hsl(270, 70%, 50%)',
		Fries: 90,
		FriesColor: 'hsl(120, 70%, 50%)',
		'Ice cream': 200,
		iceCreamColor: 'hsl(300, 70%, 50%)',
	},
	{
		country: 'Italy',
		pizza: 15,
		pizzaColor: 'hsl(200, 70%, 50%)',
		pasta: 100,
		pastaColor: 'hsl(150, 70%, 50%)',
		burger: 120,
		burgerColor: 'hsl(270, 70%, 50%)',
		Sushi: 20,
		SushiColor: 'hsl(300, 70%, 50%)',
		Fries: 130,
		FriesColor: 'hsl(200, 70%, 50%)',
		'Ice cream': 70,
		iceCreamColor: 'hsl(320, 70%, 50%)',
	},
	{
		country: 'Japan',
		pizza: 30,
		pizzaColor: 'hsl(250, 70%, 50%)',
		pasta: 5,
		pastaColor: 'hsl(60, 70%, 50%)',
		burger: 90,
		burgerColor: 'hsl(150, 70%, 50%)',
		Sushi: 120,
		SushiColor: 'hsl(190, 70%, 50%)',
		Fries: 80,
		FriesColor: 'hsl(220, 70%, 50%)',
		'Ice cream': 50,
		iceCreamColor: 'hsl(340, 70%, 50%)',
	},
	{
		country: 'USA',
		pizza: 150,
		pizzaColor: 'hsl(160, 70%, 50%)',
		pasta: 20,
		pastaColor: 'hsl(80, 70%, 50%)',
		burger: 30,
		burgerColor: 'hsl(30, 70%, 50%)',
		Sushi: 70,
		SushiColor: 'hsl(340, 70%, 50%)',
		Fries: 100,
		FriesColor: 'hsl(130, 70%, 50%)',
		'Ice cream': 20,
		iceCreamColor: 'hsl(160, 70%, 50%)',
	},
	{
		country: 'France',
		pizza: 25,
		pizzaColor: 'hsl(190, 70%, 50%)',
		pasta: 30,
		pastaColor: 'hsl(240, 70%, 50%)',
		burger: 160,
		burgerColor: 'hsl(260, 70%, 50%)',
		Sushi: 50,
		SushiColor: 'hsl(180, 70%, 50%)',
		Fries: 160,
		FriesColor: 'hsl(210, 70%, 50%)',
		'Ice cream': 10,
		iceCreamColor: 'hsl(320, 70%, 50%)',
	},
	{
		country: 'Greece',
		pizza: 130,
		pizzaColor: 'hsl(80, 70%, 50%)',
		pasta: 120,
		pastaColor: 'hsl(240, 70%, 50%)',
		burger: 180,
		burgerColor: 'hsl(160, 70%, 50%)',
		Sushi: 130,
		SushiColor: 'hsl(190, 70%, 50%)',
		Fries: 92,
		FriesColor: 'hsl(210, 70%, 50%)',
		'Ice cream': 10,
		iceCreamColor: 'hsl(320, 70%, 50%)',
	},
];

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
				data={data}
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
