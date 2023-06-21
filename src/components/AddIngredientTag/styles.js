import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: fit-content;
    height: 56px;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none"};

    border-radius: 10px;
    padding: 16px;

    svg {
        font-size: 24px;
    }

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        height: 56px;
        width: fit-content;

        padding: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`