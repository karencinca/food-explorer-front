import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', sans-serif;
    }
    
    :root {
        font-size: 62.5%;
    }
    
    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }

    *::-webkit-scrollbar {
        margin-right: 10px;
        width: 5px;
        height: 8px;
    }

    *::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.DARK_200};
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.DARK_300};
        border-radius: 30px;
    }

`