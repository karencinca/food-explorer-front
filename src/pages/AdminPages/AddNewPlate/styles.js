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
`