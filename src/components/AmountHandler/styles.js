import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 14px;

        > span {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 100%;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
        }
    
        .icon {
            cursor: pointer;
            transition: .3s;
        }
    
        .icon:hover {
            transform: scale(1.1);
        }    
`