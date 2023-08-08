import React from 'react'
import Destination from './Destination'
import styled from 'styled-components'

const Destinations = ({ destinations }) => {
    return (

        <div>
            <CardContainer>
                {destinations.map(destination => <Destination key={destination.id} destination={destination} />)}
            </CardContainer>

        </div>
    )
}

export default Destinations

const CardContainer = styled.ul`
    display:flex;
    flex-direction:column;

`
