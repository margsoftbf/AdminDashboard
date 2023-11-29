import {
	PencilSquareIcon,
	TrashIcon,
	MapPinIcon,
} from '@heroicons/react/24/outline';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material';
import { productRows } from '../data/data';
import { motion } from 'framer-motion';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const columns: GridColDef[] = [
	{
		field: 'id',
		headerName: 'ID',
		width: 90,
	},
	{
		field: 'img',
		headerName: 'Avatar',
		width: 100,
		renderCell: (params) => {
			return (
				<img
					src={params.row.img || '/noavatar.png'}
					alt=''
					className='rounded-md flex items-center w-16 h-16'
				/>
			);
		},
	},
	{
		field: 'customerName',
		type: 'string',
		headerName: 'Customer Name',
		width: 200,
		editable: true,
	},
	{
		field: 'title',
		type: 'string',
		headerName: 'Title',
		width: 250,
		editable: true,
	},
	{
		field: 'color',
		type: 'string',
		headerName: 'Color',
		width: 150,
		editable: true,
	},
	{
		field: 'price',
		type: 'string',
		headerName: 'Price',
		width: 100,
		editable: true,
	},
	{
		field: 'producer',
		type: 'string',
		headerName: 'Producer',
		width: 200,
		editable: true,
	},
	{
		field: 'status',
		headerName: 'Status',
		width: 200,
		type: 'string',
		renderCell: (params) => (
			<div className={`flex items-center`}>
				{params.row.status === 'Completed' ? (
					<span className='text-green-500 text-4xl'>&#x2022;</span>
				) : params.row.status === 'Pending' ? (
					<span className='text-yellow-500 text-4xl'>&#x2022;</span>
				) : params.row.status === 'Cancel' ? (
					<span className='text-red-500 text-4xl'>&#x2022;</span>
				) : null}
				<span
					className={`ml-2 text-xs ${
						params.row.status === 'Completed'
							? 'text-green-500'
							: params.row.status === 'Pending'
							? 'text-yellow-500'
							: 'text-red-500'
					}`}
				>
					{params.row.status}
				</span>
			</div>
		),
		editable: true,
	},
	{
		field: 'orderId',
		type: 'string',
		headerName: 'Order ID',
		width: 100,
		editable: true,
	},
	{
		field: 'address',
		type: 'string',
		headerName: 'Address',
		width: 200,
		renderCell: (params) => (
			<div className='flex items-center'>
				<MapPinIcon className='w-5 h-5 mr-2 text-gray-500' />
				{params.row.address}
			</div>
		),
		editable: true,
	},

	{
		field: 'actions',
		headerName: 'Actions',
		width: 120,
		renderCell: () => (
			<div className='flex items-center space-x-2'>
				<PencilSquareIcon className='w-5 h-5 text-blue-500 cursor-pointer' />
				<TrashIcon className='w-5 h-5 text-orange-500 cursor-pointer' />
			</div>
		),
	},
];

const Orders = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
			>
				<DataGrid
					rows={productRows}
					columns={[...columns]}
					rowHeight={80}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 10,
							},
						},
					}}
					pageSizeOptions={[5]}
					checkboxSelection
					disableRowSelectionOnClick
					disableColumnFilter
					disableDensitySelector
					disableColumnSelector
					sx={{
						border: 'none',
						'& .MuiDataGrid-root': {
							border: 'none',
						},
						'& .MuiDataGrid-columnHeaders': {
							backgroundColor: '#6270ec',
							color: '#fff',
							borderBottom: 'none',
						},
						'& .MuiDataGrid-virtualScroller': {
							backgroundColor: '#28272e',
							color: '#fff',
						},
						'& .MuiDataGrid-footerContainer': {
							backgroundColor: '#6270ec',
						},
					}}
				/>
			</motion.div>
		</ThemeProvider>
	);
};

export default Orders;
