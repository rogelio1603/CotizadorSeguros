import React from 'react';
import styled from '@emotion/styled';

//! Declaración de un styled component.
// Se declara el nombre del componente, se asigna el styled y despues del punto se pone el nombre del elemento html que deseas aplicar los estilos.
const ContenedorHeader = styled.header`
    background-color: #25C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}
 
export default Header;