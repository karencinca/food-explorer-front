import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    
    .emptypage {
        text-align: center;
        margin: 8rem 0 10rem 0;
        font-size: 1.5rem;
        font-weight: 400;
    }

    .loader-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
    }

    .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: flex;
        animation: rotation 1s linear infinite;
        text-align: center;
    }

        @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
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