import{r as t,j as e}from"./index-BGze6TjV.js";import{m as g}from"./motion-4urvpl72.js";function h({title:r,titleId:s,...c},l){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":s},c),r?t.createElement("title",{id:s},r):null,t.createElement("path",{fillRule:"evenodd",d:"M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z",clipRule:"evenodd"}))}const x=t.forwardRef(h),_=x;function f({title:r,titleId:s,...c},l){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":s},c),r?t.createElement("title",{id:s},r):null,t.createElement("path",{fillRule:"evenodd",d:"M5.23 15.79a.75.75 0 01-.02-1.06l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 11-1.08 1.04L10 11.832 6.29 15.77a.75.75 0 01-1.06.02zm0-6a.75.75 0 01-.02-1.06l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 11-1.08 1.04L10 5.832 6.29 9.77a.75.75 0 01-1.06.02z",clipRule:"evenodd"}))}const u=t.forwardRef(f),y=u,n=[{id:1,market_cap_rank:1,name:"Bitcoin",image:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",symbol:"btc",current_price:5e4,price_change_percentage_24h:2.5,market_cap:1e9,ath:6e4},{id:2,market_cap_rank:2,name:"Ethereum",image:"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",symbol:"eth",current_price:3e3,price_change_percentage_24h:-1.8,market_cap:35e7,ath:4e3},{id:3,market_cap_rank:3,name:"Cardano",image:"https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",symbol:"ada",current_price:2.5,price_change_percentage_24h:5.2,market_cap:8e7,ath:3},{id:4,market_cap_rank:4,name:"Binance Coin",image:"https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970",symbol:"bnb",current_price:350,price_change_percentage_24h:.9,market_cap:55e6,ath:380},{id:5,market_cap_rank:5,name:"Solana",image:"https://assets.coingecko.com/coins/images/4128/large/solana.png?1548384250",symbol:"sol",current_price:150,price_change_percentage_24h:-3.5,market_cap:2e7,ath:180},{id:6,market_cap_rank:6,name:"XRP",image:"https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",symbol:"xrp",current_price:1.2,price_change_percentage_24h:1,market_cap:3e7,ath:1.5},{id:7,market_cap_rank:7,name:"Polkadot",image:"https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776",symbol:"dot",current_price:30,price_change_percentage_24h:-2,market_cap:4e6,ath:35},{id:8,market_cap_rank:8,name:"Dogecoin",image:"https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",symbol:"doge",current_price:.3,price_change_percentage_24h:2.8,market_cap:2e6,ath:.35},{id:9,market_cap_rank:9,name:"Litecoin",image:"https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580",symbol:"ltc",current_price:150,price_change_percentage_24h:-1,market_cap:12e6,ath:170},{id:10,market_cap_rank:10,name:"Chainlink",image:"https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700",symbol:"link",current_price:25,price_change_percentage_24h:4.5,market_cap:5e6,ath:28}],k=()=>{const[r,s]=t.useState([]),[c,l]=t.useState(""),m=a=>{l(a.target.value)};t.useEffect(()=>{const a=async()=>{try{const o=await(await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false")).json();Array.isArray(o)?s(o):(s(n),console.error("Invalid data format received from the API. Using fallback data."))}catch(i){s(n),console.error("Failed to fetch coins, using fallback data.",i)}};a();const d=setInterval(a,6e4);return()=>clearInterval(d)},[n]);const p=r.filter(a=>a.name.toLowerCase().includes(c.toLowerCase()));return e.jsxs(g.div,{className:"bg-lightGray rounded-md py-10 overflow-y-auto",initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:[.6,-.05,.01,.99]},children:[e.jsx("div",{className:"px-4  flex items-center justify-center text-base font-semibold leading-7 text-white sm:px-6 lg:px-8",children:e.jsx("form",{children:e.jsx("input",{type:"text",onChange:m,placeholder:"Search Crypto...",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"})})}),e.jsxs("table",{className:"mt-6 w-full whitespace-nowrap text-left",children:[e.jsxs("colgroup",{children:[e.jsx("col",{className:"w-1/12"}),e.jsx("col",{className:"w-full sm:w-5/12"}),e.jsx("col",{className:"xl:w-1/12"}),e.jsx("col",{className:"lg:w-1/12"}),e.jsx("col",{className:"lg:w-5/12 2xl:w-1/12"}),e.jsx("col",{className:"lg:w-1/12"}),e.jsx("col",{className:"lg:w-1/12"})]}),e.jsx("thead",{className:"border-b border-white/10 text-sm leading-6 text-white font-sans",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8",children:"#"}),e.jsx("th",{scope:"col",className:"py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8",children:"Coin"}),e.jsx("th",{scope:"col",className:"py-2 pl-0 pr-4 font-semibold sm:table-cell text-right sm:text-left sm:pr-8",children:"Price"}),e.jsx("th",{scope:"col",className:"hidden py-2 pr-4 font-semibold sm:table-cell lg:pr-20 text-right md:text-left",children:"Symbol"}),e.jsx("th",{scope:"col",className:"hidden py-2 pl-0 pr-2 font-semibold md:table-cell text-right 2xl:text-left",children:"24H Change"}),e.jsx("th",{scope:"col",className:"hidden py-2 pl-0 pr-4 text-left font-semibold 2xl:table-cell 2xl:pr-6",children:"Marketcap"}),e.jsx("th",{scope:"col",className:"hidden py-2 pl-0 pr-4 text-right font-semibold 2xl:table-cell 2xl:pr-6",children:"ATH"})]})}),e.jsx("tbody",{className:"divide-y divide-white/5 font-sans",children:p.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 pl-4 pr-8 sm:pl-6 lg:pl-8",children:e.jsx("div",{className:"flex items-center font-mono text-sm leading-6 text-gray-400 justify-end md:justify-start",children:a.market_cap_rank})}),e.jsx("td",{className:"py-4 pl-4 pr-8 sm:pl-6 lg:pl-8",children:e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx("img",{src:a.image,alt:"",className:"h-8 w-8 rounded-full bg-gray-800"}),e.jsx("div",{className:"truncate text-sm font-medium leading-6 text-white",children:a.name})]})}),e.jsx("td",{className:"py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20",children:e.jsx("div",{className:"flex items-center justify-end gap-x-2 sm:justify-start",children:e.jsxs("div",{className:"text-white sm:block",children:[e.jsx("span",{className:"font-bold mr-2",children:"$"}),a.current_price]})})}),e.jsx("td",{className:"hidden py-4 pl-0 pr-4 sm:table-cell",children:e.jsx("div",{className:"flex items-center font-mono text-sm leading-6 text-gray-400 justify-end md:justify-start",children:a.symbol.toUpperCase()})}),e.jsx("td",{className:"hidden py-4 pl-0 pr-2 text-sm leading-6 text-gray-400 md:table-cell",children:a.price_change_percentage_24h>0?e.jsxs("span",{className:"text-green-500 flex items-center justify-end 2xl:justify-start",children:[e.jsx(y,{className:"w-5 h-5 mr-1"}),a.price_change_percentage_24h.toFixed(2),"%"]}):e.jsxs("span",{className:"text-red-500 flex items-center justify-end 2xl:justify-start",children:[e.jsx(_,{className:"w-5 h-5 mr-1"}),a.price_change_percentage_24h.toFixed(2),"%"]})}),e.jsx("td",{className:"hidden py-4 pl-0 pr-4 text-left text-sm leading-6 text-gray-400 2xl:table-cell 2xl:pr-6",children:e.jsx("span",{children:a.market_cap})}),e.jsx("td",{className:"hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 2xl:table-cell 2xl:pr-6",children:e.jsxs("span",{className:"text-green-500",children:[e.jsx("span",{className:"mr-1",children:"$"}),a.ath]})})]},a.id))})]})]})};export{k as default};
