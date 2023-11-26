import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { salesData } from '../../data/data';

const data = [
	{
		id: 'Guest',
		label: 'Guest',
		value: 222,
		color: 'hsl(211, 70%, 50%)',
	},
	{
		id: 'Customer',
		label: 'Customer',
		value: 276,
		color: 'hsl(11, 70%, 50%)',
	},
	{
		id: 'Workers',
		label: 'Workers',
		value: 323,
		color: 'hsl(111, 70%, 50%)',
	},
	{
		id: 'CEO',
		label: 'CEO',
		value: 325,
		color: 'hsl(307, 70%, 50%)',
	},
	{
		id: 'President',
		label: 'President',
		value: 405,
		color: 'hsl(349, 70%, 50%)',
	},
];

const HomeCharts = () => {
	return (
		<div className='flex flex-col lg:flex-row items-center gap-4 mx-2'>
			<div className='w-full h-96 lg:w-2/3 bg-lightGray rounded-md'>
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
								color: '#fff',
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
				/>
			</div>
			<div className='w-full h-96 lg:w-1/3 bg-lightGray rounded-md'>
				<h2 className='text-left ml-2 mt-2 font-semibold'>Circle Chart</h2>
				<ResponsivePie
					data={data}
					margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
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
		</div>
	);
};

export default HomeCharts;
