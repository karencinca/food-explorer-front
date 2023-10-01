import styled from 'styled-components'

export const Container = styled.div`

    .closed {
        display: none;
    }

    .menu.open{
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        transition: transform 0.3s ease-in-out;
        animation: slide-in .5s forwards;
    }

    .menu.closing {
        transition: transform 0.3s ease-in-out;
        animation: slide-out .5s forwards;
        
    }
    
    .menu-header {
        height: 114px;
        padding: 56px 28px 28px;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
    }

    .icon-menu {
        display: flex;
        align-items: center;
        gap: 16px;

        > span {
            font-size: 2.1rem;
        }
    }

    .content {
        padding: 36px 28px;
        background-color: ${({ theme }) => theme.COLORS.DARK_100};
        height: 100vh;
    }

    nav {
        margin-top: 36px;
    }

    nav li {
        list-style: none;
        font-size: 2.4rem;
        font-weight: 300;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #192227;
    }

    button {
        background: none;
        border: none;
    }


    @keyframes slide-in {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
}

    @keyframes slide-out {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
}

`