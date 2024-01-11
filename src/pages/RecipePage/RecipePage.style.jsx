import styled from 'styled-components'
import { theme } from '../../Theme';

export const RecipePageContainer = styled.div`
    width: 100vw;
    height: 100%;
    padding-top: 15vh;
    background-color: ${theme.colors.bg};
    color: ${theme.colors.fontColor};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    @media screen and (max-width: 450px) { /*smartphone*/
        padding: 20vh 0 10vh 0;
    }

    h1 {
        padding-top: 32px;
    }
`
export const RecipeItemContainer = styled.section`
    max-width: 900px;
    padding: 2%;
    text-align: center;
    h3 {
        padding: 16px;
    }
    p {
        padding: 8px;
    }
`
