import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border-radius: 10px;

    > input {
        width: 100%;
        height: 48px;
        padding: 16px;

        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 14px;
        border: none;
        outline: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

    }

    > .icon-container {
        margin-left: 10px;
        display: flex;
        align-items: center;
    }
`