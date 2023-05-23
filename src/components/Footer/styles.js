import styled from 'styled-components'

export const Container = styled.footer`
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    height: 77px;
    width: 100%;
    padding: 29px 27px;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
` 