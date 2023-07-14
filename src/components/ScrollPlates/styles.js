import styled from 'styled-components'

export const Container = styled.div`
    margin-left: 15px;
    margin-top: 20px;
    
    > .cards {
        display: flex;
        flex-direction: row;
        overflow: auto;
    }
    
    > h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-bottom: 24px;
    }

    @media (min-width: 1024px) {
        margin-top: 40px;

        h2 {
            font-size: 3.2rem;
        }
    }
`