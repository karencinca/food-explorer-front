import styled from 'styled-components'

export const Container = styled.div`
    margin-left: 15px;
    margin-top: 20px;
    position: relative;
    
    > .cards {
        display: flex;
        flex-direction: row;
        overflow: auto;
    }

    .scroll {
        display: flex;
        flex-direction: row;
        overflow: auto;
        scroll-behavior: smooth;
    }

    .scroll::-webkit-scrollbar {
        display: none;
    }
    
    > h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-bottom: 24px;
        }
    
        .linear-gradient-left {
            width: 224px;
            height: 462px;
            background: var(--gradients-100, linear-gradient(90deg, #000A0F 0%, rgba(0, 10, 15, 0.27) 100%));
            position: absolute;
            left: 0;
            z-index: 10;
            pointer-events: none;
        }

        .linear-gradient-right {
            background: var(--gradients-100, linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%));
            position: absolute;
            width: 224px;
            height: 462px;
            right: 0;
            z-index: 10;
            pointer-events: none;
        }

        .caret-left, .caret-right{
            font-size: 40px;
            position: absolute;
            cursor: pointer;
            transition: .3s;
            pointer-events: auto;
        }
        
        .caret-left {
            top: 40%;
            left: 20%;
        }

        .caret-right {
            top: 40%;
            right: 20%;
        }

        .caret-left:hover, .caret-right:hover {
            font-size: 45px;
        }

    @media (min-width: 1024px) {
        margin-top: 40px;

        h2 {
            font-size: 3.2rem;
        }

    }
`