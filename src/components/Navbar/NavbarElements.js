import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  background-color: black;
  padding: 2em;
  `

  export const NavContainer = styled.div`
    max-width: 1050px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 550px) {
        flex-direction: row;
    }
  `

export const NavLink = styled(Link)`
    color: ${({color}) => color ? color : 'white'};
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 0.5em 0;

    &:hover {
        color: lightgrey;
    }

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }

    @media screen and (min-width: 550px) {
        padding: 0 0.5em;

        &:first-child {
        padding-left: 0;
        }

        &:last-child {
            padding-right: 0;
        }
    }


`