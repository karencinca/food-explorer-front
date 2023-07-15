import styled from 'styled-components'

export const Container = styled.div`

    * {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .content {
        padding: 20px;

        > .back-btn {
            display: flex;
            align-items: center;
            gap: 10px;

            > a {
                font-weight: 500;
                font-size: 2.4rem;
                line-height: 140%;
            }
        }

        .plate {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }
    }

    .image-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        > img {
            height: 200px;
            width: 200px;
        }

    }
    
    .description-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        
        > h2 {
            font-weight: 500;
            font-size: 2.7rem;
            line-height: 140%;
            margin: 8px 0;
        }

        > p {
            text-align: center;
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 140%;
        }

        .ingredients-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 24px;
            min-width: 316px;
            justify-content: center;
            align-items: center;
            margin: 24px auto;
        }
    }
    .order-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
    }

    footer {
        position: static;
        bottom: 0;
    }

    @media (min-width: 1024px) {
        .content {
            padding-left: 124px;
            padding-right: 124px;
        }

        .content .plate {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 47px;
            margin-top: 42px;
            
            img {
                width: 390px;
                height: 390px;
            }

            .description-container {
                align-items: flex-start;

                .ingredients-container {
                    align-items: flex-start;
                    margin: 24px 0 48px 0;
                }
            }
        }

        footer {
            position: absolute;
            bottom: 0;
        }
    }

`