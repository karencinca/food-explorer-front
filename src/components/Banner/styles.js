import styled from 'styled-components'

export const Container = styled.div`
    width: 90vw;
    height: 120px;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 2px;
    position: relative;
    margin: 44px auto; 

    .image {
        position: absolute;
        bottom: -3%;
        left: -30px;

    }

    .text {
        position: absolute;
        max-width: 300px;
        left: 35%;
        bottom: 15%;
        
        > h2 {
            font-weight: 600;
            font-size: 1.8rem;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        > p {
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }
`