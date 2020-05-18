import React,{useEffect,useState} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button
} from 'react-bootstrap';
import DataTest from './DataTest.json';
import {
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from 'recharts';

const sortedByTime = DataTest.slice(0,DataTest.length)
sortedByTime.sort(((a, b) => {
    if (a.timestamp < b.timestamp) {
        return -1;
    }
    if (a.timestamp > b.timestamp) {
        return 1;
    }

    // a.s must be equal
    return 0;
}));

const sortedByValueUp = DataTest.slice(0,DataTest.length)
sortedByValueUp.sort(((a, b) => {
    return parseFloat(a.upload_speed) - parseFloat(b.upload_speed);
}));

const sortedByValueDown = DataTest.slice(0,DataTest.length)
sortedByValueDown.sort(((a, b) => {
    return parseFloat(a.download_speed) - parseFloat(b.download_speed);
}));

const data = 
[
    
    {
        "_id": "5ebe90e289d6ds53ace352bc",
        "device_id": "5ebe90ksd8ca1228f4c55db5",
        "isManual": true,
        "upload_speed": "300.6",
        "download_speed": "120.95",
        "dns_lookup": 190,
        "phone": "+234 (998) 574-3338",
        "location": {
            "latitude": "8.5453",
            "longitude": "7.9787"
        }
    },
    {
        "_id": "5ebe90e5499d6a953ace352bc",
        "device_id": "5ehfk90e2d8ca1228f4c55db5",
        "isManual": false,
        "upload_speed": "11.6",
        "download_speed": "9.95",
        "dns_lookup": 170,
        "phone": "+234 (998) 574-3338",
        "location": {
            "latitude": "8.5453",
            "longitude": "7.9787"
        }
    },
    {
        "_id": "5ebe90e289d6afgf3ace352bc",
        "device_id": "5ebe90e2d304a1228f4c55db5",
        "isManual": true,
        "upload_speed": "13.6",
        "download_speed": "20.95",
        "dns_lookup": 1700,
        "phone": "+234 (998) 574-3338",
        "location": {
            "latitude": "8.5453",
            "longitude": "7.9787"
        }
    },
    {
        "_id": "5ebe90e289d6akdg3ace352bc",
        "device_id": "5ebe90e2d032oa1228f4c55db5",
        "isManual": false,
        "upload_speed": "17.6",
        "download_speed": "18.95",
        "dns_lookup": 1790,
        "phone": "+234 (998) 574-3338",
        "location": {
            "latitude": "8.5453",
            "longitude": "7.9787"
        }
    },
];

const Recharts2 =(props)=> {
    const [transDummy,setDummy] = useState(data); 
    const [view,setView]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            const tempData = sortedByTime.map(
                el=>{
                    return(
                        {
                            x: (new Date(el.timestamp)).toLocaleString(),
                            download: parseFloat(el.download_speed),
                            upload:  parseFloat(el.upload_speed)
                        }
                    )
                }
            );
            setDummy(tempData);
        },2000);
    },[]);

    const handleViewSwitch=(n)=>{
        setView(n);
    }
    return(
        <div  className="vis-chart-cust">
            <div className="button-span">
                <Button variant="secondary" onClick={()=>handleViewSwitch(1)}>Upload</Button>{' '} 
                <Button variant="info" onClick={()=>handleViewSwitch(2)}>Download</Button>{' '}
                <Button variant="light" onClick={()=>handleViewSwitch(0)}>Both</Button>
            </div>
            <AreaChart  data={transDummy} width={1000} height={300} >
                {(view === 2 || view === 0) && <Area type="monotone" dataKey="download" stroke="#8884d8"/>}
                {(view === 1 || view === 0) && <Area type="monotone" dataKey="upload" stroke="#000000" fill="#000000" opacity={0.6}/>}
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="x" tick={null} label={{ value: view===0?'Avg. Download & Upload':view===1?'Avg. Upload':'Avg. Download', angle: 0, position: 'insideBottomRight' }}/>
                <YAxis label={{ value: 'Mbps', angle: -90, position: 'insideLeft' }}
                type="number" 
                // domain={[0, 25]} 
                minTickGap={5}
                // interval={5}
                allowDataOverflow={true}
                />
                <Tooltip/>
            </AreaChart>
        </div>
    )
};

export default Recharts2;