import styled from 'styled-components';

export const Navbar = styled.nav`
    background: #000000;
    display: block;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    width: -webkit-fill-available;
    z-index: 3;

    ${props => !props.showMenu} {
        display: grid !important;
        padding: 30px;

        a{
            display: inline-block !important;
        }
    }

    @media screen and (max-width: 768px){
        display: inline-flex;
    };
`;

export const Anchor = styled.a`
    color: #ffffff;
    display: inline-block;
    font: bold 1.1em Roboto Slab;
    margin: 0 1rem;
    padding: 15px 16px;
    text-decoration: none;
    text-transform: uppercase;

    &.active,
    &:hover{
        border-radius: 1em 2em;
    }

    &.active {
        background-color: #5383d3;
        color: #ffffff;
    }

    &:hover{
        background: #5383d3;
    }

    @media screen and (max-width: 768px){
        display: block;
        padding: 12px 16px;
        text-align: left;

        &:not(:first-child) {
            display: none;
        }

        &.icon {
            display: block;
            float: right;
            position: absolute;
            right: 0;
            top: 0;
        }

        &.active{
            border-radius: 1em 2em;
        }
    
    }
`;

export const Icon = styled.i`
    color: #ffffff;
    display: block;
    font: bold 3em monospace;
    margin: 0 1rem;
    padding: 0px;
`;


export const Logo = styled.span`
    display: none;

    @media screen and (max-width: 768px){
        color: #ffffff;
        display: block;
        font: bold 3em monospace;
        margin: 0 1rem;
        padding: 0px;
    }
`;
