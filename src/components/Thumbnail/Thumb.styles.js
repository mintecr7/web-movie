import styled from 'styled-components'

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.4s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5sec;
    
    :hover{
        opacity: 0.8;
    }

    @keyframs animateThum{
        from {
            opacity: 0;
        }
        to{
            ocpacity: 1;
        }
    }
`;