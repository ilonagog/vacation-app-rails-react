import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NewReview from './NewReview';
import { UserContext } from '../context/user';



const Destination = ({ destination }) => {
    const { name, location, image, description, price, id } = destination
    const { loggedIn } = useContext(UserContext)
    // console.log(destination)
    return (
        <section id="blog" className='block blog-block'>
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
                                    <Card.Footer> <span class="bi bi-geo-alt-fill"></span>    {location}</Card.Footer>
                                    <Card.Footer>$ {price}</Card.Footer>
                                    <Link to="/login">Login and leave your review</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <ul>
                <Link to={`/destination/${id}`}> <h3>{name}</h3></Link>
                <p>{location}</p>
                <img src={image} alt={image} />
                <p>{description}</p>
                <p>{price}</p>
                <Link to="/login">Login and leave your review</Link>
            </ul>  */}
        </section>

    )
}

export default Destination
