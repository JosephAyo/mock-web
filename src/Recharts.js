import React,{useEffect,useState} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card,Button,Row,Col } from 'react-bootstrap';
import userdata from './userdata.json';
import {
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    BarChart,
    Legend
} from 'recharts';
const data = 
[
    {
        name: 'SOLAB Bulk Sms',
        download: 1.73,
        upload:2.45,
        pv: 2400,
        amt: 2400
    },{
        name: 'JoeBee',
        download: 3.17,
        upload:0.45,
        pv: 2400,
        amt: 2400
    },{
        name: 'Admiral Ackbar',
        download: 2.62,
        upload:2.05,
        pv: 2400,
        amt: 2400
    },{
        name: 'Boe',
        download: 5.31,
        upload:4.45,
        pv: 2400,
        amt: 2400
    },{
        name: 'Looe',
        download: 2.84,
        upload:1.51,
        pv: 2400,
        amt: 2400
    },{
        name: 'Plois',
        download: 1.19,
        upload:2.00,
        pv: 2400,
        amt: 2400
    }
];

const Recharts =(props)=> {
    const [transDummy,setDummy] = useState(data); 
    useEffect(()=>{
        setTimeout(()=>{
            const tempData = userdata.map(
                el=>{
                    return(
                        {
                            x: (new Date(el.time_created)).toLocaleString(),
                            download: el.dataKPI1,
                            upload:el.dataKPI2,
                            name:el.sender_name,
                            pv: 2400,
                            amt: 2400
                        }
                    )
                }
            );
            setDummy(tempData);
        },2000);
    },[]);
    return(
        <div  className="vis-chart-cust">
            <AreaChart width={1000} height={300} data={transDummy}>
                <Area type="monotone" dataKey="download" stroke="#8884d8"/>
                <Area type="monotone" dataKey="upload" stroke="#000000" fill="#000000" opacity={0.6}/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="x" tick={null} label={{ value: 'Avg Download', angle: 0, position: 'insideBottomRight' }}/>
                <YAxis label={{ value: 'Mbps', angle: -90, position: 'insideLeft' }} />
                <Tooltip/>
            </AreaChart>
            <BarChart width={1000} height={300} data={transDummy}>
                <Tooltip/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Legend width={100} wrapperStyle={{ top: 40, right: 5, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '15px' }} />
                <Bar dataKey="download" barSize={30} fill="#8884d8"/>
            </BarChart>
        </div>
    )
};

export default Recharts;