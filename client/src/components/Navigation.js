import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Navigation = () => {
    return (
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>

            <Menu>

            </Menu>
        </Nav>
    )
}

export default Navigation

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
    font-family: Arial;
  }
  a:hover {
    color: pink;
  }
  ul {
    list-style: none;
  }
`;