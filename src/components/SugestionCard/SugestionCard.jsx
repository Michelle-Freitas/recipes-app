import { SectionInfo } from "../../pages/Home/Home.style";

const SugestionCard = ({ recipeInfo }) => {
    return (
        <div>
            <img src={'../../../' + recipeInfo.image} alt={recipeInfo.alt} />
            <h2>{recipeInfo.title}</h2>
            <SectionInfo>
                <p>Tempo: {recipeInfo.time}</p>
                <p>Porções: {recipeInfo.portions}</p>
            </SectionInfo>
        </div>
     )
}

export default SugestionCard
