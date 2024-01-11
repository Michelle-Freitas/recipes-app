import styled from 'styled-components';
import { theme } from '../../Theme';

export const NotFoundContainer = styled.div`
    height: 90vh;
    padding-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${theme.colors.fontColor};

    img {
        max-height: 70%;
    }

    a {
        font-size: 0.7rem;
    }
`
