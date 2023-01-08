import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';


export default function DashContent() {
    const navigate = useNavigate();

    return (
        <div className='App'>
            <div>
                <Card inverse>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/900/270?grayscale"
                        style={{
                            height: 270
                        }}
                        width="100%"
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h5">
                            <h1>Harvard University</h1>
                        </CardTitle>
                        <CardText>
                            Celebrating a century and a half of groundbreaking work in the arts, sciences, and everything in between
                        </CardText>
                    </CardImgOverlay>
                </Card>
            </div>
            <div className='App'>
                <br></br>
                <Row>
                    <Col sm="5">
                        <Card body>
                            <CardTitle tag="h5">
                                Teachers Data
                            </CardTitle>
                            <CardText>
                                You can do the CRUD operations with the Teachers data.
                            </CardText>
                            <Button color='primary' onClick={() => navigate('/Teacher')}>
                                Check Teachers details
                            </Button>
                        </Card>
                        <Card body>
                            <CardTitle tag="h5">
                                Students Data
                            </CardTitle>
                            <CardText>
                                You can do the CRUD operations with the Students data.
                            </CardText>
                            <Button color='primary' onClick={() => navigate('/Profile')}>
                                Check Students details
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
