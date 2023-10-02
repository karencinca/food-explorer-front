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

            > a, img {
                font-weight: 500;
                font-size: 1.6rem;
                line-height: 140%;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }
        }
    }

    h2 {
        font-size: 2rem;
        line-height: 140%;
        font-weight: 400;
        margin: 24px auto;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
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
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    #image-file, select, textarea  {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        padding: 16px;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        border-radius: 10px;
        border: none;
    }

    .ingredients-container {
        margin-top: 16px;
    }

    select, .ingredients-wrapper {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 10px;
    }
    
    select {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        line-height: 160%;
    }

    .ingredients-wrapper {
        height: 48px;
        display: flex;
        flex-wrap: wrap;
        height: fit-content;
        align-items: center;
        padding: 8px;
        gap: 8px;
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
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

    footer {
        bottom: 0;
    }

    @media (min-width: 1024px) {
        .content {
            padding-left: 124px;
            padding-right: 124px;

            .back-btn {
                margin-top: 40px;
                
                > a {
                    font-size: 2.4rem;
                    font-style: normal;
                    font-weight: 700;
                }
        }

            h2 {
                font-size: 3.2rem;
                font-style: normal;
                font-weight: 500;
                line-height: 140%
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 3.2rem;
            }

            .first-line, .second-line{
                display: flex;
                flex-direction: row;
                gap: 3.2rem;
            }

            .image-plate {
                max-width: 23rem;
            }

            .name-plate {
                max-width: 46.3rem;
            }

            .category-plate {
                max-width: 36.4rem;
            }

            .ingredients-container {
                margin-top: 0;
                max-width: 83.7rem;
                
                .ingredients-wrapper {
                    gap: 16px;
                }
            }

            .plate-price {
                max-width: 25.1rem;
            }

            .plate-description {
                max-width: 112rem;
            }

            #category-input, #price-input, #description-input {
                margin-top: 0;
            }
            
            .save-button {
                padding: 12px 24px;
                width: 172px;
                grid-area: button;
                justify-self: end;
                margin-bottom: 116px;
            }
        }
    }
`