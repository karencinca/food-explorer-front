import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    width: 100%;
    padding: 56px 28px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        background: none;
        border: none;
    }

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
`