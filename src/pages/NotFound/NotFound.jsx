import { NotFoundContainer } from "./NotFound.style";
import notFound from '../../assets/not-found.svg';

const NotFound = () => {
    return (
        <NotFoundContainer>
            <h2>Página não encontrada!</h2>
            <img src={notFound} alt="Imagem de not found page" />
            <a href="https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-erro-404_7741849.htm#query=erro%20404&position=3&from_view=search&track=ais&uuid=ea4d6e57-a6a5-4a66-ab6e-8a5864a3a397" target="_blank" rel="noopener noreferrer">Imagem de storyset - Freepik</a>
        </NotFoundContainer>
     )
}

export default NotFound
