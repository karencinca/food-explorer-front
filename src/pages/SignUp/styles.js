import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    margin: 0 auto;
    max-width: 54rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 7rem;
    
    .form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    
    > .input-wrapper {
        width: 100%;
    }

    label {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-style: normal;
        font-weight: 400;
    }
`