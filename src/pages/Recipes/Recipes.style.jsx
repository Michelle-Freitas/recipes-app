import styled from 'styled-components'
import { theme } from '../../Theme';

export const RecipesContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 10vh 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    color: ${theme.colors.fontColor};

    h1 {
        padding-top: 5vh;
    }
`


export const Button = styled.button`
    color: ${theme.colors.fontColor};
    box-shadow: ${theme.shadow};
    border-radius: 16px;
    border: none;
    transition: all 0.5s;

    @media screen and (max-width: 450px) { /*smartphone*/
        max-width: 80%;
    }

    &:hover {
        scale: 1.05;
        transition: all 0.5s;
        color: ${theme.colors.fontColor};
        box-shadow: ${theme.shadow};
        border: none;
        border-radius: 16px;
        cursor: pointer;
        transition: all 0.5s;
    }
`

export const SugestionCardContainer = styled.div`
    div {
        background-color: ${theme.colors.bg};
        width: 70vw;
        height: 300px;

        border-radius: 16px;
        position: relative;

        img {
            height: 100%;
            border-radius: 16px 0 0 16px;
            display: flex;

            @media screen and (max-width: 450px) { /*smartphone*/
                width: 100%;
                height: auto;
                border-radius: 16px 16px 0 0;
            }
            @media screen and (min-width: 450px) and (max-width: 850px) { /*tablet*/
                width: 60%;
                object-fit: cover;
            }
        }

        h2 {
            position: absolute;
            top: 10%;
            left: 60%;

            @media screen and (max-width: 450px) { /*smartphone*/
                position: initial;
                top: 0%;
                left: 0%;
            }

            @media screen and (min-width: 450px) and (max-width: 850px)  { /*tablet*/
                position: absolute;
                top: 10%;
                left: 65%;
            }
        }

        section {
            width: 60%;
            position: absolute;
            bottom: 10%;
            right: 0%;

            @media screen and (max-width: 450px) { /*smartphone*/
                position: initial;
                width: 100%;
            }
        }
    }
`

