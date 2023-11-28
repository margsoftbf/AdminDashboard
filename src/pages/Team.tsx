import {
	MapPinIcon,
	PencilSquareIcon,
	TrashIcon,
	XCircleIcon,
	CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material';
import { userRows } from '../data/data';
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
					className='rounded-full w-10 h-10'
				/>
			);
		},
	},
	{
		field: 'firstName',
		type: 'string',
		headerName: 'First name',
		width: 150,
		editable: true,
	},
	{
		field: 'lastName',
		type: 'string',
		headerName: 'Last name',
		width: 150,
		editable: true,
	},
	{
		field: 'email',
		type: 'string',
		headerName: 'Email',
		width: 200,
		editable: true,
	},
	{
		field: 'phone',
		type: 'string',
		headerName: 'Phone',
		width: 200,
		editable: true,
	},

	{
		field: 'position',
		headerName: 'Position',
		width: 150,
		type: 'string',
		editable: true,
	},
	{
		field: 'location',
		headerName: 'Location',
		width: 200,
		renderCell: (params) => (
			<div className='flex items-center'>
				<MapPinIcon className='w-5 h-5 mr-2 text-gray-500' />
				{params.row.location}
			</div>
		),
		editable: true,
	},
	{
		field: 'hireData',
		headerName: 'Hire Date',
		width: 200,
		type: 'string',
		editable: true,
	},
	{
		field: 'earnings',
		headerName: 'Earnings',
		width: 200,
		type: 'string',
		renderCell: (params) => (
			<div
				className={`flex items-center ${
					params.row.earnings >= 0 ? 'text-green-500' : 'text-red-500'
				}`}
			>
				{params.row.earnings >= 0 ? '+' : '-'} ${Math.abs(params.row.earnings)}
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
	{
		field: 'verified',
		headerName: 'Verified',
		width: 150,
		type: 'boolean',
		renderCell: (params) => (
			<div className='flex items-center'>
				{params.row.verified ? (
					<CheckCircleIcon className='w-5 h-5 text-green-500' />
				) : (
					<XCircleIcon className='w-5 h-5 text-red-500' />
				)}
			</div>
		),
	},
];

const Team = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
			>
				<DataGrid
					rows={userRows}
					columns={[...columns]}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 20,
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

export default Team;
