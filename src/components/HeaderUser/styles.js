import styled from 'styled-components'

export const Container = styled.header`
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    height: 114px;
    padding: 56px 28px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        background: none;
        border: none;
    }
`