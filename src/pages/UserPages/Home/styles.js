import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    /* display: grid;
    grid-template-rows: 114px auto 77px;
    grid-template-areas:
    "header"
    "content"
    "footer"; */

    @media (min-width: 1024px) {
        .plates {
            margin-left: 110px;
            margin-right: 124px;
        }

    }
`

// export const Content = styled.div`
//     grid-area: content;
// `