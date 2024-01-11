import { styled } from "styled-components";
import { theme } from "../../Theme";

export const SearchContainer = styled.div`
    /* position: absolute; */
`
export const LabelStyled = styled.label`
    width: 20%;
    background-color: ${theme.colors.bg};
    border-radius: 8px;
    position: relative;

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0); /*criando retangulo com lados 0 para forçar caixar ser inexistente */
        white-space: nowrap; /*forçar ao elemento não quebrar linha*/
        border-width: 0;
    }

    input {
        width: 100%;
        border-radius: 4px;
        padding: 16px;
        border: none;
        background-color: ${theme.colors.bg};

        font-size: 16px;

        &:focus{
            border: none;
            background-color: ${theme.colors.bg};
        }
        &::-moz-focus-outer{
            border: 2px solid ${theme.colors.secondary};
            background-color: ${theme.colors.primary};
        }
    }

    span {
        width: 10%;
        height: 90%;
        position: absolute;
        right: 5px;
        top: 4px;

        z-index: 1;

        border-left: 1px solid ${theme.colors.bg};
        background-color: ${theme.colors.bg};
        border: none;
        border-radius: 8px;
    }

`
export const SearchResult = styled.div`
    position: absolute;
    color: black;
    background-color: #f1f1f1;
    border: none;
    border-radius: 0 8px;

    display: flex;
    flex-direction: column;
    gap: 4px;

    max-height: 140px;
    overflow: hidden ;
    overflow-y: auto;

    background-color: ${theme.colors.bg};

    button {
        border: none;
        padding: 8px;
        background-color: ${theme.colors.bg};

        &:hover {
            cursor: pointer;
            background-color: #fff
        }
    }

`
