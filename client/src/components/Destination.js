import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../context/user';
import { Button } from '@mobiscroll/react-lite';
import NewReview from './NewReview';



const Destination = ({ destination }) => {
    const { name, location, image, description, price, id, reviews } = destination
    const { loggedIn } = useContext(UserContext)
    const [viewForm, setViewForm] = useState(false)
    const handleClick = (e) => {
        setViewForm(true)
    }
    const reviewList = reviews.map((review) => {
        return (
            <div key={review.id}>
                <p>{review.username}</p>
                <p className='reviewList'>Review:  {review.review}

                </p>

                <p className='ratings'>Rating:  {review.rating}/5</p>
            </div>
        )
    })


    if (loggedIn) {
        return (
            <section id="des" className='block des-block'>
                <Container fluid>
                    <Row>
                        <Col sm={4} md={12}>
                            <div className='holder'>
                                <Card>
                                    <Card.Img variant="top" src={image} />
                                    <Card.Body>
                                        <Card.Title><Link to={`/destination/${id}`}> <h3>{name}</h3></Link></Card.Title>
                                        <Card.Text>{description}
                                        </Card.Text>
                                        <Card.Footer> <span className="bi bi-geo-alt-fill"></span> {location}</Card.Footer>
                                        <Card.Footer>$ {price}</Card.Footer>
                                        <hr />
                                        <Card.Text>{reviewList}</Card.Text>
                                        {viewForm ?
                                            <NewReview />
                                            : <Link to={`/destination/${id}/reviews`}><Button onClick={handleClick}>Add your review</Button></Link>}
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        )
    } else {
        return (
            <section id="des" className='block des-block'>
                <Container fluid>
                    <Row>
                        <Col sm={4} md={12}>
                            <div className='holder'>
                                <Card>
                                    <Card.Img variant="top" src={image} />
                                    <Card.Body>
                                        <Card.Title><Link to={`/destination/${id}`}> <h3>{name}</h3></Link></Card.Title>
                                        <Card.Text>
                                            {description}
                                        </Card.Text>
                                        <Card.Footer> <span className="bi bi-geo-alt-fill"></span> {location}  </Card.Footer>
                                        <Card.Footer>$ {price}</Card.Footer>
                                        <hr />
                                        <Card.Text>{reviewList}</Card.Text>
                                        <Link className="underline" to="/login">Login and leave your review</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}


export default Destination
