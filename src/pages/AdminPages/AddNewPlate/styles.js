import styled from 'styled-components'

export const Container = styled.div`
    .content {
        padding: 10px 32px;

        > .back-btn {
            display: flex;
            align-items: center;
            gap: 10px;

            > img {
                height: 15px;
                width: 8px;
            }

            > a {
                font-weight: 500;
                font-size: 1.6rem;
                line-height: 140%;
            }
        }
    }

    h2 {
        font-size: 2rem;
        line-height: 140%;
        font-weight: 400;
        margin: 24px auto;
    }

    .input-wrapper {
        font-family: 'Roboto';
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
    }

    input[type='file'] {
        display: none;

    }

    #image-file  {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    #image-file, .select-wrapper select, .ingredients-wrapper, textarea  {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        padding: 1.6rem;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        border-radius: 10px;
        border: none;
    }

    .select-wrapper, .ingredients-wrapper {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 10px;
    }
    
    .select-wrapper select {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        line-height: 160%;
    }

    .ingredients-wrapper {
        display: flex;
        flex-wrap: wrap;
        height: fit-content;
    }

    #description {
        height: 172px;
        padding: 14px;
        margin-bottom: 24px;
    }

    #category-input, #price-input, #description-input {
        margin-top: 16px;
    }

    .save-button {
        margin-bottom: 50px;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

    footer {
        bottom: 0;
    }
`