import {
	ChevronDoubleDownIcon,
	ChevronDoubleUpIcon,
} from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CryptoProps {
	id: number;
	name: string;
	image: string;
	symbol: string;
	current_price: number;
	price_change_percentage_24h: number;
	market_cap: number;
	ath: number;
}

const Crypto = () => {
	const [coins, setCoins] = useState<CryptoProps[]>([]);
	const [search, setSearch] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const filterCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	useEffect(() => {
		const getCoins = async () => {
			const res = await fetch(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
			);
			const data = await res.json();
			setCoins(data);
		};
		getCoins();
	}, []);

	return (
		<motion.div
			className='bg-lightGray rounded-md py-10 overflow-y-auto'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<div className='px-4  flex items-center justify-center text-base font-semibold leading-7 text-white sm:px-6 lg:px-8'>
				<form>
					<input
						type='text'
						onChange={handleChange}
						placeholder='Search Crypto...'
						className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
					/>
				</form>
			</div>
			<table className='mt-6 w-full whitespace-nowrap text-left'>
				<colgroup>
					<col className='w-1/12' />
					<col className='w-full sm:w-5/12' />
					<col className='xl:w-1/12' />
					<col className='lg:w-1/12' />
					<col className='lg:w-5/12 2xl:w-1/12' />
					<col className='lg:w-1/12' />
					<col className='lg:w-1/12' />
				</colgroup>
				<thead className='border-b border-white/10 text-sm leading-6 text-white font-sans'>
					<tr>
						<th
							scope='col'
							className='py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8'
						>
							#
						</th>
						<th
							scope='col'
							className='py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8'
						>
							Coin
						</th>
						<th
							scope='col'
							className='py-2 pl-0 pr-4 font-semibold sm:table-cell text-right sm:text-left sm:pr-8'
						>
							Price
						</th>
						<th
							scope='col'
							className='hidden py-2 pr-4 font-semibold sm:table-cell lg:pr-20 text-right md:text-left'
						>
							Symbol
						</th>
						<th
							scope='col'
							className='hidden py-2 pl-0 pr-2 font-semibold md:table-cell text-right 2xl:text-left'
						>
							24H Change
						</th>
						<th
							scope='col'
							className='hidden py-2 pl-0 pr-4 text-left font-semibold 2xl:table-cell 2xl:pr-6'
						>
							Marketcap
						</th>
						<th
							scope='col'
							className='hidden py-2 pl-0 pr-4 text-right font-semibold 2xl:table-cell 2xl:pr-6'
						>
							ATH
						</th>
					</tr>
				</thead>
				<tbody className='divide-y divide-white/5 font-sans'>
					{filterCoins.map((coin) => (
						<tr key={coin.id}>
							<td className='py-4 pl-4 pr-8 sm:pl-6 lg:pl-8'>
								<div className='flex items-center font-mono text-sm leading-6 text-gray-400 justify-end md:justify-start'>
									{coin.id}
								</div>
							</td>
							<td className='py-4 pl-4 pr-8 sm:pl-6 lg:pl-8'>
								<div className='flex items-center gap-x-4'>
									<img
										src={coin.image}
										alt=''
										className='h-8 w-8 rounded-full bg-gray-800'
									/>
									<div className='truncate text-sm font-medium leading-6 text-white'>
										{coin.name}
									</div>
								</div>
							</td>
							<td className='py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20'>
								<div className='flex items-center justify-end gap-x-2 sm:justify-start'>
									<div className='text-white sm:block'>
										<span className='font-bold mr-2'>$</span>
										{coin.current_price}
									</div>
								</div>
							</td>
							<td className='hidden py-4 pl-0 pr-4 sm:table-cell'>
								<div className='flex items-center font-mono text-sm leading-6 text-gray-400 justify-end md:justify-start'>
									{coin.symbol.toUpperCase()}
								</div>
							</td>

							<td className='hidden py-4 pl-0 pr-2 text-sm leading-6 text-gray-400 md:table-cell'>
								{coin.price_change_percentage_24h > 0 ? (
									<span className='text-green-500 flex items-center justify-end 2xl:justify-start'>
										<ChevronDoubleUpIcon className='w-5 h-5 mr-1' />
										{coin.price_change_percentage_24h.toFixed(2)}%
									</span>
								) : (
									<span className='text-red-500 flex items-center justify-end 2xl:justify-start'>
										<ChevronDoubleDownIcon className='w-5 h-5 mr-1' />
										{coin.price_change_percentage_24h.toFixed(2)}%
									</span>
								)}
							</td>
							<td className='hidden py-4 pl-0 pr-4 text-left text-sm leading-6 text-gray-400 2xl:table-cell 2xl:pr-6'>
								<span>{coin.market_cap}</span>
							</td>
							<td className='hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 2xl:table-cell 2xl:pr-6'>
								<span className='text-green-500'>
									<span className='mr-1'>$</span>
									{coin.ath}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</motion.div>
	);
};

export default Crypto;
