import SugestionCard from '../../components/SugestionCard/SugestionCard';
import { HomeContainer, SugestionContainer, SugestionItemStyled, TextSugestion, TitleContainer } from './Home.style';
import { Link } from 'react-router-dom';

const Home = ({sugestion}) => {

    return (
        <HomeContainer>
            <TitleContainer>
                <h1>DELICIOUS receitas</h1>
            </TitleContainer>
            <SugestionContainer>
                <TextSugestion>
                    <p>Sugestões deliciosas para você testar!</p>
                    <p>Comece agora uma receita!</p>
                </TextSugestion>
                <SugestionItemStyled>
                    {sugestion.map((recipe) => (
                        <Link  key={recipe.id} to={`receitas/${recipe.id}/${recipe.route}`}>
                            <SugestionCard recipeInfo={recipe}/>
                        </Link>
                    ))}
                </SugestionItemStyled>
            </SugestionContainer>
        </HomeContainer>
    )
}

export default Home

