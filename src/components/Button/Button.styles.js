import styled from 'styled-components'


export const Wrapper = styled.div`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 55px;
    border-radius: 30px;
    
    border: 0;
    
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;
    text-align: center;

    :hover{
        opacity: 0.7;
    }
    p{
        padding : 10px;
        color: var(--white);
        font-size: var(--fontBig);
    }

`;
