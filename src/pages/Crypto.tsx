import {
	ChevronDoubleDownIcon,
	ChevronDoubleUpIcon,
} from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CryptoProps } from '../types/types';


const coinsArray = [
	{
		id: 1,
		market_cap_rank: 1,
		name: 'Bitcoin',
		image:
			'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
		symbol: 'btc',
		current_price: 50000,
		price_change_percentage_24h: 2.5,
		market_cap: 1000000000,
		ath: 60000,
	},
	{
		id: 2,
		market_cap_rank: 2,
		name: 'Ethereum',
		image:
			'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
		symbol: 'eth',
		current_price: 3000,
		price_change_percentage_24h: -1.8,
		market_cap: 350000000,
		ath: 4000,
	},
	{
		id: 3,
		market_cap_rank: 3,
		name: 'Cardano',
		image:
			'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860',
		symbol: 'ada',
		current_price: 2.5,
		price_change_percentage_24h: 5.2,
		market_cap: 80000000,
		ath: 3.0,
	},
	{
		id: 4,
		market_cap_rank: 4,
		name: 'Binance Coin',
		image:
			'https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970',
		symbol: 'bnb',
		current_price: 350,
		price_change_percentage_24h: 0.9,
		market_cap: 55000000,
		ath: 380,
	},
	{
		id: 5,
		market_cap_rank: 5,
		name: 'Solana',
		image:
			'https://assets.coingecko.com/coins/images/4128/large/solana.png?1548384250',
		symbol: 'sol',
		current_price: 150,
		price_change_percentage_24h: -3.5,
		market_cap: 20000000,
		ath: 180,
	},
	{
		id: 6,
		market_cap_rank: 6,
		name: 'XRP',
		image:
			'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731',
		symbol: 'xrp',
		current_price: 1.2,
		price_change_percentage_24h: 1.0,
		market_cap: 30000000,
		ath: 1.5,
	},
	{
		id: 7,
		market_cap_rank: 7,
		name: 'Polkadot',
		image:
			'https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776',
		symbol: 'dot',
		current_price: 30,
		price_change_percentage_24h: -2.0,
		market_cap: 4000000,
		ath: 35,
	},
	{
		id: 8,
		market_cap_rank: 8,
		name: 'Dogecoin',
		image:
			'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256',
		symbol: 'doge',
		current_price: 0.3,
		price_change_percentage_24h: 2.8,
		market_cap: 2000000,
		ath: 0.35,
	},
	{
		id: 9,
		market_cap_rank: 9,
		name: 'Litecoin',
		image:
			'https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580',
		symbol: 'ltc',
		current_price: 150,
		price_change_percentage_24h: -1.0,
		market_cap: 12000000,
		ath: 170,
	},
	{
		id: 10,
		market_cap_rank: 10,
		name: 'Chainlink',
		image:
			'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700',
		symbol: 'link',
		current_price: 25,
		price_change_percentage_24h: 4.5,
		market_cap: 5000000,
		ath: 28,
	},
];

const Crypto = () => {
	const [coins, setCoins] = useState<CryptoProps[]>([]);
	const [search, setSearch] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		const getCoins = async () => {
			try {
				const res = await fetch(
					'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
				);
				const data = await res.json();

				if (Array.isArray(data)) {
					setCoins(data);
				} else {
					setCoins(coinsArray);
					console.error(
						'Invalid data format received from the API. Using fallback data.'
					);
				}
			} catch (error) {
				setCoins(coinsArray);
				console.error('Failed to fetch coins, using fallback data.', error);
			}
		};
		getCoins();
		const intervalId = setInterval(getCoins, 60000);
		return () => clearInterval(intervalId);
	}, [coinsArray]);

	const filterCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

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
									{coin.market_cap_rank}
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
