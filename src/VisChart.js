import React,{useEffect,useState} from 'react';
import './App.scss';
import '../node_modules/react-vis/dist/style.css';
import userdata from './userdata.json';
import {
    XYPlot,
    XAxis,
    YAxis,
    LineMarkSeries,
    // MarkSeries,
    VerticalGridLines,
    HorizontalGridLines
} from 'react-vis';

const VisChart =(props)=> {
    const [transDummy,setDummy] = useState(); 
    useEffect(()=>{
        const tempData = userdata.map(
            el=>{
                return(
                    {
                        x: (new Date(el.time_created)).toLocaleString(),
                        y: el.dataKPI1
                    }
                )
            }
        );
        setDummy(tempData);
    },[]);
    // const data = [
    //     {x: 0, y: 8},
    //     {x: 1, y: 5},
    //     {x: 2, y: 4},
    //     {x: 3, y: 9},
    //     {x: 4, y: 1},
    //     {x: 5, y: 7},
    //     {x: 6, y: 6},
    //     {x: 7, y: 3},
    //     {x: 8, y: 2},
    //     {x: 9, y: 0}
    // ];
    
    const onTouchStart=()=>{
        console.log("ontouchstart");
    };

    return (
        <div className="vis-chart-cust">
            < XYPlot 
            xType="ordinal"
            height = {
                500
            }
            width = {
                1000
            }
            >
            {/* < MarkSeries data = {
                [{
                    x: (new Date(userdata[0].time_created)).toLocaleString(),
                    y: 0
                }]
            }
            style = {
                {
                    display: 'none'
                }
            }
            /> */}
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                < LineMarkSeries data = {
                    transDummy
                }
                onTouchStart = {
                    onTouchStart
                }
                className = "VisChart"
                color="rgb(22, 4, 81)"
                opacity={0.3}
                / >
            </XYPlot>
        </div>
    );
}

export default VisChart;