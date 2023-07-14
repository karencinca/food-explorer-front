import styled from 'styled-components'

export const Container = styled.footer`
    grid-area: footer;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    width: 100%;
    padding: 29px 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1024px) {
        padding-left: 124px;
        padding-right: 124px;
    }
` 