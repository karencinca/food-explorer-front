import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_300};
    max-width: 210px;
    min-width: 210px;
    min-height: 292px;
    position: relative;
    padding: 24px;
    margin-bottom: 24px;
    margin-right: 16px;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 8px;

    .fav-heart, .edit-pencil {
        position: absolute;
        right: 16px;
        top: 16px;
        cursor: pointer;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;

        > h3 {
            
        }
        

        > span {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 100%;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }

        .stepper-button-wrapper {
            gap: 16px;
            text-align: center;

            > button {
                max-width: 162px;
                height: 32px;
                padding: 12px 24px;
                margin-top: 16px;
            }
        }

    }

    @media (min-width: 1024px) {
        height: 462px;
        max-width: 304px;
        padding: 24px;
        gap: 15px;

        .price {
            font-size: 3.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
        }

        .stepper-button-wrapper {
            display: flex;
            align-items: center;
            flex-direction: row;
            gap: 16px;

            > .button {
                max-width: 92px;
                height: 48px;
                margin-top: 0;
            }
        }
        
    }
`

export const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    cursor: pointer;

    > img {
        width: 88px;
        height: 88px;
    }

    > h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        max-width: 200px;
        text-overflow: ellipsis; 
        }

    > p {
        text-align: center;
        font-family: Roboto;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        white-space: nowrap;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;              
    }

    @media (min-width: 1024px) {
        gap: 15px;

        img {
            width: 176px;
            height: 176px;
        }

        h3 {
            font-size: 2.4rem;
            font-style: normal;
            font-weight: 700;
            line-height: 140%;
        }
    }
`
