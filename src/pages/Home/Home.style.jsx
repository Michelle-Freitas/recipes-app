import styled from 'styled-components';
import { theme } from '../../Theme';
import home from '../../assets/images-bg/home.jpg';

export const HomeContainer = styled.div`
    background: url(${home}) no-repeat;
    background-size: cover;
    background-color: ${theme.colors.bg};
    width: 100vw;
    z-index: -1;
    height: 100vh;
    max-height: 100%;

    @media screen and (max-width: 850px) { /*smartphone and tablet*/
        background-image: none;
        padding: 2%;
        width: 100%;
    }
`

export const TitleContainer = styled.div`
    padding: 15vh 16px 0px 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h1 {
        color: ${theme.colors.fontColor};
        padding: 16px;
    }
    @media screen and (max-width: 850px) { /*smartphone and tablet*/
        text-align: center;
        padding: 15vh 0 0 0;
        h1 {
            padding: 0;
        }
    }
`

export const SugestionContainer = styled.div`
    width: 100%;
    height: 80%;
    padding: 16px 5vw 16px 40vw;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 850px) { /*smartphone and tablet*/
        padding: 0;
    }
`

export const TextSugestion = styled.div`
    padding: 8px;
    p {
        color: ${theme.colors.fontColor};
        font-size: 1.5em;
        padding: 8px;
        text-align: center;
    }
`

export const SugestionItemStyled = styled.section`
    display: flex;
    padding: 8px;
    gap: 48px;

    color: ${theme.colors.fontColor};
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 850px) { /*smartphone and tablet*/
        flex-direction: column;
        max-width: 70%;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.fontColor};
    }

    div {
        width: 100%;
        border: 3px solid ${theme.colors.primary};
        border-radius: 16px;
        box-shadow: ${theme.shadow};

        transition: all 0.8s;

        &:hover {
            scale: 1.05;
            transition: all 0.5s;
        }

        h2 {
            padding: 8px;
            text-align: center;
        }
        img {
            width: 100%;
            border-radius: 13px 13px 0 0;

            &:hover {
                opacity: .7;
            }
        }
    }

`
export const SectionInfo = styled.section`
    display: flex;
    justify-content: space-evenly;
    padding: 16px;
    gap: 5%;

    p {
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        line-height: 20px;
        padding: 8px 16px;
        background-color: ${theme.colors.primary};
        border-radius: 8px;
        box-shadow: ${theme.shadow};
    }
`
