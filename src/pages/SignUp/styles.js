import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    margin: 0 auto;
    padding: 3rem;
    gap: 7rem;
    height: 100vh;

    .logo {
        margin: 0 auto;
    }
    
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

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        width: 100vw;
        padding: 108px;
        align-items: center;

        .logo {
            width: 50%;
            margin: auto;
        }

        .content {
            width: 50%;
            background-color: ${({ theme }) => theme.COLORS.DARK_700};
            border-radius: 16px;
            padding: 64px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 32px;
            height: fit-content;

            h2 {
                font-family: 'Poppins';
                font-size: 3.2rem;
                font-style: normal;
                font-weight: 500;
                line-height: 140%;
                text-align: center;
                margin-bottom: 32px;
            }

            .register-button {
                width: 100%;
            }
        }
    }
`