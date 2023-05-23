import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    
    .menu-header {
        height: 114px;
        padding: 56px 24px 28px;
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

`