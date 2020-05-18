import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button,Row,Col } from 'react-bootstrap';


const DraftCard =(props)=>{
    return(
        <Row className="card-list">
        {props.drafts.map(data=>{
            return(
            <Col xs={12} sm={6} lg={3}  key={data._id}>
            <Card className="h-auto">
                <Card.Img variant="top" src={data.image_url} className="card-img"/>
                <Card.Body className="d-flex flex-column">
                    <div className="mb-2 justify-content-between d-flex">
                        <Card.Title>{data.sender_name}</Card.Title>
                    </div>
                    <Card.Text>
                        Message: {data.message}
                    </Card.Text>
                    <Button className="mt-5" variant="success" onClick={props.send}>Send Draft</Button>
                </Card.Body>
            </Card>
            </Col>
            )
        })}
        </Row>
    )
};

export default DraftCard;