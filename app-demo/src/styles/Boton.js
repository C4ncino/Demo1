import styled from 'styled-components';

const Boton = styled.button`
    color: #0099CC;
    text-align: center;
    padding: 6px;
    font-size: 16px;
    background: ${props => props.color ? "green" : "transparent"};
    border: 2px solid #0099CC;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background: black;
        color: white;
    }
    
`;

export default Boton;