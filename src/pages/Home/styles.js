import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    
    .emptypage {
        text-align: center;
        margin: 8rem 0 10rem 0;
        font-size: 1.5rem;
        font-weight: 400;
    }

    @media (min-width: 1024px) {
        .plates {
            margin-left: 110px;
            margin-right: 124px;
        }
        
        .emptypage {
            font-size: 2rem;
        }

    }
`