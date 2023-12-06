import{j as e,u as t}from"./index-InmM0elY.js";import{c as i,T as a,D as o,P as n}from"./DataGrid-7u1dQNpn.js";import{m as s}from"./motion-raHxfDQf.js";import{M as d}from"./MapPinIcon-fIEEsM10.js";import{T as l}from"./TrashIcon-nNj9H9d_.js";import{C as m,X as c}from"./XCircleIcon-aVx4CWq4.js";import"./index-LXQnk7Df.js";import"./toPropertyKey-dIx3h4Pn.js";const h=i({palette:{mode:"dark"}}),u=[{field:"id",headerName:"ID",width:90},{field:"img",headerName:"Avatar",width:100,renderCell:r=>e.jsx("img",{src:r.row.img||"/noavatar.png",alt:"",className:"rounded-full w-10 h-10"})},{field:"firstName",type:"string",headerName:"First name",width:150,editable:!0},{field:"lastName",type:"string",headerName:"Last name",width:150,editable:!0},{field:"email",type:"string",headerName:"Email",width:200,editable:!0},{field:"phone",type:"string",headerName:"Phone",width:200,editable:!0},{field:"position",headerName:"Position",width:150,type:"string",editable:!0},{field:"location",headerName:"Location",width:200,renderCell:r=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{className:"w-5 h-5 mr-2 text-gray-500"}),r.row.location]}),editable:!0},{field:"hireData",headerName:"Hire Date",width:200,type:"string",editable:!0},{field:"earnings",headerName:"Earnings",width:200,type:"string",renderCell:r=>e.jsxs("div",{className:`flex items-center ${r.row.earnings>=0?"text-green-500":"text-red-500"}`,children:[r.row.earnings>=0?"+":"-"," $",Math.abs(r.row.earnings)]}),editable:!0},{field:"actions",headerName:"Actions",width:120,renderCell:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(n,{className:"w-5 h-5 text-blue-500 cursor-pointer"}),e.jsx(l,{className:"w-5 h-5 text-orange-500 cursor-pointer"})]})},{field:"verified",headerName:"Verified",width:150,type:"boolean",renderCell:r=>e.jsx("div",{className:"flex items-center",children:r.row.verified?e.jsx(m,{className:"w-5 h-5 text-green-500"}):e.jsx(c,{className:"w-5 h-5 text-red-500"})})}],j=()=>e.jsx(a,{theme:h,children:e.jsx(s.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:[.6,-.05,.01,.99]},children:e.jsx(o,{rows:t,columns:[...u],initialState:{pagination:{paginationModel:{pageSize:20}}},pageSizeOptions:[5],checkboxSelection:!0,disableRowSelectionOnClick:!0,disableColumnFilter:!0,disableDensitySelector:!0,disableColumnSelector:!0,sx:{border:"none","& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-columnHeaders":{backgroundColor:"#6270ec",color:"#fff",borderBottom:"none"},"& .MuiDataGrid-virtualScroller":{backgroundColor:"#28272e",color:"#fff"},"& .MuiDataGrid-footerContainer":{backgroundColor:"#6270ec"}}})})});export{j as default};
