import styled from 'styled-components'

export const Container = styled.div`
    height: 120px;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 2px;
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 44px 16px 20px; 

    .macarons-image {
        position: absolute;
        bottom: 1%;
        left: -30px;

    }

    .text {
        position: absolute;
        max-width: 500px;
        left: 35%;
        margin-top: 5%;
        
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

    @media (min-width: 1024px) {
        max-width: 90%;
        min-height: 260px;
        margin-top: 164px;
        margin-left: 124px;
        margin-right: 124px;
        margin-bottom: 49px;

        .macarons-image {
            bottom: -13px;
            left: -30px;
        }

        .text {
            text-align: left;
            top: 30%;
            left: 50%;
            margin: auto 5px;
        }

        .text h2 {
            font-size: 4rem;
            font-style: normal;
            font-weight: 500;
        }

        .text p {
            font-size: 1.6rem;
            line-height: 100%;
        }
    }
`