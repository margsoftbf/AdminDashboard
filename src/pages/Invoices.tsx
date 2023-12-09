import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Invoice from '../components/Invoice/InvoiceList';
import InvoiceForm from '../components/Invoice/InvoiceForm';
import { PlusSmallIcon } from '@heroicons/react/20/solid';
import { invoices as invoicesData } from '../data/data';
import { v4 as uuidv4 } from 'uuid';
import { InvoiceData } from '../types/types';

const Invoices: React.FC = () => {
	const [modalOpen, setOpenModal] = useState(false);
	const openModal = () => setOpenModal(true);
	const closeModal = () => setOpenModal(false);
	const [invoices, setInvoices] = useState<InvoiceData[]>([...invoicesData]);
	const [editedInvoice, setEditedInvoice] = useState<InvoiceData | undefined>(
		undefined
	);
	const handleSaveInvoice = (invoice: {
		clientName: string;
		emailAddress: string;
		streetAddress: string;
		city: string;
		state: string;
		zipCode: number;
		amount: number;
		status: string;
	}) => {
		if (editedInvoice) {
			setInvoices((prevInvoices) =>
				prevInvoices.map((prevInvoice) =>
					prevInvoice.id === editedInvoice.id
						? { ...prevInvoice, ...invoice }
						: prevInvoice
				)
			);
			setEditedInvoice(undefined);
		} else {
			const newInvoiceId = uuidv4();
			const newInvoice: InvoiceData = { id: newInvoiceId, ...invoice };
			setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
		}
	};

	const handleEditInvoice = (id: string) => {
		const invoiceToEdit = invoices.find((invoice) => invoice.id === id);
		if (invoiceToEdit) {
			openModal();
			setEditedInvoice(invoiceToEdit);
		}
	};

	const handleDeleteInvoice = (id: string) => {
		setInvoices((prevInvoices) =>
			prevInvoices.filter((invoice) => invoice.id !== id)
		);
		setEditedInvoice(undefined);
	};

	const handleClearEdit = () => {
		setEditedInvoice(undefined);
	};

	return (
		<motion.div
			className='p-2 lg:p-4 max-w-5xl flex flex-col mx-auto my-auto'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<div className='flex md:items-center justify-between mb-4'>
				<div className='min-w-0 flex-1'>
					<h2 className='text-3xl font-bold leading-7 text-white sm:truncate  sm:tracking-tight'>
						Invoices
					</h2>
				</div>
				<div className='flex md:ml-4'>
					<button
						onClick={openModal}
						type='button'
						className='ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
					>
						<PlusSmallIcon className='-ml-1.5 h-5 w-5' aria-hidden='true' />
						New invoice
					</button>
				</div>
			</div>
			<div className='flex flex-col gap-4'>
				<div>
					{invoices.map((invoice, index) => (
						<motion.div
							key={invoice.id}
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }}
							exit={{ opacity: 0, y: 50 }}
							transition={{ duration: 0.5 }}
						>
							<Invoice
								key={invoice.id}
								invoice={invoice}
								onEdit={handleEditInvoice}
								onDelete={handleDeleteInvoice}
							/>
						</motion.div>
					))}
				</div>
				<InvoiceForm
					isOpen={modalOpen}
					closeModal={closeModal}
					onSave={handleSaveInvoice}
					editedInvoice={editedInvoice}
					onClearEdit={handleClearEdit}
				/>
			</div>
		</motion.div>
	);
};

export default Invoices;
