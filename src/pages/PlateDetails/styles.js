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

            > span {
                font-weight: 500;
                font-size: 2.4rem;
                line-height: 140%;
                cursor: pointer;
            }
        }

        .plate {
            text-align: center;
            gap: 16px;
        }
    }

    .image-container {
        > img {
            height: 200px;
            width: 200px;
            margin: 16px;
            border-radius: 50%;
        }
    }
    
    .description-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        > h2 {
            font-weight: 500;
            font-size: 2.7rem;
            line-height: 140%;
    
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

        .stepper-button-wrapper {
            display: flex;
            gap: 16px;

            > button {
                font-size: .9rem;
            }
        }
    }

    .loader-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }

    .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: flex;
        animation: rotation 1s linear infinite;
        text-align: center;
    }

        @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media (min-width: 1024px) {
        .content {
            padding-left: 122px;
            padding-right: 122px;
        }
    
        main {
            display: flex;
            flex-direction: row;
            align-items: center;
            
            .description-container {
                display: flex;
                flex-direction: column;
                align-items: start;
            }

            .stepper-button-wrapper {
                > .button {
                    width: 17rem;
                    padding: 12px 24px;
                    gap: 8px;
                    font-size: 1.4rem;
    
                    > svg {
                        display: none;
                    }
                }

            }
        }
        
        .image-container {
        > img {
            height: 400px;
            width: 400px;
            margin: 47px;
        }

    }
}
`