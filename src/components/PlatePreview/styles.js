import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_300};
    min-width: 210px;
    height: 292px;
    position: relative;
    padding: 24px;
    margin-bottom: 24px;
    margin-right: 16px;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 8px;

    > img {
        position: absolute;
        right: 16px;
        top: 16px;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        
        > img {
            width: 88px;
            height: 88px;
        }

        > h3 {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 2.4rem;
            text-align: center;
        }

        > span {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 100%;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }
`