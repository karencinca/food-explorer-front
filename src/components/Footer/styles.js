import styled from 'styled-components'

export const Container = styled.footer`
    grid-area: footer;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    width: 100%;
    padding: 29px 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
` 