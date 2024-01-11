import styled from 'styled-components'
import { theme } from '../../Theme';

export const MenuContainer = styled.nav`
    height: 10vh;
    width: 100vw;
	background-color: ${theme.colors.primary};
    position: fixed;
    box-shadow: ${theme.shadow};
    z-index: 1;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & li {
        list-style: none;

        a {
            text-decoration: none;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    @media screen and (max-width: 450px) { /*smartphone*/
        flex-wrap: wrap;
        height: 25vw;
    }
`;


