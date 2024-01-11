import styled from 'styled-components';
import { theme } from '../../Theme';

export const FooterStyled = styled.footer`
    padding: 1%;
    height: 5vh;
    background-color: transparent;
    color: ${theme.colors.primary};
    font-weight: bold;

    p {
        text-align: center;
        padding: 4px;

        a {
            text-decoration: none;
            color: ${theme.colors.primary};
            
            &:hover {
                color: ${theme.colors.fontColor};
            };
        }
    }
`;
