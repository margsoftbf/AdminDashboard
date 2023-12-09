import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material';
import { userRows } from '../data/data';
import { motion } from 'framer-motion';
import { customerColumns } from '../data/data';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});


const Customers = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
			>
				<DataGrid
					rows={userRows}
					columns={[...customerColumns]}
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

export default Customers;
