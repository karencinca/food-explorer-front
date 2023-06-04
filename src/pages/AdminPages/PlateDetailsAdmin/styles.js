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
            margin: 16px;
        }

        > h2 {
            font-weight: 500;
            font-size: 2.7rem;
            line-height: 140%;

        }
    }

    .description-container {
        display: flex;
        align-items: center;
        flex-direction: column;

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
`