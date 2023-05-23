import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 11px;

    > span {
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-style: normal;
        font-weight: 700;
        font-size: 2.8rem;
        line-height: 4.4rem;
    }
`