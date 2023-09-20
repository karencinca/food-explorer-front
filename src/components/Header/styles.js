import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    width: 100%;
    padding: 56px 28px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .cart-wrapper {
        position: relative;
        padding-top: 10px;
        padding-right: 10px;
    }
    
    .cart-number {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    @media (min-width: 1024px) {
        gap: 5rem;
        height: 104px;
        padding-left: 124px;
        padding-right: 124px;
        padding-top: 30px;
    }

    .inputbar {
        width: 100%;
    }

    .logo-title {
        width: 800px;
    }

    .orders-btn {
        padding: auto 20px;
        font-size: 14px;
        max-width: 220px;
    }

    .sign-out {
        width: 32px;
        cursor: pointer;
        background: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`