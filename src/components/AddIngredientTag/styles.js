import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;
    height: 32px;
    padding: 10px 16px;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    border-radius: 10px;
    padding: 16px;

    > button {
        border: none;
        background: none;
    }
    
    svg {
        font-size: 8px;
    }

    > input {
        height: 32px;
        max-width: 68px;

        color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`