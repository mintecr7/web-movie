import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;
    background: var(--darkGrey);

    h1{
        color: var(--white);
        margin: 0 auto;
        @media screen and (max-width: 720px){
            font-size: var(--fontBig);po0
        }
    }
`;


export const Content = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 2rem;
`;

