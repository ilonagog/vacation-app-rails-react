import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mobiscroll/react-lite";
import { useNavigate } from "react-router-dom";

const NewReview = ({ destinations, setDestinations }) => {
  const { user, setUser } = useContext(UserContext);
  let { id } = useParams();
  id = parseInt(id);
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  let destination = destinations.find((uniq_dest) => {
    return uniq_dest.id === id;
  });

  const [input, setInput] = useState({
    review: "",
    rating: "",
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newReview = { ...input };
    fetch(`/destinations/${id}/reviews`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((newReview) => {
          const destinationFilter = user.uniq_dest.find(
            (destination) => destination.id === newReview.destination_id
          );
          if (!destinationFilter) {
            setUser({
              ...user,
              uniq_dest: [...user.uniq_dest, destination],
            });
          }
          const updatedDestinations = destinations.map((d) => {
            if (d.id === id) {
              return {
                ...d,
                reviews: [...d.reviews, newReview],
              };
            } else {
              return d;
            }
          });
          setDestinations(updatedDestinations);
          setInput({
            review: "",
            rating: "",
          });
          navigate("/destinations");
        });
      } else {
        resp.json().then((err) => {
          if (err.errors) {
            setErrors(Object.values(err.errors));
          } else {
            setErrors([err.error]);
          }
        });
      }
    });
  }

  return (
    <div>
      <Button>
        <Link to="/destinations">Back to our destinations</Link>
      </Button>
      <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
        <div className="mbsc-row">
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <mobiscroll.Input
              className="large-input review-input" // Add a custom class "review-input"
              inputStyle="box"
              labelStyle="floating"
              placeholder="Write your review"
              name="review"
              value={input.review}
              onChange={handleChange}
            >
              Review:
            </mobiscroll.Input>
          </div>
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <mobiscroll.Input
              inputStyle="box"
              labelStyle="floating"
              placeholder="Rate your trip"
              name="rating"
              value={input.rating}
              onChange={handleChange}
            >
              Rate:
            </mobiscroll.Input>
          </div>
          <mobiscroll.Button type="submit">Submit</mobiscroll.Button>
        </div>
      </mobiscroll.Form>
      {errors.map((err) => (
        <li style={{ color: "black" }} key={err}>
          {err}
        </li>
      ))}
    </div>
  );
};

export default NewReview;
