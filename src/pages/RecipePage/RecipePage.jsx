import { useParams } from "react-router-dom"
import { useRef } from "react"
import SugestionCard from "../../components/SugestionCard/SugestionCard"
import { RecipeItemContainer, RecipePageContainer } from "./RecipePage.style"
import { SugestionCardContainer } from "../Recipes/Recipes.style"

const RecipePage = ({recipes}) => {
    const params = useParams()
    const recipeFull = useRef(recipes[params.id - 1])

    return (
        <RecipePageContainer>
            <SugestionCardContainer>
                <SugestionCard recipeInfo={recipeFull.current}/>
            </SugestionCardContainer>
            <RecipeItemContainer>
                <h3>Ingredientes</h3>
                {recipeFull.current.ingredient.map((ingredientLine => <p key={ingredientLine}>{ingredientLine}</p>))}
                <h3>Modo de preparo</h3>
                {recipeFull.current.prepare.map((ingredientLine => <p key={ingredientLine}>{ingredientLine}</p>))}
            </RecipeItemContainer>
        </RecipePageContainer>
    )
}

export default RecipePage
