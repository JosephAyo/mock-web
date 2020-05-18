import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast  } from 'react-bootstrap';


const Confirmation =(props)=>{
    return(
        <Toast onClose={props.onClose}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Notification</strong>
                    <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, there! Action acknowledged.</Toast.Body>
        </Toast>
    )
};

export default Confirmation;