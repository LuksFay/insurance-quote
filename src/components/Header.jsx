import React from 'react'
//npm i @emotion/styled @emotion/react
//librerias para crear styled components :D 
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header `
    background-color: #26c6da;
    color: #fff;
    font-weight:bold;
    padding: 10px;
`;

const TextoHeader = styled.h1 `
    font-size: 2rem;
    margin: 0;
    font-family: 'slabo 27px', serif;
    text-align: center;
`;
const Header = ({titulo}) => {
    return (
       <ContenedorHeader>
           <TextoHeader>{titulo}</TextoHeader>
       </ContenedorHeader>
    )
}
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header;