import { useNavigate } from "react-router-dom";
import SugestionCard from "../../components/SugestionCard/SugestionCard";
import { Button, RecipesContainer, SugestionCardContainer } from "./Recipes.style";

const Recipes = ({recipes, title}) => {
    const navigate = useNavigate()

    const handleClickBtnNavigate = (recipe) => {
        navigate(`/receitas/${recipe.id}/${recipe.route}`, {replace: true})
    }

    return (
        <RecipesContainer>
            <h1>{title}</h1>
            {recipes.map((recipe) => (
                <Button key={recipe.id} onClick={() => handleClickBtnNavigate(recipe)}>
                    <SugestionCardContainer>
                        <SugestionCard recipeInfo={recipe}/>
                    </SugestionCardContainer>
                </Button>
            ))}
        </RecipesContainer>
    )
}

export default Recipes
