import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../context/user';
import { Button } from '@mobiscroll/react-lite';
import NewReview from './NewReview';
import EditReview from './EditReview';
import { useNavigate } from 'react-router-dom';

const Destination = ({ destination, setDestinations, destinations }) => {
    const { name, location, image, description, price, id, reviews } = destination
    const { user, setUser, loggedIn } = useContext(UserContext)
    const [viewForm, setViewForm] = useState(false)
    const navigate = useNavigate()
    const handleClick = (e) => {
        setViewForm(true)
    }

    const onDeleteReview = (deletedReview) => {
        const onDestination = destinations.find((destination) => destination.id === deletedReview.destination_id)
        const newDestinationReviews = onDestination.reviews.filter((review) => review.id !== deletedReview.id)
        const updatedDestination = { ...onDestination, reviews: newDestinationReviews }
        const updatedDestinations = destinations.map((destination) => destination.id === updatedDestination.id ? updatedDestination : destination)
        setDestinations(updatedDestinations)
        const userReviewList = updatedDestination.reviews.find((review) => review.user_id === user.id)
        if (!userReviewList) {
            const newUserDestinations = user.uniq_dest.filter((destination) => destination.id !== deletedReview.destination_id)
            setUser({ ...user, uniq_dest: newUserDestinations });
            navigate(`/destinations`)
        }
    }

    const onEditReview = (editedReview) => {
        const onDestination = destinations.find((destination) => destination.id === editedReview.destination_id);
        const updatedDestinationReviews = onDestination.reviews.map((review) => review.id === editedReview.id ? editedReview : review);
        const updatedDestination = { ...onDestination, reviews: updatedDestinationReviews };
        const updatedDestinations = destinations.map((destination) => destination.id === updatedDestination.id ? updatedDestination : destination);
        setDestinations(updatedDestinations);
    }

    const reviewList = reviews.map((review) => {
        if (user) {

            const handleDeleteReview = (deletedReview) => {
                fetch(`/reviews/${deletedReview.id}`, {
                    method: "DELETE",

                }).then(() => {
                    onDeleteReview(review)
                })
            }
            return (
                <div key={review.id}>
                    <p>{review.username} :</p>
                    <p className='reviewList'>Review:   {review.review}</p>
                    <p className='ratings'>Rating:   {review.rating}/5</p>
                    {(user.id === review.user_id) ? (
                        <div> <EditReview onEditReview={onEditReview} id={review.id} review={review} />
                            <Button onClick={() => handleDeleteReview(review)} >Delete Review</Button>
                        </div>
                    )
                        : null}
                </div>
            )
        } else {
            return (
                <div key={review.id}>
                    <p>{review.username} :</p>
                    <p className='reviewList'>Review:   {review.review}</p>
                    <p className='ratings'>Rating:   {review.rating}/5</p>
                </div>)

        }
    })


    if (loggedIn) {
        return (
            <div className='card'>

                <section id="des" className='block des-block'>
                    <Container fluid className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                        <Row>
                            <Col sm={4} md={12}>
                                <div className='holder'>
                                    <Card>
                                        <Card.Img variant="top" src={image} />
                                        <Card.Body>
                                            <Card.Title><h3>{name}</h3></Card.Title>
                                            {description}

                                            <Card.Footer className='location'> <span className="bi bi-geo-alt-fill"></span> {location}</Card.Footer>
                                            <Card.Footer>$ {price}</Card.Footer>
                                            <hr />
                                            <h3>Reviews:</h3>
                                            {reviewList}
                                            {viewForm ?
                                                <NewReview destination={destination} />
                                                : <Link to={`/destinations/${id}/reviews`}><Button onClick={handleClick}>Add your review</Button></Link>}
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>

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
                                        <Card.Title> <h3>{name}</h3></Card.Title>
                                        {description}
                                        <Card.Footer className='location'> <span className="bi bi-geo-alt-fill"></span> {location}  </Card.Footer>
                                        $ {price}
                                        <hr />
                                        <h3>Reviews:</h3>
                                        {reviewList}
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
