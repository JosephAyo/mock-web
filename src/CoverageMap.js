import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";
import locations from './locations.json';

const geoUrl ="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const marks = locations.map(el=>{
    return(
        {
            markerOffset: 10,
            name: el.name,
            coordinates:[parseFloat(el.location.longitude),parseFloat(el.location.latitude)]
        }
    )
});
// const markers = [
//     {
//         markerOffset: 10,
//         name: "Lagos",
//         coordinates: [3.3792, 6.5244]
//     },{ 
//         markerOffset: 10, 
//         name: "Abuja", 
//         coordinates: [7.3986, 9.0765] 
//     },{ 
//         markerOffset: 10, 
//         name: "Rivers", 
//         coordinates: [6.9112, 4.8396] 
//     },{ 
//         markerOffset: 10, 
//         name: "9.4457, 6.3466", 
//         coordinates: [9.4457, 6.3466] 
//     }
// ];

const MapChart = () => {    
    console.log("marks",marks);
    return (
        <ComposableMap
        className="map-cust"
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
            rotate: [-8, -10, 0],
            scale: 2500
        }}
        >
        <Geographies geography={geoUrl}>
            {({ geographies }) =>
            geographies
                .filter(d => d.properties.ISO_A3 === "NGA")
                .map(geo => (
                <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#A9DBBC"
                    stroke="#D6D6DA"
                />
                ))
            }
        </Geographies>
        {marks.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
            <g
                fill="none"
                stroke="#FF5533"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -24)"
            >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D",fontSize:10 }}
            >
                {name}
            </text>
            </Marker>
        ))}
        </ComposableMap>
    );
};

export default MapChart;
