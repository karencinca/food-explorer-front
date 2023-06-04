import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    gap: 8px;
    border: none;
    font-size: 1.4rem;
    width: 100%;
`