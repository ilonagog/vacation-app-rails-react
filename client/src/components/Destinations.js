import { Button } from "@mobiscroll/react-lite";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddDestinationForm from "./AddDestinationForm";
import Destination from "./Destination";
import ScrollToTop from "react-scroll-to-top";
const Destinations = ({ destinations, setDestinations, addDestination }) => {
  const [viewForm, setViewForm] = useState(false);
  const destinationsList = destinations.map((destination) => {
    return (
      <Destination
        key={destination.id}
        destination={destination}
        setDestinations={setDestinations}
        destinations={destinations}
      />
    );
  });

  const handleClick = (e) => {
    setViewForm(true);
  };

  return (
    <div>
      <Link to="/destinations/new">
        {" "}
        <Button onClick={() => handleClick}>Add New Property</Button>
      </Link>
      {viewForm ? (
        <AddDestinationForm
          setViewForm={setViewForm}
          addDestination={addDestination}
          destinations={destinations}
          setDestinations={setDestinations}
        />
      ) : (
        <div>
          <ul>{destinationsList}</ul>
        </div>
      )}
      <ScrollToTop smooth />
    </div>
  );
};

export default Destinations;
