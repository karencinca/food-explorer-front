import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 14px;

        > button {
            background: transparent;
            border: none;
        }

        > span {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 100%;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
        }
            
`